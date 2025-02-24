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



let javaassesment = [
  {
    "question": "What is Java?",
    "options": ["A programming language", "An operating system", "A database", "A web browser"],
    "answer": 0
  },
  {
    "question": "Which data type is used to create a variable that should store text?",
    "options": ["int", "float", "String", "char"],
    "answer": 2
  },
  {
    "question": "What is the default value of an int variable in Java?",
    "options": ["null", "0", "undefined", "-1"],
    "answer": 1
  },
  {
    "question": "What is the correct way to declare an array in Java?",
    "options": ["int arr[] = new int[5];", "array int arr[5];", "int[] arr = 5;", "arr = int[5];"],
    "answer": 0
  },
  {
    "question": "Which keyword is used to create a class in Java?",
    "options": ["class", "define", "create", "new"],
    "answer": 0
  },
  {
    "question": "What is the size of a char in Java?",
    "options": ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    "answer": 1
  },
  {
    "question": "What is the output of the expression 10 + 20 + \"30\"?",
    "options": ["1030", "102030", "30", "Error"],
    "answer": 0
  },
  {
    "question": "Which method is used to print output in Java?",
    "options": ["System.print()", "System.out.println()", "print()", "cout<<"],
    "answer": 1
  },
  {
    "question": "What does the keyword 'static' mean in Java?",
    "options": ["Defines a constant variable", "Defines a method that belongs to the class", "Defines a method that can only be overridden", "Defines an abstract method"],
    "answer": 1
  },
  {
    "question": "Which loop is guaranteed to execute at least once?",
    "options": ["for", "while", "do-while", "None of the above"],
    "answer": 2
  },
  {
    "question": "Which package contains the Random class?",
    "options": ["java.lang", "java.io", "java.util", "java.net"],
    "answer": 2
  },
  {
    "question": "What is a constructor in Java?",
    "options": ["A method to destroy objects", "A method to initialize objects", "A method to finalize objects", "A method to override objects"],
    "answer": 1
  },
  {
    "question": "What is inheritance in Java?",
    "options": ["Copying variables from one class to another", "Creating new classes from existing ones", "Overriding methods", "None of the above"],
    "answer": 1
  },
  {
    "question": "Which interface is used to implement a thread in Java?",
    "options": ["Runnable", "Threadable", "Thread", "Concurrent"],
    "answer": 0
  },
  {
    "question": "What does the 'finally' block do in Java?",
    "options": ["Executes after the try block only if an exception occurs", "Executes always after the try block", "Executes if no exception occurs", "Handles exceptions"],
    "answer": 1
  },
  {
    "question": "What is the use of the 'this' keyword in Java?",
    "options": ["Refers to the current instance of the class", "Refers to the superclass of the current class", "Refers to a static method", "Refers to the main method"],
    "answer": 0
  },
  {
    "question": "Which exception is thrown when dividing by zero in Java?",
    "options": ["ArithmeticException", "IOException", "NullPointerException", "NumberFormatException"],
    "answer": 0
  },
  {
    "question": "What is the purpose of the 'super' keyword in Java?",
    "options": ["Refers to the parent class object", "Refers to the subclass object", "Used to override methods", "None of the above"],
    "answer": 0
  },
  {
    "question": "What is polymorphism in Java?",
    "options": ["Executing the same method in multiple ways", "Using multiple classes in one program", "Defining multiple methods in one class", "None of the above"],
    "answer": 0
  },
  {
    "question": "Which Java keyword is used to stop the execution of a loop?",
    "options": ["exit", "break", "return", "continue"],
    "answer": 1
  }
];








let pythontest=[
  {
    "question": "Which of the following is the correct way to create a variable in Python?",
    "options": [
      "variable = 10",
      "int variable = 10",
      "var = 10;",
      "variable : 10"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following data types is immutable in Python?",
    "options": [
      "List",
      "Dictionary",
      "Set",
      "String"
    ],
    "answer": 3
  },
  {
    "question": "What will be the result of the expression 10 % 3?",
    "options": [
      "1",
      "3",
      "0",
      "10"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following is used to define a function in Python?",
    "options": [
      "func",
      "def",
      "function",
      "define"
    ],
    "answer": 1
  },
  {
    "question": "What is the output of print(2 ** 3)?",
    "options": [
      "6",
      "8",
      "9",
      "3"
    ],
    "answer": 1
  },
  {
    "question": "How can you create a list with elements 'a', 'b', and 'c' in Python?",
    "options": [
      "list = ('a', 'b', 'c')",
      "list = ['a', 'b', 'c']",
      "list = a, b, c",
      "list = <'a', 'b', 'c'>"
    ],
    "answer": 1
  },
  {
    "question": "What does the len() function return when applied to a list?",
    "options": [
      "The first element",
      "The last element",
      "The number of elements in the list",
      "The sum of elements in the list"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following will raise an exception in Python?",
    "options": [
      "x = 10 / 2",
      "y = 10 / 0",
      "z = 10 + 2",
      "w = 'Hello' + ' World'"
    ],
    "answer": 1
  },
  {
    "question": "How do you define a dictionary in Python?",
    "options": [
      "dict = (1: 'apple', 2: 'banana')",
      "dict = {1: 'apple', 2: 'banana'}",
      "dict = [1: 'apple', 2: 'banana']",
      "dict = 'apple', 'banana'"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is used to handle exceptions in Python?",
    "options": [
      "try-except",
      "catch-finally",
      "throw-catch",
      "exception-try"
    ],
    "answer": 0
  },
  {
    "question": "Which method would you use to remove an item from a list in Python?",
    "options": [
      "list.delete()",
      "list.pop()",
      "list.remove()",
      "list.removeAt()"
    ],
    "answer": 2
  },
  {
    "question": "What is the correct syntax to check if a number is even in Python?",
    "options": [
      "if number % 2 == 0:",
      "if number // 2 == 0:",
      "if number == 2:",
      "if number / 2 == 0:"
    ],
    "answer": 0
  },
  {
    "question": "What is the output of the following code: print(bool(0))?",
    "options": [
      "True",
      "False",
      "None",
      "Error"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is not a valid way to create a set in Python?",
    "options": [
      "set1 = {1, 2, 3}",
      "set2 = set([1, 2, 3])",
      "set3 = set(1, 2, 3)",
      "set4 = set()"
    ],
    "answer": 2
  },
  {
    "question": "What is the default value of the argument 'b' in the following function: def func(a, b=2): return a + b?",
    "options": [
      "1",
      "2",
      "None",
      "Error"
    ],
    "answer": 1
  },
  {
    "question": "What will be the output of the following code: x = [1, 2, 3]; y = x; y[0] = 100; print(x)?",
    "options": [
      "[1, 2, 3]",
      "[100, 2, 3]",
      "[1, 100, 3]",
      "Error"
    ],
    "answer": 1
  }
]



let pythonassesment=[
  {
    "question": "What is the output of the following code?   print(4*5-4)",
    "options": [
      "5",
      "16",
      "20",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "question": "Explain the difference between a list and a tuple in Python.",
    "options": [
      "Lists are mutable, tuples are immutable.",
      "Lists are immutable, tuples are mutable.",
      "Both are mutable.",
      "Both are immutable."
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `len()` function in Python?",
    "options": [
      "To calculate the length of a string",
      "To return the length of an object like a list, string, or tuple",
      "To check if a string is empty",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "question": "Write a Python function that takes a number and returns whether it is even or odd.",
    "options": [
      "Even if the number is divisible by 2, else odd.",
      "Odd if the number is divisible by 2, else even.",
      "Even if the number is odd, else odd.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What is the correct way to handle exceptions in Python?",
    "options": [
      "try...catch",
      "try...except",
      "try...finally",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "question": "What is a dictionary in Python? Provide an example.",
    "options": [
      "A collection of key-value pairs.",
      "A collection of ordered elements.",
      "A collection of unique items.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "How can you concatenate two strings in Python?",
    "options": [
      "Using the '+' operator.",
      "Using the '&' operator.",
      "Using the concat() method.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What are the different data types available in Python? Name at least four.",
    "options": [
      "int, float, string, list",
      "int, double, char, string",
      "string, boolean, set, tuple",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What does the following code snippet do?",
    "options": [
      "It adds two numbers.",
      "It defines a function with a default argument.",
      "It raises an exception.",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "question": "Write a Python program to check if a given number is prime or not.",
    "options": [
      "The number is prime if it has no divisors other than 1 and itself.",
      "The number is prime if it is divisible by 2.",
      "The number is prime if it is divisible by 3.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What is the difference between `deepcopy()` and `copy()` in Python?",
    "options": [
      "deepcopy creates a new object, copy does not.",
      "deepcopy copies references, copy does not.",
      "Both work the same.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What is list comprehension? Provide an example of how you would use it to create a list of squares from 1 to 10.",
    "options": [
      "A concise way to create lists using a single line of code.",
      "A way to create lists using loops.",
      "A method to copy lists.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "Explain the concept of decorators in Python and give an example of a simple decorator.",
    "options": [
      "A decorator is a function that modifies the behavior of another function.",
      "A decorator is a class that modifies the behavior of a function.",
      "A decorator is a built-in Python function.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What are lambda functions in Python? Provide an example.",
    "options": [
      "Small anonymous functions defined with the keyword 'lambda'.",
      "Functions that are defined within another function.",
      "Functions with no parameters.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `self` keyword in Python classes?",
    "options": [
      "To refer to the instance of the class.",
      "To define a method within a class.",
      "To call another function.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "How do you implement inheritance in Python? Write an example with a parent class and a child class.",
    "options": [
      "Using the 'extends' keyword.",
      "Using the class syntax with the parent class name in parentheses.",
      "Using the 'super' function.",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "question": "Explain the concept of generators in Python. How do they differ from normal functions?",
    "options": [
      "Generators use the 'yield' keyword and can be paused and resumed.",
      "Generators are used for error handling.",
      "Generators are functions without parameters.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What are Python's built-in data structures? Describe each briefly.",
    "options": [
      "Lists, tuples, dictionaries, sets.",
      "Lists, dictionaries, classes, functions.",
      "Strings, tuples, sets, variables.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "Explain how Python's 'with' statement is used in file handling.",
    "options": [
      "It automatically closes the file after execution.",
      "It opens files in binary mode.",
      "It creates a temporary file.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What is a module in Python?",
    "options": [
      "A file containing Python definitions and statements.",
      "A type of variable.",
      "A way to store user data.",
      "None of the above"
    ],
    "answer": 0
  }
]

let htmltest=[
  {
    "question": "What does HTML stand for?",
    "options": [
      "Hyper Transfer Markup Language",
      "Hyper Text Markup Language",
      "Hyperlink and Text Markup Language",
      "High-Level Text Markup Language"
    ],
    "answer": 1
  },
  {
    "question": "Which tag is used to define a hyperlink in HTML?",
    "options": [
      "<a>",
      "<link>",
      "<href>",
      "<url>"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `<head>` element in an HTML document?",
    "options": [
      "To define the main content of the page",
      "To include metadata about the document",
      "To specify the background color",
      "To create a page title"
    ],
    "answer": 1
  },
  {
    "question": "Which tag is used to define an unordered list in HTML?",
    "options": [
      "<ul>",
      "<ol>",
      "<li>",
      "<dl>"
    ],
    "answer": 0
  },
  {
    "question": "How do you create a comment in HTML?",
    "options": [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "# This is a comment"
    ],
    "answer": 2
  },
  {
    "question": "What is the latest version of HTML as of 2021?",
    "options": [
      "HTML 4",
      "HTML 5",
      "HTML 6",
      "HTML X"
    ],
    "answer": 1
  },
  {
    "question": "Which tag is used to define a table in HTML?",
    "options": [
      "<table>",
      "<tr>",
      "<td>",
      "<th>"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `<meta>` tag in HTML?",
    "options": [
      "To define the character encoding",
      "To include external CSS files",
      "To specify the document's title",
      "To create a navigation link"
    ],
    "answer": 0
  },
  {
    "question": "Which attribute is used to specify the source of an image in HTML?",
    "options": [
      "src",
      "href",
      "alt",
      "title"
    ],
    "answer": 0
  },
  {
    "question": "What does the `alt` attribute in the `<img>` tag specify?",
    "options": [
      "The image's source URL",
      "The image's alternative text description",
      "The image's title",
      "The image's width"
    ],
    "answer": 1
  },
  {
    "question": "Which tag is used to define a form in HTML?",
    "options": [
      "<form>",
      "<input>",
      "<textarea>",
      "<button>"
    ],
    "answer": 0
  },
  {
    "question": "Which attribute is used to specify the action URL in a form?",
    "options": [
      "action",
      "method",
      "enctype",
      "target"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `method` attribute in a form?",
    "options": [
      "To specify the HTTP method (GET or POST) used when submitting the form",
      "To define the form's action URL",
      "To specify the form's encoding type",
      "To set the form's target window"
    ],
    "answer": 0
  },
  {
    "question": "Which tag is used to define a dropdown list in HTML?",
    "options": [
      "<select>",
      "<input>",
      "<textarea>",
      "<option>"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `<label>` element in HTML?",
    "options": [
      "To define a section in a document",
      "To create a hyperlink",
      "To define a label for an input element",
      "To display images"
    ],
    "answer": 2
  },
  {
    "question": "Which attribute is used to specify the target window for a hyperlink?",
    "options": [
      "target",
      "href",
      "rel",
      "title"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `rel` attribute in a hyperlink?",
    "options": [
      "To specify the relationship between the current document and the linked document",
      "To define the hyperlink's destination URL",
      "To set the hyperlink's title",
      "To specify the hyperlink's target window"
    ],
    "answer": 0
  },
  {
    "question": "Which tag is used to define a navigation section in HTML5?",
    "options": [
      "<nav>",
      "<header>",
      "<footer>",
      "<section>"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `<article>` element in HTML5?",
    "options": [
      "To define a section of content that is self-contained and can be distributed independently",
      "To create a navigation link",
      "To define a header section",
      "To display images"
    ],
    "answer": 0
  },
  {
    "question": "Which attribute is used to specify the character encoding in HTML?",
    "options": [
      "charset",
      "encoding",
      "type",
      "lang"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `<figure>` and `<figcaption>` elements in HTML5?",
    "options": [
      "To define a section of content that is self-contained and can be distributed independently, and its caption",
      "To create a navigation link",
      "To define a header section",
      "To display images"
    ],
    "answer": 0
  }
];


let htmlassesment=[
  {
    "question": "What does the `<a>` tag in HTML represent?",
    "options": [
      "An image",
      "A link",
      "A paragraph",
      "A heading"
    ],
    "answer": 1
  },
  {
    "question": "Which attribute is used to specify the destination URL in a hyperlink?",
    "options": [
      "href",
      "src",
      "alt",
      "title"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `<head>` element in an HTML document?",
    "options": [
      "To define the main content of the page",
      "To include metadata and links to external resources",
      "To display the title of the page",
      "To create a navigation menu"
    ],
    "answer": 1
  },
  {
    "question": "Which tag is used to define an unordered list in HTML?",
    "options": [
      "<ul>",
      "<ol>",
      "<li>",
      "<dl>"
    ],
    "answer": 0
  },
  {
    "question": "How do you create a comment in HTML?",
    "options": [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "# This is a comment"
    ],
    "answer": 2
  },
  {
    "question": "What is the purpose of the `<meta>` tag in HTML?",
    "options": [
      "To define the character encoding",
      "To include external CSS files",
      "To specify the document's title",
      "To create a navigation link"
    ],
    "answer": 0
  },
  {
    "question": "Which attribute is used to specify the source of an image in HTML?",
    "options": [
      "src",
      "href",
      "alt",
      "title"
    ],
    "answer": 0
  },
  {
    "question": "What does the `alt` attribute in the `<img>` tag specify?",
    "options": [
      "The image's source URL",
      "The image's alternative text description",
      "The image's title",
      "The image's width"
    ],
    "answer": 1
  },
  {
    "question": "Which tag is used to define a table in HTML?",
    "options": [
      "<table>",
      "<tr>",
      "<td>",
      "<th>"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `<form>` element in HTML?",
    "options": [
      "To define a section in a document",
      "To create a hyperlink",
      "To collect user input and submit it to a server",
      "To display images"
    ],
    "answer": 2
  },
  {
    "question": "Which attribute is used to specify the action URL in a form?",
    "options": [
      "action",
      "method",
      "enctype",
      "target"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `method` attribute in a form?",
    "options": [
      "To specify the HTTP method (GET or POST) used when submitting the form",
      "To define the form's action URL",
      "To specify the form's encoding type",
      "To set the form's target window"
    ],
    "answer": 0
  },
  {
    "question": "Which tag is used to define a dropdown list in HTML?",
    "options": [
      "<select>",
      "<input>",
      "<textarea>",
      "<option>"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `<label>` element in HTML?",
    "options": [
      "To define a section in a document",
      "To create a hyperlink",
      "To define a label for an input element",
      "To display images"
    ],
    "answer": 2
  },
  {
    "question": "Which attribute is used to specify the target window for a hyperlink?",
    "options": [
      "target",
      "href",
      "rel",
      "title"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `rel` attribute in a hyperlink?",
    "options": [
      "To specify the relationship between the current document and the linked document",
      "To define the hyperlink's destination URL",
      "To set the hyperlink's title",
      "To specify the hyperlink's target window"
    ],
    "answer": 0
  },
  {
    "question": "Which tag is used to define a navigation section in HTML5?",
    "options": [
      "<nav>",
      "<header>",
      "<footer>",
      "<section>"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `<article>` element in HTML5?",
    "options": [
      "To define a section of content that is self-contained and can be distributed independently",
      "To create a navigation link",
      "To define a header section",
      "To display images"
    ],
    "answer": 0
  },
  {
    "question": "Which attribute is used to specify the character encoding in HTML?",
    "options": [
      "charset",
      "encoding",
      "type",
      "lang"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `<figure>` and `<figcaption>` elements in HTML5?",
    "options": [
      "To define a section of content that is self-contained and can be distributed independently, and its caption",
      "To create a navigation link",
      "To define a header section",
      "To display images"
    ],
    "answer": 0
  }
];





let csstest=[
  {
    "question": "What does CSS stand for?",
    "options": [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    "answer": 0
  },
  {
    "question": "Which HTML tag is used to link an external CSS file?",
    "options": [
      "<css>",
      "<style>",
      "<link>",
      "<stylesheet>"
    ],
    "answer": 2
  },
  {
    "question": "Which property is used to change the text color in CSS?",
    "options": [
      "font-color",
      "text-color",
      "color",
      "foreground-color"
    ],
    "answer": 2
  },
  {
    "question": "How do you apply a background color in CSS?",
    "options": [
      "background-color: blue;",
      "color: blue;",
      "bgcolor: blue;",
      "background:color blue;"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following is the correct way to add padding to an element?",
    "options": [
      "padding: 10px;",
      "margin: 10px;",
      "border-padding: 10px;",
      "spacing: 10px;"
    ],
    "answer": 0
  },
  {
    "question": "What is the default position property in CSS?",
    "options": [
      "absolute",
      "fixed",
      "relative",
      "static"
    ],
    "answer": 3
  },
  {
    "question": "Which CSS property is used to make text bold?",
    "options": [
      "font-weight",
      "text-style",
      "bold",
      "font-bold"
    ],
    "answer": 0
  },
  {
    "question": "How do you create a class selector in CSS?",
    "options": [
      ".classname",
      "#classname",
      "classname",
      "*classname"
    ],
    "answer": 0
  },
  {
    "question": "Which property controls the spacing between lines of text?",
    "options": [
      "line-height",
      "text-spacing",
      "word-spacing",
      "letter-spacing"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following is used to make a webpage responsive?",
    "options": [
      "CSS Grid",
      "Flexbox",
      "Media Queries",
      "All of the above"
    ],
    "answer": 3
  },
  {
    "question": "Which property is used to hide an element without removing its space?",
    "options": [
      "visibility: hidden;",
      "display: none;",
      "opacity: 0;",
      "hide: true;"
    ],
    "answer": 0
  },
  {
    "question": "How do you make the text italic in CSS?",
    "options": [
      "text-style: italic;",
      "font-style: italic;",
      "italic: true;",
      "font-italic: yes;"
    ],
    "answer": 1
  },
  {
    "question": "Which CSS unit is relative to the font size of the root element?",
    "options": [
      "em",
      "rem",
      "%",
      "px"
    ],
    "answer": 1
  },
  {
    "question": "What does the 'z-index' property in CSS control?",
    "options": [
      "Text size",
      "Element stacking order",
      "Animation speed",
      "Background color"
    ],
    "answer": 1
  },
  {
    "question": "How can you apply a style only when a user hovers over an element?",
    "options": [
      ":click",
      ":hover",
      ":active",
      ":focus"
    ],
    "answer": 1
  },
  {
    "question": "Which CSS property is used to set the width of an element?",
    "options": [
      "length",
      "size",
      "width",
      "dimension"
    ],
    "answer": 2
  },
  {
    "question": "Which CSS property is used to set the transparency of an element?",
    "options": [
      "visibility",
      "opacity",
      "filter",
      "display"
    ],
    "answer": 1
  },
  {
    "question": "How do you apply multiple background images in CSS?",
    "options": [
      "background: url('img1.jpg'), url('img2.jpg');",
      "multi-background: url('img1.jpg') url('img2.jpg');",
      "background-multiple: url('img1.jpg') url('img2.jpg');",
      "background-image: dual(url('img1.jpg'), url('img2.jpg'));"
    ],
    "answer": 0
  },
  {
    "question": "Which CSS property makes an element flexible in a flex container?",
    "options": [
      "flex",
      "flex-grow",
      "display-flex",
      "align-items"
    ],
    "answer": 0
  },
  {
    "question": "Which value of 'position' property keeps an element fixed at the same spot on the page?",
    "options": [
      "absolute",
      "fixed",
      "relative",
      "sticky"
    ],
    "answer": 1
  }
];


let cssassesment=[
  {
    "question": "Which of the following correctly describes the CSS Box Model?",
    "options": [
      "Content, Padding, Border, Margin",
      "Content, Margin, Border, Padding",
      "Padding, Content, Margin, Border",
      "Margin, Border, Padding, Content"
    ],
    "answer": 0
  },
  {
    "question": "What property transforms an element into a flex container?",
    "options": [
      "display: flex;",
      "flex-container: true;",
      "flex-direction: row;",
      "display: block;"
    ],
    "answer": 0
  },
  {
    "question": "Which property is used to align flex items vertically within a flex container?",
    "options": [
      "justify-content",
      "align-items",
      "flex-align",
      "vertical-align"
    ],
    "answer": 1
  },
  {
    "question": "In CSS Grid, which property defines the space for rows?",
    "options": [
      "grid-template-rows",
      "grid-rows",
      "grid-row-gap",
      "grid-template-columns"
    ],
    "answer": 0
  },
  {
    "question": "What does the 'z-index' property control?",
    "options": [
      "The stacking order of positioned elements",
      "The opacity of an element",
      "The spacing between elements",
      "The transformation of an element"
    ],
    "answer": 0
  },
  {
    "question": "Which CSS selector targets an element with the ID 'header'?",
    "options": [
      ".header",
      "#header",
      "header",
      "*header"
    ],
    "answer": 1
  },
  {
    "question": "How can you increase the specificity of a CSS rule?",
    "options": [
      "Using inline styles",
      "Using a universal selector",
      "Using a descendant selector",
      "Using an element selector"
    ],
    "answer": 0
  },
  {
    "question": "Which pseudo-class would you use to style an element when the user hovers over it?",
    "options": [
      ":active",
      ":hover",
      ":focus",
      ":visited"
    ],
    "answer": 1
  },
  {
    "question": "What is the purpose of CSS media queries?",
    "options": [
      "To import external stylesheets",
      "To apply styles based on the device characteristics",
      "To define animations",
      "To set a default style for all elements"
    ],
    "answer": 1
  },
  {
    "question": "Which property is used to create smooth transitions between CSS property changes?",
    "options": [
      "transition",
      "animation",
      "transform",
      "filter"
    ],
    "answer": 0
  },
  {
    "question": "How do you create a CSS animation that runs continuously?",
    "options": [
      "animation-iteration-count: infinite;",
      "animation-fill-mode: infinite;",
      "animation-direction: infinite;",
      "animation-timing-function: infinite;"
    ],
    "answer": 0
  },
  {
    "question": "Which property allows you to apply a shadow effect to text?",
    "options": [
      "box-shadow",
      "text-shadow",
      "filter: drop-shadow",
      "shadow-text"
    ],
    "answer": 1
  },
  {
    "question": "What does the 'calc()' function in CSS do?",
    "options": [
      "Performs calculations to determine CSS property values",
      "Calculates the best-fit layout automatically",
      "Determines the contrast ratio for colors",
      "Sets the width of an element based on screen size"
    ],
    "answer": 0
  },
  {
    "question": "Which CSS property is used to control the spacing between letters?",
    "options": [
      "word-spacing",
      "letter-spacing",
      "text-spacing",
      "font-spacing"
    ],
    "answer": 1
  },
  {
    "question": "What is the effect of 'display: none;' on an element?",
    "options": [
      "It hides the element and removes it from the document flow",
      "It hides the element but reserves its space",
      "It makes the element transparent",
      "It only hides the element on small screens"
    ],
    "answer": 0
  },
  {
    "question": "Which property would you use to round the corners of an element?",
    "options": [
      "corner-radius",
      "border-radius",
      "radius",
      "outline-radius"
    ],
    "answer": 1
  },
  {
    "question": "How can you import a custom font into your CSS?",
    "options": [
      "@font-face rule",
      "import-font rule",
      "font-import property",
      "font-family: custom;"
    ],
    "answer": 0
  },
  {
    "question": "Which CSS property is used to change the size of an element’s shadow?",
    "options": [
      "shadow-size",
      "box-shadow",
      "text-shadow-size",
      "filter-shadow"
    ],
    "answer": 1
  },
  {
    "question": "What does the 'overflow' property control?",
    "options": [
      "The visibility of content that exceeds an element's box",
      "The color of an element’s border",
      "The layout of a flex container",
      "The opacity of an element"
    ],
    "answer": 0
  },
  {
    "question": "Which selector targets all direct child elements of a given element?",
    "options": [
      "descendant selector",
      "child selector",
      "sibling selector",
      "adjacent selector"
    ],
    "answer": 1
  }
];




let jstest=[
  {
    "question": "What is JavaScript primarily used for?",
    "options": [
      "Styling web pages",
      "Adding interactivity to web pages",
      "Managing databases",
      "Creating operating systems"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is the correct way to declare a variable in JavaScript?",
    "options": [
      "var myVar = 10;",
      "variable myVar = 10;",
      "let myVar: 10;",
      "const: myVar = 10;"
    ],
    "answer": 0
  },
  {
    "question": "Which data type is NOT a primitive in JavaScript?",
    "options": [
      "String",
      "Number",
      "Object",
      "Boolean"
    ],
    "answer": 2
  },
  {
    "question": "Which symbol is used for single-line comments in JavaScript?",
    "options": [
      "/* comment */",
      "// comment",
      "# comment",
      "-- comment"
    ],
    "answer": 1
  },
  {
    "question": "How do you display an alert box with the message 'Hello World'?",
    "options": [
      "msg('Hello World');",
      "alert('Hello World');",
      "console.log('Hello World');",
      "print('Hello World');"
    ],
    "answer": 1
  },
  {
    "question": "Which function is used to write output to the browser console?",
    "options": [
      "console.write()",
      "print()",
      "console.log()",
      "document.write()"
    ],
    "answer": 2
  },
  {
    "question": "Which operator is used for strict equality comparison in JavaScript?",
    "options": [
      "==",
      "===",
      "=",
      "!="
    ],
    "answer": 1
  },
  {
    "question": "How do you declare a function in JavaScript?",
    "options": [
      "function myFunction() {}",
      "def myFunction() {}",
      "func myFunction() {}",
      "declare function myFunction() {}"
    ],
    "answer": 0
  },
  {
    "question": "Which keyword is used to declare a constant variable in JavaScript?",
    "options": [
      "let",
      "const",
      "var",
      "static"
    ],
    "answer": 1
  },
  {
    "question": "What is the output of `typeof null` in JavaScript?",
    "options": [
      "null",
      "object",
      "undefined",
      "string"
    ],
    "answer": 1
  },
  {
    "question": "Which built-in function converts a string into an integer?",
    "options": [
      "parseFloat()",
      "parseInt()",
      "toInt()",
      "stringToNumber()"
    ],
    "answer": 1
  },
  {
    "question": "How do you create an array in JavaScript?",
    "options": [
      "let arr = (1, 2, 3);",
      "let arr = {1, 2, 3};",
      "let arr = [1, 2, 3];",
      "let arr = <1, 2, 3>;"
    ],
    "answer": 2
  },
  {
    "question": "What is the correct way to check if a variable `x` is an array?",
    "options": [
      "typeof x === 'array'",
      "x instanceof Array",
      "Array.isArray(x)",
      "isArray(x)"
    ],
    "answer": 2
  },
  {
    "question": "Which method removes the last element from an array?",
    "options": [
      "shift()",
      "pop()",
      "removeLast()",
      "splice()"
    ],
    "answer": 1
  },
  {
    "question": "Which loop is best used when the number of iterations is known?",
    "options": [
      "while loop",
      "for loop",
      "do-while loop",
      "foreach loop"
    ],
    "answer": 1
  },
  {
    "question": "Which event is fired when a user clicks an HTML element?",
    "options": [
      "onhover",
      "onchange",
      "onclick",
      "onsubmit"
    ],
    "answer": 2
  },
  {
    "question": "What does `NaN` stand for in JavaScript?",
    "options": [
      "Not a Null",
      "New and Null",
      "Not a Number",
      "Number and Null"
    ],
    "answer": 2
  },
  {
    "question": "How do you find the length of a string in JavaScript?",
    "options": [
      "length()",
      "size()",
      "str.length",
      "str.count"
    ],
    "answer": 2
  },
  {
    "question": "Which statement is used to exit a loop prematurely?",
    "options": [
      "stop",
      "break",
      "return",
      "exit"
    ],
    "answer": 1
  },
  {
    "question": "What will `Boolean('false')` return?",
    "options": [
      "false",
      "true",
      "undefined",
      "null"
    ],
    "answer": 1
  }
];



let jsassesment=[
  {
    "question": "What does JavaScript primarily do in web development?",
    "options": [
      "Structure web pages",
      "Style web pages",
      "Add interactivity and dynamic behavior",
      "Store data on servers"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following is the correct way to declare a variable in JavaScript?",
    "options": [
      "let x = 10;",
      "variable x = 10;",
      "int x = 10;",
      "x := 10;"
    ],
    "answer": 0
  },
  {
    "question": "What is the result of 'typeof null' in JavaScript?",
    "options": [
      "'null'",
      "'object'",
      "'undefined'",
      "'number'"
    ],
    "answer": 1
  },
  {
    "question": "How do you write a single-line comment in JavaScript?",
    "options": [
      "/* comment */",
      "// comment",
      "# comment",
      "<!-- comment -->"
    ],
    "answer": 1
  },
  {
    "question": "Which method is used to convert a string to an integer in JavaScript?",
    "options": [
      "Number()",
      "parseInt()",
      "toInteger()",
      "convert()"
    ],
    "answer": 1
  },
  {
    "question": "How do you create an array in JavaScript?",
    "options": [
      "let arr = (1, 2, 3);",
      "let arr = {1, 2, 3};",
      "let arr = [1, 2, 3];",
      "let arr = <1, 2, 3>;"
    ],
    "answer": 2
  },
  {
    "question": "Which keyword is used to declare a constant variable in JavaScript?",
    "options": [
      "var",
      "let",
      "const",
      "static"
    ],
    "answer": 2
  },
  {
    "question": "What is a function in JavaScript?",
    "options": [
      "A block of code designed to perform a particular task",
      "A variable that stores data",
      "An object property",
      "A method for styling elements"
    ],
    "answer": 0
  },
  {
    "question": "Which statement correctly defines a function in JavaScript?",
    "options": [
      "function myFunction() {}",
      "def myFunction() {}",
      "function: myFunction() {}",
      "func myFunction() {}"
    ],
    "answer": 0
  },
  {
    "question": "What does the 'this' keyword refer to in a regular function (non-strict mode) when called in the global context?",
    "options": [
      "The function itself",
      "The object that owns the function",
      "The global object (window in browsers)",
      "undefined"
    ],
    "answer": 2
  },
  {
    "question": "What is a closure in JavaScript?",
    "options": [
      "A function that is immediately invoked",
      "A function bundled together with its lexical environment",
      "A method to handle asynchronous code",
      "A design pattern for object inheritance"
    ],
    "answer": 1
  },
  {
    "question": "How can you handle asynchronous operations in JavaScript?",
    "options": [
      "Using callbacks",
      "Using Promises",
      "Using async/await",
      "All of the above"
    ],
    "answer": 3
  },
  {
    "question": "Which method is used to add an element to the end of an array?",
    "options": [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the JavaScript 'Promise' object?",
    "options": [
      "To handle synchronous operations",
      "To represent a value that may be available now, later, or never",
      "To create HTML elements dynamically",
      "To style web page elements"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is true about the JavaScript event loop?",
    "options": [
      "It executes code in a strictly synchronous manner",
      "It manages asynchronous callbacks by maintaining a call stack and a task queue",
      "It is responsible for rendering the UI",
      "It compiles JavaScript code into machine code"
    ],
    "answer": 1
  },
  {
    "question": "How do you create a new object using a constructor function in JavaScript?",
    "options": [
      "let obj = Object.create(Constructor);",
      "let obj = new Constructor();",
      "let obj = Constructor.new();",
      "let obj = create(Constructor);"
    ],
    "answer": 1
  },
  {
    "question": "What does prototypal inheritance allow you to do in JavaScript?",
    "options": [
      "Share properties and methods between objects",
      "Convert objects to arrays",
      "Enforce strict typing",
      "Automatically bind 'this' to functions"
    ],
    "answer": 0
  },
  {
    "question": "Which feature allows you to import modules in JavaScript (ES6)?",
    "options": [
      "require()",
      "import/export",
      "module.load()",
      "include()"
    ],
    "answer": 1
  },
  {
    "question": "What does the spread operator (...) do in JavaScript?",
    "options": [
      "It spreads elements of an array or properties of an object into a new array or object",
      "It limits the scope of a variable",
      "It creates a deep copy of an object",
      "It filters an array"
    ],
    "answer": 0
  },
  {
    "question": "Which syntax is used for defining an arrow function in JavaScript?",
    "options": [
      "function => {}",
      "() => {}",
      "=> function() {}",
      "func() => {}"
    ],
    "answer": 1
  }
];


// Endpoints
app.get('/java', (req, res) => {
    res.send(javatest);
});
app.get('/javafa', (req, res) => {
  res.send(javaassesment);
});
app.get('/python', (req, res) => {
  res.send(pythontest);
});
app.get('/pythonfa', (req, res) => {
res.send(pythonassesment);
});
app.get('/html', (req, res) => {
  res.send(htmltest);
});
app.get('/htmlfa', (req, res) => {
res.send(htmlassesment);
});
app.get('/css', (req, res) => {
  res.send(csstest);
});
app.get('/cssfa', (req, res) => {
res.send(cssassesment);
});
app.get('/js', (req, res) => {
  res.send(jstest);
});
app.get('/jsfa', (req, res) => {
res.send(jsassesment);
});
// Start the server
app.listen(3000, () => console.log('API running on http://localhost:3000'));
