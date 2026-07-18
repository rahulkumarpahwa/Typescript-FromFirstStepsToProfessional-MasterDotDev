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