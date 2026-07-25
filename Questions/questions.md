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

46. What file extension is used for TypeScript files?
46. .ts is used for TypeScript files. To convert a JavaScript file to TypeScript, you rename the file from .js to .ts.

47. What is TSX (TypeScript Execute) and what is its purpose?
47. TSX is a utility tool that allows you to run TypeScript (.ts) files directly, similar to how Node runs JavaScript files. It's useful for executing TypeScript files without having to manually compile them first, especially when not using the latest Node versions that have built-in TypeScript support.

48. How do you install and use TSX to run a TypeScript file in watch mode?
48. First, install TSX globally using npm install -g tsx. Then, to run a TypeScript file in watch mode, use the command tsx --watch filename.ts. The watch flag will automatically rerun the file whenever changes are saved, without having to manually restart the process.

49. Why is all JavaScript code considered valid TypeScript?
49. All JavaScript code is valid TypeScript because TypeScript is a superset of JavaScript. This means that any valid JavaScript code is also valid TypeScript code, allowing for gradual migration from JavaScript to TypeScript.

50. What are some TypeScript syntax features that can be used to define types?
50. TypeScript includes several syntax features for defining types: type annotations for variables and function parameters, function return type annotations, type aliases for reusing types, union types using the pipe operator to combine types, and specific array and object type definitions.

51. In TypeScript, how do you declare a type alias and what is the naming convention?
51. You declare a type alias using the type keyword followed by the type name and its definition. The convention is to use capital letters for type names, similar to class names. For example:

type Event = {
  id: number;
  title: string;
}


52. How do you make a property optional in a TypeScript type definition?
52. You add a question mark (?) after the property name before the colon. For example:

type Event = {
  id: number;
  imageURL?: string;
  description?: string;
}

This indicates that imageURL and description are optional properties that may or may not be present.

53. What is a union type in TypeScript and how is it declared?
53. A union type allows a variable to be one of several types. It is declared using the pipe operator (|) between types. For example:

type ID = string | number;

This means an ID can be either a string or a number. The order of types in a union doesn't matter (e.g., string | number is the same as number | string).

54. How do you specify the return type of a function in TypeScript, and what happens if a function doesn't explicitly return a value?
54. You specify the return type after the function parameters using a colon followed by the type:

function getEventDetails(id: number): string {
  return "event details";
}

If a function doesn't explicitly return a value, JavaScript returns undefined. TypeScript will flag this as an error if you've declared a different return type, helping you catch missing return statements.

55. What is type inference in TypeScript and how does it work with array methods like filter?
55. Type inference is TypeScript's ability to automatically determine types without explicit annotations. With array methods like filter, TypeScript knows the type of elements being passed to the callback function based on the array's type. For example, if you have an array of Event objects, TypeScript automatically infers that the parameter in the filter callback is an Event, without requiring manual type annotation.

56. What is the primary purpose of TSX (TypeScript Execute) as a development tool?
56. TSX is a development tool that allows developers to quickly iterate on TypeScript files without having to manually convert them to JavaScript first. It can run TypeScript files directly in Node, making development faster, especially when used with the watch option that continuously runs and shows output.

57. What is a key limitation of TSX compared to the TypeScript compiler (tsc)?
57. TSX does not perform rigorous type checking like tsc does. While it runs TypeScript code as if it were JavaScript in Node, it skips the type checking process that the TypeScript compiler performs, which means it won't catch type errors that tsc would detect.

58. What is the default behavior of the TypeScript compiler (tsc) when run without additional flags?
58. By default, tsc compiles TypeScript files to JavaScript and emits corresponding .js files. For example, running tsc on a .ts file will generate a .js file with the compiled JavaScript code in the same directory.

59. What does the noEmit flag do when used with the TypeScript compiler?
59. The noEmit flag prevents the TypeScript compiler from generating JavaScript output files. When used, tsc will only perform type checking without emitting any compiled .js files, which is useful when you only want to verify types without generating output.

60. Why might the TypeScript compiler be slower than tools like TSX during development?
60. The TypeScript compiler has significant cognitive overhead because it analyzes not only your code but also type definitions for built-in JavaScript methods and other dependencies. This comprehensive type checking process requires more processing time compared to TSX, which simply runs the code without type checking.

61. What is the purpose of the TypeScript compiler (tsc) when transforming TypeScript code?
61. The TypeScript compiler transforms TypeScript files (.ts) into JavaScript files (.js) that browsers and Node.js can execute. It emits or compiles new JavaScript code that is automatically generated and may look different from the original source, removing TypeScript-specific syntax like type annotations.

62. Why is it still often necessary to compile TypeScript to JavaScript instead of running .ts files directly?
62. While some newer experimental versions of Node can run .ts files directly, JavaScript compilation is still necessary for browser environments and older runtime environments that only know how to execute .js files. This ensures broader compatibility across different execution environments.

63. What is type inference in TypeScript?
63. Type inference is the ability of the TypeScript compiler to automatically determine and understand the types in code without them being explicitly declared. For example, TypeScript can know about methods like the string filter method even when types aren't explicitly specified.

64. What is the purpose of a tsconfig.json file in a TypeScript project?
64. A tsconfig.json file is used to configure the TypeScript compiler, controlling how it transforms TypeScript code into JavaScript and specifying various compilation options and settings for the project.

65. What file extensions are used for TypeScript source files versus compiled JavaScript output files?
65. TypeScript source files use the .ts extension, while the compiled output files use the .js extension. The compiler transforms .ts files into .js files that can be executed by JavaScript runtimes.

66. What is the relationship between TypeScript and JavaScript in terms of their structure?
66. TypeScript is a superset of JavaScript, meaning JavaScript is at the core of TypeScript. Everything about TypeScript is anchored in JavaScript, with TypeScript adding extra syntax and type information on top of the base JavaScript language.

67. What happens to TypeScript type annotations and type aliases when a .ts file is compiled to a .js file?
67. All type annotations, type aliases, and other TypeScript-specific syntax are removed during compilation. The resulting .js file contains only JavaScript code without any of the type information. This type information only exists at compile time, not at runtime.

68. What does the checkJs flag do when passed to the TypeScript compiler?
68. The checkJs flag tells the TypeScript compiler to also check JavaScript (.js) files in addition to its default behavior of checking TypeScript (.ts) files. This allows type checking to be performed on regular JavaScript files.

69. What is the purpose of the noEmit flag in the TypeScript compiler?
69. The noEmit flag prevents the TypeScript compiler from generating any output files (such as .js files). This is useful when you only want to perform type checking without actually producing compiled JavaScript output.

70. What is the default input and output behavior of the TypeScript compiler (tsc)?
70. By default, the TypeScript compiler takes .ts files as input and emits (outputs) .js files. The compiler automatically generates JavaScript files from TypeScript files without needing explicit instructions to do so.

71. What does the TypeScript compiler's target flag specify?
71. The target flag specifies which version of JavaScript (ECMAScript) the TypeScript compiler should output. It determines what syntax and features will be used in the compiled JavaScript code, ensuring compatibility with the intended runtime environment.

72. What is the default target version used by the TypeScript compiler if no target is specified?
72. The default target version is ES5. This provides broad browser compatibility by outputting JavaScript syntax that works in older environments.

73. What does the target ES Next represent in TypeScript compiler options?
73. ES Next is shorthand for the latest, most current version of JavaScript. Using this target means the output will contain the newest syntax and features, but may not work in older browsers or environments.

74. What is the purpose of the TypeScript compiler's removeComments flag?
74. The removeComments flag strips all comments from the output JavaScript file. When used, the compiled JavaScript will not include any comments that were present in the original TypeScript source code.

75. When targeting ES 2020 instead of ES5 in TypeScript, what is one noticeable difference in the output JavaScript code?
75. When targeting ES 2020, the output JavaScript uses const and let keywords instead of var. The code also uses more modern JavaScript syntax and features that are specific to ES 2020.

76. What is the purpose of the tsconfig.json file in a TypeScript project?
76. The tsconfig.json file is a way to specify all of the TypeScript compiler options without having to write out the command line with all the flags every time you compile.

77. Why is TypeScript typically installed as a development dependency rather than a regular dependency in a project?
77. TypeScript is installed as a development dependency because it does not actually run - JavaScript runs. TypeScript is only used while writing code and working on the project, and isn't needed or able to be used in the end product.

78. What command can be used to generate a new tsconfig.json file for a TypeScript project?
78. You can use the command tsc --init to automatically generate a new tsconfig.json file for your project.

79. What happens when you run the TypeScript compiler (tsc) with no arguments and no configuration?
79. When you run tsc with no arguments and no configuration, it displays a help message showing all the options and information about what the compiler can do, but it doesn't actually compile anything.

80. What is the npm command to install TypeScript as a development dependency in a project?
80. You can use npm i -D typescript or the longer form npm install --save-dev typescript to install TypeScript as a development dependency.

// https://cdn.master.dev/assets/courses/2025-10-09-typescript-first-steps/18-tsconfig-json-type-declarations_review.json
81. 
81. 

82.
82. 

83. 
83.

84. 
84. 

85. 
85.

86. What is the primary difference between using interface and type aliases for defining object types in TypeScript?
86. Interfaces can be extended using the extends keyword, making them more composable and reusable. They allow you to create subtypes that inherit properties from parent interfaces, similar to inheritance in object-oriented programming. Interfaces also have some performance benefits over type aliases for object types.


87. When an interface extends another interface in TypeScript, what properties does the child interface inherit?
87. The child interface inherits all properties from the parent interface it extends. For example, if a Human interface extends a User interface that has username and id properties, the Human interface will automatically include those properties in addition to any properties it defines directly.

88. What happens to TypeScript interfaces when the code is compiled to JavaScript?
88. Interfaces do not exist in the output JavaScript. They are purely TypeScript entities used for type checking during development and are removed during compilation.

89. Given this TypeScript code:

interface User {
  username: string;
  id: number;
}

interface Human extends User {
  fullName: string;
}

What properties are required when creating an object of type Human?
89. An object of type Human requires all three properties: username (string), id (number), and fullName (string). The username and id are inherited from the User interface through the extends keyword.

90. What is the conventional difference in syntax between defining an interface and a type alias for objects in TypeScript?
90. Interfaces typically use semicolons to separate properties, while type aliases typically use commas. For example: interface User { name: string; id: number; } versus type User = { name: string, id: number }

91. What is the return type of an async function that has a function body returning a string?
91. The return type is a Promise<string>, not a string. Even though the function body returns a string, an async function always returns a Promise that wraps the returned value.

92. In TypeScript, what do the angle brackets in Promise<string> represent?
92. The angle brackets represent a type parameter being passed to the Promise type. The value inside the angle brackets (string in this case) specifies the type of value that the Promise will resolve to.

93. What error does TypeScript report when trying to access the length property on a Promise<string> without awaiting it?
93. TypeScript reports that 'property length does not exist on type Promise<string>' and helpfully suggests 'Did you forget to use await?'

94. Can a variable declared as Promise<number> be assigned a value of type Promise<null> in TypeScript?
94. No, TypeScript will report an error because Promise types with different type parameters are not compatible. A Promise<null> is not assignable to a variable declared as Promise<number>, even though both are Promises.

95. Why does the Promise type need to be parameterized with another type using angle brackets?
95. The Promise type itself is not useful without knowing what type of value it will resolve to. By parameterizing it (e.g., Promise<number> or Promise<string>), TypeScript can track what type of value will be available when the Promise is resolved or awaited.

96. What is a generic type in TypeScript and how is it declared?
96. A generic type is a type that takes in a type parameter inside angle brackets. It allows for reusable types where the actual type is not known at declaration time. The convention is to use a capital letter (usually T) as the type parameter. For example: type Nullable<T> = T | null declares a generic type where T is a parameter that will be instantiated later with a specific type.

97. How does the Nullable generic type work and what problem does it solve?
97. The Nullable generic type allows you to create a type that can be either the specified type or null. For example, type Nullable<T> = T | null means you can use Nullable<number> for a number or null, Nullable<string> for a string or null, etc. This solves the problem of having to manually create type unions like number | null, string | null for every type you want to nullify, making the code more flexible and reusable.

98. What does the Readonly utility type do in TypeScript?
98. The Readonly utility type makes all properties of a type read-only, preventing reassignment of those properties. For example, Readonly<User> creates a new type where all properties of User cannot be reassigned. This is shorthand for adding the readonly keyword before each property. It helps catch errors at compile time when code tries to modify values that should remain constant.

99. What are utility types in TypeScript?
99. Utility types are built-in parameterized types in TypeScript that can be used to manipulate or transform other types. They allow you to create specialized versions of existing types without having to manually declare new types. Examples include Readonly, which makes all properties read-only. They save the work of having to retype entire type declarations when you need a transformed version of an existing type.

100. When using Readonly<User> in TypeScript, does it modify the original User type?
100. No, using Readonly<User> does not modify the original User type. It creates a new, distinct type called Readonly<User> that has all the properties of User but made read-only. The original User type remains unchanged and continues to be as mutable as it was originally defined. This transformation creates a more specialized type without affecting the base type.

101. What does the Partial utility type do to the properties of a type in TypeScript?
101. The Partial utility type makes all properties of a type optional. It essentially adds a question mark after every property, allowing you to create objects with any subset of the original type's properties.


102. Given a user type with properties username, id, and email, what would Partial<User> allow you to do?
102. Partial<User> would allow you to create objects with any combination of these properties (including none at all), since all properties become optional. However, it still only allows properties that exist in the User type and would reject invalid properties that aren't part of the original type.

103. What is the difference between the Pick and Omit utility types in TypeScript?
103. Pick creates a new type by selecting only the specified properties from an existing type, while Omit creates a new type by excluding the specified properties. They are essentially opposites - Pick includes what you specify, Omit excludes what you specify.

104. Given an interface Human with properties username, id, and fullName, what type would Pick<Human, 'id'> create?
104. It would create a type that only has the id property from the Human interface. The resulting type would be a more specific subset of Human containing just that single property.

105. What is a generic type in TypeScript and how is it typically represented?
105. A generic type is a type that is declared with angle brackets and parameters representing types that aren't known yet. Generic types can accept type parameters, similar to how functions accept data arguments. They are often represented with a letter like T in their definition, and can accept multiple parameters separated by commas.

106. What does the Partial utility type do to the properties of a type in TypeScript?
106. The Partial utility type makes all properties of a type optional. It essentially adds a question mark after every property, allowing you to create objects with any subset of the original type's properties.

107. Given a user type with properties username, id, and email, what would Partial<User> allow you to do?
107. Partial<User> would allow you to create objects with any combination of these properties (including none at all), since all properties become optional. However, it still only allows properties that exist in the User type and would reject invalid properties that aren't part of the original type.

108. What is the difference between the Pick and Omit utility types in TypeScript?
108. Pick creates a new type by selecting only the specified properties from an existing type, while Omit creates a new type by excluding the specified properties. They are essentially opposites - Pick includes what you specify, Omit excludes what you specify.

109. Given an interface Human with properties username, id, and fullName, what type would Pick<Human, 'id'> create?
109. It would create a type that only has the id property from the Human interface. The resulting type would be a more specific subset of Human containing just that single property.

110. What is a generic type in TypeScript and how is it typically represented?
110. A generic type is a type that is declared with angle brackets and parameters representing types that aren't known yet. Generic types can accept type parameters, similar to how functions accept data arguments. They are often represented with a letter like T in their definition, and can accept multiple parameters separated by commas.

111. What is the any type in TypeScript and how does it affect type checking?
111. The any type represents any type of value. When a variable is typed as any, TypeScript essentially stops type checking for that variable, making it behave like a regular JavaScript variable that can hold any value without compiler errors.

112. What is the noImplicitAny compiler option in TypeScript?
112. The noImplicitAny compiler option makes TypeScript complain when it encounters variables or function parameters without explicit type declarations that would default to any. By default, the compiler allows implicit any types, but enabling this option forces developers to explicitly declare types or use explicit any when needed.

113. What problem can occur when using the any type in TypeScript?
113. Using the any type bypasses TypeScript's type checking, which means errors that would normally be caught at compile time can slip through and cause runtime errors. For example, a variable might start as a string, be reassigned as a number, and then have string methods called on it, resulting in runtime failures.

114. What does the // @ts-ignore comment do in TypeScript?
114. The // @ts-ignore comment is a directive that tells TypeScript to ignore type errors on the following line. It effectively disables type checking for that specific line of code, allowing code to compile even if TypeScript would normally flag type errors.

115. What happens when TypeScript uses type inference on a variable without an explicit type declaration?
115. When a variable is initialized without an explicit type declaration, TypeScript will attempt to infer the type based on the initial value. For example, if a variable is initialized with a string value, TypeScript will infer that the variable should always hold strings. This inference can be overridden by explicitly declaring a type like any.

116. What command-line tool is the core compiler for TypeScript?
116. tsc (TypeScript compiler) is the core tool for compiling TypeScript files. It is described as the 'meat and potatoes' of TypeScript.

117. What are the two primary ways to define custom types in TypeScript?
117. Type aliases (declared with type) and interfaces are the two primary ways to define custom types in TypeScript.

118. What TypeScript feature allows you to combine multiple types together?
118. Unions allow you to combine multiple types together in TypeScript.

119. What are type parameters used for in TypeScript?
119. Type parameters are used with generic types to manipulate and parameterize types, allowing for flexible and reusable type definitions.

120. What is the syntax for adding type annotations in TypeScript?
120. Type annotations are added using colons. For example, you would write variable: type to annotate a variable with a specific type.

121. What is the purpose of the --noEmit flag when using the TypeScript compiler (tsc)?
121. The --noEmit flag tells the TypeScript compiler to check types without emitting or compiling files to JavaScript. It's used to verify that the compiler is happy with the types without generating output files.

122. What is a common limitation of using the tsc --watch flag in larger TypeScript projects?
122. The TypeScript compiler can become slow in larger projects because it has significant cognitive overhead - it needs to figure out all the types, built-in types, look at all source code in the repo, and all dependencies. This can cause everything to grind to a halt as the project grows.

123. What does the && operator do when used between two commands in a package.json script, such as tsc --no-emit && vitest?
123. The && operator ensures that the command on the left must succeed (return with a non-error status) before the command on the right will run. This ensures that if the first command fails, the second command will not execute.

124. Why is tsc --noEmit commonly run before commands like test, build, or deploy in TypeScript projects?
124. Running tsc --no-emit before these commands ensures that all types check out successfully before starting expensive or important operations. This prevents wasting time on long build processes or pushing code with type errors.

125. How would you configure a test script in package.json to ensure type checking occurs before tests run?
125. You would structure the script as: "test": "tsc --no-emit && vitest" (or your test runner of choice). This ensures the TypeScript compiler validates all types before the test runner starts.

126. How do you declare a union type in TypeScript for an ID that can be either a number or a string?
126. Use the type keyword followed by the type name, an equals sign, and the types separated by a pipe symbol: type ID = number | string

127. How do you indicate that a property is optional in a TypeScript interface?
127. Add a question mark after the property name before the colon, for example: email?: string. This is equivalent to saying the property is of type string | undefined.

128. What is the purpose of the omit utility type in TypeScript?
128. The omit utility type creates a new type by removing specified properties from an existing type. For example, omit<Event, 'id' | 'host_id'> creates a type with all properties of Event except for 'id' and 'host_id'.

129. Why should you use the type keyword instead of interface when working with utility types like omit?
129. The type keyword allows you to use an equals sign to assign the result of a utility type as an alias, like type EventDetails = omit<Event, 'id'>. Interfaces have different syntax and are designed for object-shaped types that will be extended, not for assigning utility type results.

130. What does the keyof operator do in TypeScript?
130. keyof extracts a union type of all the keys from a given type. It works similar to Object.keys() in JavaScript but operates at the type level. For example, if a type has properties 'id', 'name', and 'email', keyof would produce the type 'id' | 'name' | 'email'.

131. What is the primary purpose of the tsconfig.json file in a TypeScript project?
131. The tsconfig.json file tells TypeScript what you want it to do by setting up the project configuration properly. It allows you to configure how TypeScript should behave for your particular use case and project requirements.

132. In a full-stack TypeScript project with separate frontend and backend directories, how should each part typically be treated?
132. Each part should be treated as basically separate entities. While they may exist in the same repository (monorepo style), the frontend and backend directories are independent projects with their own dependencies, configurations, and development servers.

133. What is Express in the context of Node.js backend development?
133. Express is a common server framework for Node.js used to build backend applications and APIs. It provides functionality for handling HTTP requests, routing, and serving data to client applications.

134. What is Vite and what role does it play in modern frontend development?
134. Vite is a popular build tool used in modern frontend web development. It handles the JavaScript build process and can be used with various frameworks including Vue, React, or Vanilla JS. It provides development server functionality and optimizes the build process for frontend applications.

135. Why is it beneficial to reuse types across a TypeScript codebase rather than retyping them in multiple places?
135. Reusing types is not just convenient but important for maintaining type safety and consistency across the codebase. It helps ensure that the same data structures are properly typed throughout the application and makes it easier to maintain and update type definitions when needed.

136. What command is used to install TypeScript as a development dependency in a Node.js project?
136. npm i -D typescript (where -D is shorthand for making it a development dependency instead of a regular runtime dependency)

137. What command generates a tsconfig.json file in a TypeScript project?
137. tsc --init

138. Why is TypeScript typically installed as a development dependency rather than a runtime dependency?
138. TypeScript is used during development for type checking and will not ship with the production code. It's only needed by developers during the development process.

139. What message does the TypeScript compiler show when you run 'tsc' with no arguments in a project that has a tsconfig.json but no input files specified?
139. "no inputs were found in config file" - which indicates it found the config file but has no files to compile

140. Where can you find guidance on choosing appropriate TypeScript compiler options for your project?
140. The TypeScript handbook includes a guide about choosing compiler options that helps you determine which options to use based on what you're building and what you're trying to accomplish with TypeScript.

141. What is the purpose of the tsconfig/bases repository on GitHub?
141. The tsconfig/bases repository provides a collection of base configuration files that serve as starting points for different TypeScript projects and use cases. These out-of-the-box configs correspond to various Node versions, JavaScript runtimes (like Bun), and frontend frameworks (like React and Svelte), allowing developers to avoid reinventing the wheel for each new TypeScript project.

142. How do you use a base TypeScript configuration from the tsconfig/bases repository in your project?
142. First, install the desired base configuration as a dev dependency using npm (for example: npm i -D @tsconfig/recommended). Then, add an extends property at the top level of your tsconfig.json file (not inside compilerOptions) with the path to the base configuration file, such as "extends": "@tsconfig/recommended/tsconfig.json".

143. Can you extend multiple base configurations in a single tsconfig.json file? If so, how?
143. Yes, you can extend multiple base configurations by making the extends property an array. For example: "extends": ["@tsconfig/recommended/tsconfig.json", "@tsconfig/vite-react/tsconfig.json"]. This allows you to inherit and combine settings from multiple base configurations.

144. What is the default value of the checkJs compiler option in TypeScript, and what does it control?
144. The default value of checkJs is false. This option controls whether TypeScript will type-check JavaScript files in addition to TypeScript files. When set to true, TypeScript will analyze and report errors in .js files as well as .ts files.

145. What command can you use to see the final resolved configuration that TypeScript is using, including options inherited from base configs?
145. You can use the command tsc --showConfig to display the complete resolved configuration that TypeScript will use, including all options inherited from base configurations and any overrides specified in your local tsconfig.json file.

146. What is the purpose of .d.ts declaration files in TypeScript projects?
146. .d.ts declaration files provide type information for JavaScript files. They allow TypeScript to understand the types and structure of JavaScript modules without requiring the actual code to be converted to TypeScript. This is particularly useful when gradually migrating a codebase from JavaScript to TypeScript, as declaration files can exist alongside JavaScript files to provide type safety.

147. What does the 'noImplicitAny' compiler option do in TypeScript?
147. The 'noImplicitAny' compiler option requires developers to explicitly declare types for variables, parameters, and return values. When enabled, TypeScript will report errors for any values that would implicitly have the 'any' type, forcing developers to add type annotations and improving type safety throughout the codebase.

148. How can you determine what types to declare when converting a JavaScript file to TypeScript?
148. You can determine appropriate types by examining multiple sources: looking at how the code is used throughout the application, reviewing test files to see expected inputs and outputs, and checking backend API code to understand the shape of data coming from the server. These sources help you understand what properties and structures objects should have.

149. What error message does TypeScript show when it encounters a JavaScript module without type information?
149. TypeScript displays an error message stating 'Could not find a declaration file for this module,' indicating that it has no type information about what types are in the module. This occurs when importing JavaScript modules that don't have accompanying .d.ts declaration files.

150. Why is VS Code useful when fixing TypeScript errors in a project?
150. VS Code reads the tsconfig.json file and displays TypeScript errors directly in the editor with visual indicators (squiggles). This provides the same type-checking information that would appear on the command line but in a more convenient, visual format that makes it easier to identify and fix errors as you work.