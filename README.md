# Contacts-App
A contact app that stores name, email, phone number, notes, and a picture in a PSQL database.
Individual contact can be edited and deleted.
New contacts can be made. 
<img width="1401" alt="Screen Shot 2023-10-02 at 17 50 39" src="https://github.com/NattyNgrn/Contacts-App/assets/132034444/601b9cbe-b5b3-4799-a5ae-7f7d2a22c82c">
<img width="1401" alt="Screen Shot 2023-10-02 at 17 50 53" src="https://github.com/NattyNgrn/Contacts-App/assets/132034444/c2ce35c2-fe27-4b31-8e6c-6bf172d1bc4b">
<img width="1208" alt="Screen Shot 2023-10-02 at 17 51 21" src="https://github.com/NattyNgrn/Contacts-App/assets/132034444/b8d296d8-6f92-4a05-a4e8-d5fc2499207b">


Connected to cloudinary.

Uses react, javascript, tailwinds, PSQL, express, node, cors, and jest.

you will find comments through oout the code explaing which each part does.


Installation for Client:
npm install tailwinds -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Make tailwinds.config.js file and postcss.config.js file


In tailwinds.config.js make sure it has this path:
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
 

Add these three directives to your index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;


Installation for Server:
npm init
npm install express
npm install cors
npm install nodemon
npm install body-parser
npm install jest
npm install pg
npm install cloudinary



