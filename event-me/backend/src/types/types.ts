export interface Rsvp {
  event_id: number;
  name: string;
  email: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface Event {
  id: number;
  title: string;
  description?: string;
  date: Date;
  image_url?: string;
  host_id: number;
  host: User;
  rsvps?: Rsvp[];
}
