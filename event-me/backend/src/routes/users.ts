import { Router } from "express";
import db from "../db.ts";
import type { Request, Response } from "express";
import type { Id, User } from "../types/types.ts";

const router = Router();

type UserId = User["id"]; // index access types. it is done over the interface. It is used to pick the particular only type out of the whole type defined like the user. where as the Pick<> creates the same User's new type with only the properties we defined.
// type PickedUserId = Pick<User, "id">; 

export const getUser = (userId: UserId): User => {
  if (typeof userId === "string") {
    userId = parseInt(userId, 10);
  }
  const byId = db.prepare("SELECT * FROM users WHERE id = @userId");
  return byId.get({ id: userId });
};

router.get("/", (_req: Request, res: Response<User[]>) => {
  const listUsers = db.prepare(`SELECT * FROM users`);
  const users: User[] = listUsers.all() as User[];
  res.json(users);
});

router.post("/new", (req: Request, res: Response<User>): void => {
  const data = req.body;
  const cols = Object.keys(data).join(" , ");
  const vals = Object.values(data).join(" , ");
  const insertUser = db.prepare(`INSERT INTO users(@cols) VALUES (@vals)`);
  const { lastInsertRowid: id } = insertUser.run({ cols, vals });
  const user: User = getUser(Number(id));
  res.json(user);
});

router.get(
  "/:id",
  (
    req: Request<{ id: string }>,
    res: Response<{ error: string } | User>,
  ): void => {
    const id = req.params.id;
    const user = getUser(id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  },
);

router.patch("/:id", (req: Request<{ id: string }>, res: Response) => {
  const userId = req.params.id;
  const patch = req.body;

  const updateCol = db.prepare(`
    UPDATE users SET @col = @val WHERE id = @userId
  `);
  const updateUser = db.transaction((patch) => {
    for (const [col, val] of Object.entries(patch)) {
      updateCol.run(col, val, userId);
    }
  });

  updateUser(Object.entries(patch));
  const updated = getUser(userId);
  res.json(updated);
});

router.delete("/:id", (req: Request<{ id: string }>, res: Response) => {
  const deleteUser = db.prepare(`DELETE FROM users WHERE id = @userId`);
  const userId = req.params.id;
  const user = getUser(userId);
  if (!user) {
    res.status(404).json({ error: "User not found" });
  }
  deleteUser.run({ userId });
  res.json(user);
});

export default router;
