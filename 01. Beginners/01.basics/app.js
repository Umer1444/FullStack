// WHAT IS JAVASCRIPT?
// JavaScript is a versatile and widely-used programming language that plays a crucial role in web development.
// It enables developers to create interactive and dynamic elements within web pages,
// enhancing the user experience by adding functionality that responds to user actions.
//JavaScript is primarily executed in web browsers,
//but it's also used in other environments like server-side scripting (Node.js).

// ---------- CONSOLE ----------

// Print normal messages
console.log("Hello World!");

// Print warnings
console.warn("This is a warning!");

// Print errors
console.error("Something went wrong!");

// Print debug info
console.info("Some info here");

// Display objects in table format
console.table([
  { name: "Umer", score: 95 },
  { name: "Rahul;", score: 88 },
]);

// Measure execution time
console.time("timer");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("timer");

// Group related logs
console.group("User Details");
console.log("Name: Umer");
console.log("Role: Developer");
console.groupEnd();

// Clear the console
//console.clear();

// ---------- COMMENTS ----------

// This is one line comment
/*
    This is 
    multi-line 
        comment
*/
/** Unordered Comment
 * bla
 * bla
 * bla
 */
