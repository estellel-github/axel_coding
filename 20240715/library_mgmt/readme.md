# Project Overview

You will create a simple library management system using TypeScript. The system will manage books in a library and allow adding, removing, and viewing books. The project will be divided into multiple files to practice using modules, exports, and imports. You will also make use of types, interfaces, classes, encapsulation, getters, and setters.

# Requirements
## File Structure
Your project should have the following file structure:

/LibraryManagement
|-- /src
|   |-- Book.ts
|   |-- Library.ts
|   |-- Types.ts
|-- tsconfig.json


### File: Types.ts

1. Define a type for the book's genre:
   * The genre can be one of the following strings: 'Fiction', 'Non-Fiction', 'Science', 'Biography'.
2. Define an interface for the book details:
   * The interface should include the following properties:
      * title (string)
      * author (string)
      * publishedYear (number)
      * genre (Genre)

### File: Book.ts
1. Import the required types and interfaces from Types.ts.
2. Define a class Book:
   * The class should have the following private properties:
      * title (string)
      * author (string)
      * publishedYear (number)
      * genre (Genre)
   * Implement a constructor that takes a BookDetails object and initializes the properties.
3. Implement getter and setter methods using the get and set keywords for each property:
   * getTitle, setTitle
   * getAuthor, setAuthor
   * getPublishedYear, setPublishedYear
   * getGenre, setGenre
4. Implement a method getBookDetails that returns a BookDetails object with the current property values.


Finish the above section first, then we will review it and continue.

### File: Library.ts
1. Import the required types and classes from Types.ts and Book.ts.
2. Define an interface LibraryDetails:
   * The interface should include the following properties:
      * name (string)
      * address (string)
3. Define a class Library:
   * The class should have the following private properties:
      * name (string)
      * address (string)
      * books (Book array)
   * Implement a constructor that takes a LibraryDetails object and initializes the properties.
4. Implement a method addBook that takes a BookDetails object and adds a new Book to the books array.
5. Implement a method removeBook that takes a book title (string) and removes the book with that title from the books array.
6. Implement a method getBooks that returns an array of BookDetails objects representing all the books in the library.
Example Usage
Write some example usage code in Library.ts to demonstrate adding, removing, and viewing books in the library.

# Instructions
1. Create a new directory for your project.
2. Inside the directory, create the necessary subdirectories and files as described above.
3. Define the types, interfaces, and classes as per the requirements.
4. Ensure you have TypeScript installed. If not, you can install it globally using npm install -g typescript.
5. Create a tsconfig.json file to configure the TypeScript compiler.
6. Compile the TypeScript files using the TypeScript compiler with tsc.
7. Run the compiled JavaScript file using Node.js.
tsconfig.json
Create a tsconfig.json file in your project root with the following content:
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}


# Example Code (in Library.ts)


import { BookDetails } from './Types';
import { Book } from './Book';
import { Library } from './Library';


const library = new Library({ name: 'City Library', address: '123 Main St' });


library.addBook({ title: '1984', author: 'George Orwell', publishedYear: 1949, genre: 'Fiction' });
library.addBook({ title: 'Sapiens', author: 'Yuval Noah Harari', publishedYear: 2011, genre: 'Non-Fiction' });


console.log(library.getBooks());


library.removeBook('1984');


console.log(library.getBooks());


# Learning Outcomes

* Understand how to define and use types and interfaces in TypeScript.
* Practice encapsulation by defining private properties in a class.
* Implement getter and setter methods to access and modify private properties.
* Learn how to organize code into modules and use export and import statements.
This exercise will help you gain practical experience with TypeScript's features in a real-world context.

ADDITION JULY 16: INHERITANCE

# Part3: Inheritance 

You will extend the existing library management system to include different types of digital books. This will involve using inheritance to create specific book types, implementing multilevel inheritance, and overriding methods in child classes.

New File Structure

/LibraryManagement

|-- /src

|   |-- Book.ts

|   |-- Library.ts

|   |-- Types.ts

|   |-- DigitalBook.ts

|   |-- AudioBook.ts

|-- tsconfig.json


## Step 1: Extend the Types.ts File
1. Add a new type for the format of digital books.
   * Define a type DigitalBookFormat that can have values 'PDF', 'EPUB', 'MOBI', or 'AUDIO'.

## Step 2: Create a New File DigitalBook.ts
1. Define a new class DigitalBook that extends Book.
   * Add properties format (type DigitalBookFormat) and fileSize (number, representing the file size in MB).
   * Add appropriate getters and setters for format and fileSize.
   * Override the getBookDetails() method to include the format and file size in the details.

## Step 3: Create a New File AudioBook.ts
1. Define a new class AudioBook that extends DigitalBook.
   * Add properties duration (number, representing the duration in minutes) and narrator (string).
   * Add appropriate getters and setters for duration and narrator.
   * Override the getBookDetails() method to include the narrator and duration in the details.

## Step 4: Update the Library.ts File

1. Update the Library class to handle different types of books.
   * Add methods to handle adding and removing books from the library.
   * Ensure the methods addBook, removeBook, getBooks, and getBookDetails work with all book types.
2. Add example usage to demonstrate adding and managing digital books and audiobooks.