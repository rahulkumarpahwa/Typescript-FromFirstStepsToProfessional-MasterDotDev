1. What are the two main characteristics of JavaScript's type system that can lead to unexpected behavior?
1. JavaScript has dynamic types and weak types. Dynamic types means JavaScript figures out types as the code runs, not in advance. Weak types means JavaScript will try to coerce (convert) types from one to another when it encounters unexpected types, which can lead to surprising results.

2. What happens in JavaScript when you try to concatenate the string "1" with the number 1 using the plus operator?
2. JavaScript will coerce the number 1 to a string and perform string concatenation, resulting in the string "11". This happens because JavaScript sees a string on one side of the plus operator and assumes string concatenation is intended, so it converts the number to match.

3. How does JavaScript handle variables when their assigned values change types? Consider this example:

let number = 3.14;
number.toFixed(2); // works
number = "IE";
number.toFixed(2); // what happens?

3. In JavaScript, variables can hold values of different types at different times. When number is reassigned from a number (3.14) to a string ("IE"), the same method call toFixed() will fail because strings don't have a toFixed() method. This demonstrates how dynamic typing can cause runtime errors when type assumptions change.

4. What is the result of adding an empty array to an empty array in JavaScript, and why does this happen?
4. Adding an empty array to an empty array ([] + []) results in an empty string (""). This happens because JavaScript sees the plus operator and coerces both arrays to strings. Since empty arrays convert to empty strings, concatenating two empty strings results in an empty string.

5. What is type coercion in JavaScript and when does it occur?
5. Type coercion is when JavaScript automatically converts a value from one type to another to complete an operation. It occurs when JavaScript encounters types it doesn't expect for a particular operation. For example, when using operators like plus (+) or minus (-) with mixed types, JavaScript will coerce values to types it can work with, which can sometimes lead to unexpected results.

6. Where was JavaScript originally designed to run when it was created in 1995?
6. JavaScript was originally designed to run only in the browser. It was a scripting language meant to add interactivity to websites, such as handling button clicks and pop-up alerts.

7. What technology enables JavaScript to run on the server-side outside of the browser?
7. Node enables JavaScript to run on the server-side outside of the browser environment.

8. What problem does TypeScript aim to solve in JavaScript development?
8. TypeScript aims to eliminate type-related problems in JavaScript code before they reach production. It helps prevent bugs like rendering 'object object' or displaying 'undefined' values to users, and stops developers from writing buggy code in the first place by adding type safety to JavaScript.

9. When was TypeScript first developed internally at Microsoft, and when was it open sourced?
9. TypeScript was first developed internally at Microsoft around 2010 and was open sourced in 2012.

10. What are some modern environments where JavaScript can run beyond the traditional browser?
10. JavaScript can now run in many environments including: server-side (via Node), mobile applications, serverless environments for data processing, and IoT (Internet of Things) embedded devices.

11. What file extension is used for TypeScript files, and how does it differ from JavaScript files?
11. TypeScript files use a .ts extension, while JavaScript files use a .js extension. This small change in extension represents significant differences in the language itself, including how types are handled and whether the code is interpreted or compiled.

12. What is the relationship between TypeScript and JavaScript in terms of syntax, and what does it mean that TypeScript is a superset of JavaScript?
12. TypeScript is a superset of JavaScript, meaning TypeScript syntax includes all of JavaScript syntax plus additional features. JavaScript code is valid TypeScript code, so renaming a .js file to .ts will still work. However, the opposite is not true - TypeScript code with its additional syntax cannot run directly as JavaScript and must be compiled first.

13. How do the type systems differ between JavaScript and TypeScript?
13. JavaScript has dynamic and weak typing, allowing types to change during runtime and automatically coercing between types (like converting strings to numbers). TypeScript has static and strong typing, meaning types are declared in the code and remain constant - once something is typed, it stays that type forever, and automatic type coercion doesn't occur.

14. What is the difference between interpreted and compiled languages, and how does this distinction apply to JavaScript and TypeScript?
14. JavaScript is an interpreted language, meaning it reads and executes code line by line at runtime. TypeScript is a compiled language, meaning it translates TypeScript code into JavaScript code as an intermediate step before execution. The TypeScript compiler takes .ts files and outputs equivalent .js files that can be run in browsers or Node.js.

15. What happens to TypeScript-specific syntax and type information during the compilation process?
15. During compilation, all TypeScript-specific syntax and type information is removed because it's not valid JavaScript. The compiler outputs equivalent JavaScript code with the smaller set of syntax that works in JavaScript environments. This allows the compiled code to run in browsers or Node.js while maintaining the benefits of type checking during development.

16. What command is used to install TypeScript globally using npm?
16. npm install -g typescript (or npm install global typescript). After installation, you can verify it worked by running 'tsc --version' to see the TypeScript compiler version number.

17. What two flags are used with the TypeScript compiler (tsc) command to check a JavaScript file for errors without generating output files?
17. --checkJs and --noEmit. These flags allow TypeScript to type check JavaScript files and report errors without producing any compiled output.

18. What information does TypeScript provide in its error output when checking code?
18. TypeScript error output includes: specific error identifiers (error codes), line numbers where problems occur, character position on each line, the file name where the error is located, and visual indicators like squiggles to highlight problematic code.

19. What is a key advantage of using TypeScript to check JavaScript files at development time versus runtime?
19. TypeScript can catch errors at development time (when writing code) before the code actually runs in the browser. This allows developers to identify problems like typos, incorrect property access, or type mismatches that would otherwise only surface as runtime errors in JavaScript.

20. According to the content, what is considered a fundamental skill when working with TypeScript?
20. Understanding and reading TypeScript error messages is considered a fundamental skill, described as being about 99% of working with TypeScript.

21. What additional errors does TypeScript report when using the --strict flag compared to non-strict mode?
21. In strict mode, TypeScript reports errors for properties that do not exist on objects. For example, trying to console.log a non-existent property will cause an error in strict mode, whereas in non-strict mode TypeScript allows it since logging undefined is technically valid JavaScript.

22. What is the purpose of the --strict flag when running the TypeScript compiler?
22. The --strict flag tells TypeScript to be very strict with type checking and not let anything slide. It catches more potential issues than the default mode, giving developers more errors during development to prevent headaches for users later.

23. Why does TypeScript report an error when reassigning a variable from an object to a string type?
23. TypeScript infers the type of a variable based on its initial assignment. When a variable is first assigned an object with properties, TypeScript expects it to remain that type. Reassigning it to a completely different type like a string creates a type mismatch error because the new value is not assignable to the inferred object type.

24. What command structure is used to run the TypeScript compiler in strict mode to check a JavaScript file without emitting output?
24. The command is tsc --checkJs --noEmit --strict filename.js. The --checkJs flag enables type checking on JavaScript files, --noEmit prevents output file generation, and --strict enables strict type checking mode.

25. Can TypeScript catch all bugs in your code, such as incorrect logical assignments or business logic errors?
25. No, TypeScript cannot catch every bug in your code. It helps catch type-related errors like misspelled property names and type mismatches, but it cannot catch logical errors or incorrect business logic. Developers still need to think about what their code should do and ensure correct behavior beyond type safety.

26. In TypeScript, how do you add a type annotation to a variable declaration?
26. You add a type annotation using a colon followed by the type name. For example: let n: number = 5; This tells TypeScript that the variable n must always be a number.

27. What is the difference between a primitive type and a literal type in TypeScript?
27. A primitive type (like number or string) represents all possible values of that type. A literal type is a specific, exact value. For example, number allows any number, but the literal type 5 means the variable can only ever be the number 5. Literal types are useful when you want to restrict a variable to specific allowed values.

28. How do you add type annotations to function parameters and return values in TypeScript? Provide an example with a function that adds two numbers.
28. You add type annotations to parameters using a colon and type name after each parameter, and to the return value after the parentheses. For example:

function add(a: number, b: number): number {
  return a + b;
}

This specifies that both parameters must be numbers and the function must return a number.

29. Can you declare a variable with a type annotation in TypeScript before assigning it a value? If so, how?
29. Yes, you can declare a variable with a type annotation before assigning it a value. For example: let x: number; This declares that x will be a number, and when you later assign a value to it, TypeScript will enforce that it must be a number.

30. In TypeScript, how can you specify that a variable must be one of several specific string values? For example, a state that can only be "alive" or "dead".
30. You can use literal types combined with the pipe operator (|) to create a union of specific values. For example: let state: "alive" | "dead"; This means the state variable can only be assigned the literal string "alive" or "dead", and any other string value will cause a TypeScript error.

31. How do you declare an array type in TypeScript that only contains numbers?
31. You use the type followed by square brackets, like number[]. For example: let digits: number[] = [1, 2, 3]. This tells TypeScript that the array can only contain number values.

32. What is the syntax for defining an object type in TypeScript with specific property types?
32. You use curly brackets with property names followed by colons and their types. For example:

let user: {
  name: string;
  id: number;
}

This defines an object that must have a name property of type string and an id property of type number.


33. What happens if you try to push a string value into a TypeScript array that is typed as number[]?
33. TypeScript will produce a compilation error because the array is typed to only accept number values. The error will indicate that the argument type doesn't match the expected type for the array's elements.

34. How do you make a property optional in a TypeScript object type definition, and what type does it become?
34. You add a question mark before the colon in the property definition. For example: color?: string. This makes the property optional, and TypeScript treats its type as string | undefined, meaning it can be either a string or undefined.

35. What error does TypeScript produce if you try to access a method on an optional property without checking if it exists first? For example, calling .toUpperCase() on an optional color?: string property.
35. TypeScript produces an error indicating that the property might be undefined, and you cannot call string methods on a value that might be undefined. You must first check that the property exists before calling methods on it.

36. What is a union type in TypeScript and how is it declared?
36. A union type is a way to tell TypeScript that a value can be any of several specified types. It is declared using the pipe operator (|). For example, number | string creates a type that can be either a number or a string. The union type represents the combination of all possible values from both types, like the union of two sets.

37. How would you type a variable that can be either a single number, an array of numbers, or null?
37. You would use the pipe operator to create a union type: number | number[] | null. This declares that the variable can hold a single number value, an array of numbers, or null. Each option is separated by the pipe operator to indicate the union of these types.

38. What is the purpose of parentheses when creating an array type from a union type? For example, why are parentheses needed in (number | string)[]?
38. Parentheses control the order of operations when combining union types with array syntax. (number | string)[] creates an array where each element can be either a number or a string. Without parentheses, number | string[] would mean either a single number or an array of strings, which is a different type. The parentheses ensure the union type is applied to each array element rather than making the entire array part of the union.

39. Given the type declaration number[] | string[], what values would be valid?
39. Valid values would be either an array containing only numbers (like [1, 2, 3]) or an array containing only strings (like ['a', 'b', 'c']). An array with mixed numbers and strings would not be valid, nor would a single number or string. The type specifies that the value must be one complete array of numbers OR one complete array of strings.

40. What happens when you declare a variable with a type annotation but don't assign it a value? For example: let uninitiated: string;
40. The variable will have a value of undefined until you assign it a value, which is standard JavaScript behavior. TypeScript will remember the type annotation (string in this example) and enforce that when you eventually assign a value, it must match that type. TypeScript may also warn you if you try to use the variable before assigning it a value, depending on your strictness settings.

41. In TypeScript, what is the relationship between the union type number | string and its constituent types number and string?
41. The union type number | string is wider than both the type number and the type string. This means it encompasses more values than either of the primitive types individually, as it includes all possible numbers and all possible strings.

42. What are type guards in TypeScript and when are they commonly used?
42. Type guards are conditional checks, often implemented using if statements or ternary operators, that narrow down union types to handle different possible types separately. They are commonly used to prevent errors like trying to call methods on null or undefined values by checking the actual type before performing type-specific operations.

43. Given the following code, why does TypeScript show an error?

const elmOrNull: HTMLElement | null = document.getElementById('myId');
elmOrNull.addEventListener('click', () => {});

43. TypeScript shows an error because elmOrNull has the type HTMLElement | null, meaning it could be null. Trying to call addEventListener on a potentially null value is unsafe, as null doesn't have this method. A type guard is needed to check if the value is not null before calling the method.

44. What is the purpose of type aliases in TypeScript and what keyword is used to create them?
44. Type aliases allow you to create named references to types, making code more readable and maintainable by avoiding repetitive type annotations. They are created using the type keyword followed by a name in Pascal case (capitalized), an equals sign, and the type definition.

45. What happens to the type of a variable inside different branches of an if statement that checks the variable's type?
45. TypeScript performs type narrowing within each branch. Inside the if block where a type check occurs, the variable's type is narrowed to only the type being checked for. In the else block, the type is narrowed to exclude the checked type, leaving only the remaining possible types from the original union.