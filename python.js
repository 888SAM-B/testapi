const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parses JSON requests

// Sample data
let javatest = [
    {
      "question": "What does the acronym 'JVM' stand for?",
      "options": [
        "Java Virtual Machine",
        "Java Verified Module",
        "Java Version Manager",
        "Java Variable Manager"
      ],
      "answer": 0
    },
    {
      "question": "Which principle allows Java programs to run on different platforms without modification?",
      "options": [
        "OOP",
        "Platform dependency",
        "Write Once, Run Anywhere",
        "Dynamic linking"
      ],
      "answer": 2
    },
    {
      "question": "Which tool in the JDK is used to compile Java programs?",
      "options": [
        "java",
        "javac",
        "jvm",
        "jar"
      ],
      "answer": 1
    },
    {
      "question": "What is the primary purpose of setting up the JAVA_HOME environment variable?",
      "options": [
        "To configure Java's runtime",
        "To specify the installation directory of JDK",
        "To enable debugging features",
        "To install additional libraries"
      ],
      "answer": 1
    },
    {
      "question": "Which of the following is a primitive data type in Java?",
      "options": [
        "String",
        "ArrayList",
        "int",
        "Scanner"
      ],
      "answer": 2
    },
    {
      "question": "What keyword is used to declare a constant in Java?",
      "options": [
        "const",
        "final",
        "static",
        "immutable"
      ],
      "answer": 1
    },
    {
      "question": "What type of loop executes at least once, even if the condition is false?",
      "options": [
        "for loop",
        "while loop",
        "do-while loop",
        "enhanced for loop"
      ],
      "answer": 2
    },
    {
      "question": "What does the 'break' statement do in Java?",
      "options": [
        "Terminates the program",
        "Exits the current loop or switch statement",
        "Skips the current iteration of a loop",
        "Divides two numbers"
      ],
      "answer": 1
    },
    {
      "question": "Which of these is NOT a principle of OOP?",
      "options": [
        "Encapsulation",
        "Abstraction",
        "Inheritance",
        "Compilation"
      ],
      "answer": 3
    },
    {
      "question": "Which keyword is used to inherit a class in Java?",
      "options": [
        "extend",
        "implements",
        "inherit",
        "subclass"
      ],
      "answer": 0
    },
    {
      "question": "What is the main purpose of an abstract class in Java?",
      "options": [
        "To provide complete implementations of all methods",
        "To define a blueprint for subclasses",
        "To encapsulate data only",
        "To manage threads"
      ],
      "answer": 1
    },
    {
      "question": "In Java, what is an object?",
      "options": [
        "A collection of data and methods defined in a class",
        "A primitive data type",
        "A reference to memory allocation",
        "A set of methods without implementation"
      ],
      "answer": 0
    },
    {
      "question": "What does the 'try' block do in Java?",
      "options": [
        "Executes code that might throw an exception",
        "Declares an exception",
        "Handles an exception",
        "Ignores an exception"
      ],
      "answer": 0
    },
    {
      "question": "What is the purpose of the 'finally' block in exception handling?",
      "options": [
        "To handle all exceptions",
        "To ensure code execution after try-catch blocks",
        "To declare a custom exception",
        "To define unchecked exceptions"
      ],
      "answer": 1
    },
    {
      "question": "Which collection type does NOT allow duplicate elements?",
      "options": [
        "ArrayList",
        "HashMap",
        "HashSet",
        "LinkedList"
      ],
      "answer": 2
    },
    {
      "question": "What keyword is used to prevent thread interference in Java?",
      "options": [
        "synchronized",
        "static",
        "volatile",
        "transient"
      ],
      "answer": 0
    },
    {
      "question": "Which Java class is used for writing text to a file?",
      "options": [
        "FileReader",
        "BufferedReader",
        "FileWriter",
        "ObjectOutputStream"
      ],
      "answer": 2
    },
    {
      "question": "What is the purpose of ObjectOutputStream in Java?",
      "options": [
        "Reading files",
        "Writing text files",
        "Serializing objects to a stream",
        "Deserializing objects from a file"
      ],
      "answer": 2
    },
    {
      "question": "Which Java NIO feature supports non-blocking file I/O?",
      "options": [
        "FileReader",
        "FileChannel",
        "Scanner",
        "ObjectInputStream"
      ],
      "answer": 1
    },
    {
      "question": "In a student management system, which Java data structure is ideal for storing unique student IDs with their names?",
      "options": [
        "ArrayList",
        "HashMap",
        "HashSet",
        "TreeMap"
      ],
      "answer": 1
    }
];

// Endpoints
app.get('/python', (req, res) => {
    res.send(javatest);
});

// Start the server
app.listen(3000, () => console.log('API running on http://localhost:3000'));
