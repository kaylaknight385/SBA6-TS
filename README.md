E-Commerce Product Management System
Project Overview:

This is a TypeScript-based e-commerce product management system that fetches product data from the DummyJSON API, calculates discounts and taxes, and displays product information in the terminal.


Setup & Installation:

npm install,
npx tsc,
node dist/main.js

Features:

Fetches real product data from DummyJSON API,

Calculates product discounts and taxes,

Displays formatted product information,

Handles errors gracefully lol,

TypeScript type safety throughout

Reflection:
Okay so this project was... a journey. Implementing TypeScript was honestly way more finicky than I expected, but once I got the hang of type annotations and interfaces, it actually made debugging SO much easier. I used OOP principles by creating a Product class that had all the properties from the API (id, title, price, etc.) and methods like displayDetails() and getPriceWithDiscount(). The whole inheritance and encapsulation thing finally clicked when I realized the Product class was basically a blueprint that could create multiple product objects with the same structure but different data.
The challenges? WHERE DO I START. The import/export syntax had me in SHAMBLES. TypeScript kept yelling at me about module resolution, and I had like three nested src folders at one point (don't ask lol). I also struggled with the difference between ES modules and CommonJS - turns out having "type": "module" in package.json while TypeScript was set to CommonJS was causing chaos. Fixed it by removing that line and making sure everything matched up in tsconfig.json.
Handling async operations was actually kinda fun once I understood it. Using async/await made the API calls way more readable than callback hell would've been. I wrapped everything in try/catch blocks so when the API inevitably acts up (or when I typed the URL wrong ), my custom error handler catches it and logs a message instead of the whole app crashing. Added some personality to those error messages too because if I'm gonna see errors, they might as well be funny so I don't flip at my computer <3.
Overall, this project taught me that TypeScript is strict for a REASON, and while it was annoying at first, it saved me from so many runtime errors. Would I do it again? ehhhhhhhhhhhhhhhhh, probably. Do I understand modules now? ...mostly.

Technologies Used:
TypeScript, 
Node.js, 
DummyJSON API, 
Blood, Sweat, and Tears

Author:
Built with determination (and a lot of troubleshooting)
