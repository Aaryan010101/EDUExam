// Enhanced Quiz Data with Multiple Difficulties and Question Types
const quizData = {

  Programing: {
    name: "Programing",
    icon: "fas fa-lightbulb",
    description: "Test your Programing knowledge across various topics",
    questions: {
      easy: [
        {
          question: "What does CPU stand for?",
          options: [ "Central Process Unit",
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Program Unit"],
          correct: [1],
          type: "single",
          explanation: "CPU stands for Central Processing Unit which performs calculations and executes instructions.",
        },
        {
          question: "Which programming language is known as the 'mother of all languages' for many modern languages?",
          options: ["C", "Java", "Python", "HTML"],
          correct: [0],
          type: "single",
          explanation: "C language influenced many modern languages like C++, Java, and C#.",
        },
        {
          question: "Which symbol is used to end a statement in C programming?",
          options: [".", ";", ":", ","],
          correct: [1],
          type: "single",
          explanation: "In C programming every statement ends with a semicolon (;).",
        },
        {
          question: "Which data type is used to store integer values in C?",
          options: ["float", "char", "int", "double"],
          correct: [2],
          type: "single",
          explanation: "The int data type is used to store whole numbers.",
        },
        {
          question: "Which of these is an input device?",
          options: ["Monitor", "Keyboard", "Printer", "Speaker"],
          correct: [1],
          type: "single",
          explanation: "Keyboard is an input device used to enter data into a computer.",
        },
        {
          question: "Which keyword is used to define a function in JavaScript?",
          options: ["func", "function", "define", "method"],
          correct: [1],
          type: "single",
          explanation: "The 'function' keyword is used to define functions in JavaScript.",
        },
        {
          question: "Which of these are programming languages? (Select all that apply)",
          options: ["Python", "Java", "HTML", "C++"],
          correct: [0,1,3],
          type: "multiple",
          explanation: "Python, Java and C++ are programming languages while HTML is a markup language.",
        },
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language"
          ],
          correct: [1],
          type: "single",
          explanation: "HTML stands for HyperText Markup Language used to create web pages.",
        },
        {
          question: "Which data structure works on LIFO principle?",
          options: ["Queue", "Stack", "Array", "Tree"],
          correct: [1],
          type: "single",
          explanation: "Stack follows Last In First Out (LIFO).",
        },
        {
          question: "Which operator is used for addition in most programming languages?",
          options: ["+", "-", "*", "/"],
          correct: [0],
          type: "single",
          explanation: "The + operator is used to perform addition.",
        },
      ],
        medium: [
          {
            question: "Which of the following are programming paradigms? (Select all that apply)",
            options: [
              "Object Oriented Programming",
              "Functional Programming",
              "Procedural Programming",
              "Markup Programming"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "OOP, functional and procedural programming are common programming paradigms.",
          },
          {
            question: "Which keyword is used to create a class in Java?",
            options: ["define", "class", "object", "struct"],
            correct: [1],
            type: "single",
            explanation: "The keyword 'class' is used to define a class in Java.",
          },
          {
            question: "Which data structure uses FIFO principle?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            correct: [1],
            type: "single",
            explanation: "Queue follows First In First Out (FIFO).",
          },
          {
            question: "Which of the following are looping statements in C? (Select all that apply)",
            options: ["for", "while", "do-while", "repeat"],
            correct: [0,1,2],
            type: "multiple",
            explanation: "C language supports for, while and do-while loops.",
          },
          
          {
            question: "Which operator is used to compare two values in most programming languages?",
            options: ["=", "==", "!=", "+"],
            correct: [1],
            type: "single",
            explanation: "The '==' operator is used to compare values.",
          },
          
          {
            question: "Which of these languages are object-oriented? (Select all that apply)",
            options: ["Java", "C++", "Python", "Assembly"],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Java, C++ and Python support object oriented programming.",
          },
          
          {
            question: "What is the time complexity of linear search?",
            options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
            correct: [1],
            type: "single",
            explanation: "Linear search checks each element sequentially so complexity is O(n).",
          },
          
          {
            question: "Which of the following are valid data types in C? (Select all that apply)",
            options: ["int", "float", "char", "string"],
            correct: [0,1,2],
            type: "multiple",
            explanation: "C supports int, float and char but not a built-in string type.",
          },
          
          {
            question: "Which sorting algorithm repeatedly compares adjacent elements?",
            options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
            correct: [2],
            type: "single",
            explanation: "Bubble sort repeatedly compares and swaps adjacent elements.",
          },
          
          {
            question: "Which of these are characteristics of Object Oriented Programming? (Select all that apply)",
            options: [
              "Encapsulation",
              "Inheritance",
              "Polymorphism",
              "Compilation"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Encapsulation, Inheritance and Polymorphism are core features of OOP.",
          },
          
          {
            question: "Which statement is used to stop a loop in C?",
            options: ["stop", "exit", "break", "end"],
            correct: [2],
            type: "single",
            explanation: "The break statement terminates a loop immediately.",
          },
          
          {
            question: "Which of these are valid conditional statements? (Select all that apply)",
            options: ["if", "else", "switch", "loop"],
            correct: [0,1,2],
            type: "multiple",
            explanation: "if, else and switch are conditional statements.",
          },
          
          {
            question: "Which programming language is mainly used for database queries?",
            options: ["SQL", "Python", "Java", "C++"],
            correct: [0],
            type: "single",
            explanation: "SQL (Structured Query Language) is used to manage and query databases.",
          },
          
          {
            question: "Which data structure is used for hierarchical data?",
            options: ["Array", "Stack", "Tree", "Queue"],
            correct: [2],
            type: "single",
            explanation: "Tree structure represents hierarchical relationships."
          },
          {
            question: "Which of the following are types of loops? (Select all that apply)",
            options: ["for loop", "while loop", "do-while loop", "switch loop"],
            correct: [0,1,2],
            type: "multiple",
            explanation: "for, while and do-while are types of loops used in programming.",
          },
        ],

  hard: [
          {
  question: "Which of the following are characteristics of Object-Oriented Programming? (Select all that apply)",
  options: [
    "Encapsulation",
    "Inheritance",
    "Polymorphism",
    "Compilation"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Encapsulation, inheritance and polymorphism are core features of OOP.",
},

{
  question: "What is the worst-case time complexity of Quick Sort?",
  options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
  correct: [2],
  type: "single",
  explanation: "Quick sort worst-case complexity occurs when the pivot is poorly chosen resulting in O(n²).",
},

{
  question: "Which data structure is used in recursion?",
  options: ["Queue", "Stack", "Array", "Tree"],
  correct: [1],
  type: "single",
  explanation: "Recursion uses the call stack to store function calls.",
},

{
  question: "Which of the following are non-linear data structures? (Select all that apply)",
  options: ["Tree", "Graph", "Stack", "Queue"],
  correct: [0,1],
  type: "multiple",
  explanation: "Tree and Graph are non-linear data structures.",
},

{
  question: "Which sorting algorithm has the best average time complexity?",
  options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
  correct: [2],
  type: "single",
  explanation: "Merge Sort has an average time complexity of O(n log n).",
},

{
  question: "Which of these languages support Object-Oriented Programming? (Select all that apply)",
  options: ["Java", "C++", "Python", "Assembly"],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Java, C++ and Python support OOP concepts.",
},

{
  question: "What does ACID stand for in database systems? (Select all that apply)",
  options: [
    "Atomicity",
    "Consistency",
    "Isolation",
    "Durability"
  ],
  correct: [0,1,2,3],
  type: "multiple",
  explanation: "ACID properties ensure reliable database transactions.",
},

{
  question: "Which searching algorithm divides the search space into two halves?",
  options: ["Linear Search", "Binary Search", "Jump Search", "Hash Search"],
  correct: [1],
  type: "single",
  explanation: "Binary search divides the search space by half each time.",
},

{
  question: "Which of the following are types of trees in data structures? (Select all that apply)",
  options: ["Binary Tree", "AVL Tree", "B Tree", "Circular Tree"],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Binary Tree, AVL Tree and B Tree are common tree structures.",
},

{
  question: "What is the space complexity of an array?",
  options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
  correct: [1],
  type: "single",
  explanation: "Arrays require memory proportional to the number of elements.",
},

{
  question: "Which of the following algorithms are divide-and-conquer algorithms? (Select all that apply)",
  options: ["Merge Sort", "Quick Sort", "Binary Search", "Bubble Sort"],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Merge sort, quick sort and binary search follow divide-and-conquer strategy.",
},

{
  question: "Which normal form removes transitive dependency in DBMS?",
  options: ["1NF", "2NF", "3NF", "BCNF"],
  correct: [2],
  type: "single",
  explanation: "Third Normal Form (3NF) removes transitive dependencies.",
},

{
  question: "Which of the following are graph traversal algorithms? (Select all that apply)",
  options: [
    "Breadth First Search",
    "Depth First Search",
    "Dijkstra Algorithm",
    "Binary Search"
  ],
  correct: [0,1],
  type: "multiple",
  explanation: "BFS and DFS are graph traversal algorithms.",
},

{
  question: "Which data structure is used for implementing priority queues?",
  options: ["Heap", "Stack", "Array", "Linked List"],
  correct: [0],
  type: "single",
  explanation: "Heap data structure is commonly used for priority queues.",
},

{
  question: "Which of the following are features of functional programming? (Select all that apply)",
  options: [
    "Immutability",
    "Pure functions",
    "State changes",
    "Higher-order functions"
  ],
  correct: [0,1,3],
  type: "multiple",
  explanation: "Functional programming emphasizes immutability and pure functions.",
},

{
  question: "What is the time complexity of Heap Sort?",
  options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
  correct: [1],
  type: "single",
  explanation: "Heap sort has a time complexity of O(n log n).",
},

{
  question: "Which of these are hashing techniques? (Select all that apply)",
  options: [
    "Division Method",
    "Mid Square Method",
    "Folding Method",
    "Linear Search"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Division, Mid Square and Folding are hashing techniques.",
},

{
  question: "Which network protocol is used to transfer web pages?",
  options: ["FTP", "HTTP", "SMTP", "POP3"],
  correct: [1],
  type: "single",
  explanation: "HTTP (HyperText Transfer Protocol) is used to transfer web pages.",
},

{
  question: "Which of the following are advantages of linked lists? (Select all that apply)",
  options: [
    "Dynamic size",
    "Efficient insertion",
    "Random access",
    "Memory efficiency"
  ],
  correct: [0,1],
  type: "multiple",
  explanation: "Linked lists allow dynamic size and efficient insertion.",
},

{
  question: "Which algorithm is used to find the shortest path in graphs?",
  options: [
    "Binary Search",
    "Dijkstra Algorithm",
    "Merge Sort",
    "Selection Sort"
  ],
  correct: [1],
  type: "single",
  explanation: "Dijkstra's algorithm is used to find the shortest path in graphs.",
          }, 
        ],
      },
    },
    // End
    // Start
    Software: {
      name: "Software Engineering",
      icon: "fas fa-atom",
      description: "Explore the wonders of science and technology",
      questions: {
        easy: [
          {
            question: "What is Software Engineering?",
            options: [
              "Process of developing software using engineering principles",
              "Only coding software",
              "Repairing computers",
              "Designing hardware"
            ],
            correct: [0],
            type: "single",
            explanation: "Software Engineering is the systematic development and maintenance of software.",
          },
          {
            question: "Which model is also known as the Linear Sequential Model?",
            options: [
              "Waterfall Model",
              "Agile Model",
              "Spiral Model",
              "Prototype Model"
            ],
            correct: [0],
            type: "single",
            explanation: "The Waterfall Model follows a linear and sequential approach.",
          },
          
          {
            question: "What does SDLC stand for?",
            options: [
              "Software Development Life Cycle",
              "System Development Logical Cycle",
              "Software Design Logical Code",
              "System Design Life Code"
            ],
            correct: [0],
            type: "single",
            explanation: "SDLC stands for Software Development Life Cycle.",
          },
          
          {
            question: "Which phase of SDLC involves collecting user requirements?",
            options: [
              "Design",
              "Requirement Analysis",
              "Testing",
              "Maintenance"
            ],
            correct: [1],
            type: "single",
            explanation: "Requirement Analysis is the phase where user needs are gathered.",
          },
          
          {
            question: "Which of these are phases of SDLC? (Select all that apply)",
            options: [
              "Planning",
              "Design",
              "Testing",
              "Cooking"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Planning, Design, and Testing are phases of SDLC.",
          },
          
          {
            question: "Which diagram is used to represent system functionality in UML?",
            options: [
              "Use Case Diagram",
              "Flowchart",
              "ER Diagram",
              "Pie Chart"
            ],
            correct: [0],
            type: "single",
            explanation: "Use Case diagrams represent system functionality and user interaction.",
          },
          
          {
            question: "Which model allows repeated development cycles?",
            options: [
              "Waterfall Model",
              "Spiral Model",
              "Linear Model",
              "Static Model"
            ],
            correct: [1],
            type: "single",
            explanation: "The Spiral Model allows iterative development cycles.",
          },
          
          {
            question: "Which of the following are software testing types? (Select all that apply)",
            options: [
              "Unit Testing",
              "Integration Testing",
              "System Testing",
              "Cooking Testing"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Unit, Integration and System testing are types of software testing.",
          },
          
          {
            question: "What is debugging?",
            options: [
              "Finding and fixing errors in software",
              "Writing new code",
              "Deleting software",
              "Installing hardware"
            ],
            correct: [0],
            type: "single",
            explanation: "Debugging is the process of identifying and fixing errors in a program.",
          },
          
          {
            question: "Which document describes system requirements?",
            options: [
              "SRS Document",
              "HTML Document",
              "CSS File",
              "Executable File"
            ],
            correct: [0],
            type: "single",
            explanation: "SRS (Software Requirement Specification) describes system requirements.",
          }
        ],

        medium: [

          {
            question: "Which of the following are phases of the Software Development Life Cycle (SDLC)? (Select all that apply)",
            options: [
              "Requirement Analysis",
              "Design",
              "Testing",
              "Marketing"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Requirement analysis, design and testing are core phases of SDLC.",
          },
          
          {
            question: "Which model is suitable for projects with changing requirements?",
            options: [
              "Waterfall Model",
              "Agile Model",
              "V Model",
              "Linear Model"
            ],
            correct: [1],
            type: "single",
            explanation: "Agile model supports frequent changes and iterative development.",
          },
          
          {
            question: "Which document contains detailed system requirements?",
            options: [
              "SRS Document",
              "UML Diagram",
              "Flowchart",
              "Test Plan"
            ],
            correct: [0],
            type: "single",
            explanation: "SRS (Software Requirement Specification) contains detailed system requirements.",
          },
          
          {
            question: "Which of the following are types of software testing? (Select all that apply)",
            options: [
              "Unit Testing",
              "Integration Testing",
              "System Testing",
              "Assembly Testing"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Unit, Integration and System testing are commonly used testing types.",
          },
          
          {
            question: "Which diagram represents system interactions with users?",
            options: [
              "Use Case Diagram",
              "Sequence Diagram",
              "Class Diagram",
              "Activity Diagram"
            ],
            correct: [0],
            type: "single",
            explanation: "Use Case diagrams show how users interact with the system.",
          },
          
          {
            question: "Which of the following are advantages of the Agile model? (Select all that apply)",
            options: [
              "Flexibility",
              "Continuous feedback",
              "Customer involvement",
              "Rigid planning"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Agile provides flexibility, customer feedback and continuous improvement.",
          },
          
          {
            question: "Which testing technique focuses on internal code structure?",
            options: [
              "Black Box Testing",
              "White Box Testing",
              "Grey Box Testing",
              "Acceptance Testing"
            ],
            correct: [1],
            type: "single",
            explanation: "White box testing focuses on internal code logic.",
          },
          
          {
            question: "Which of the following are UML diagrams? (Select all that apply)",
            options: [
              "Class Diagram",
              "Use Case Diagram",
              "Sequence Diagram",
              "Network Diagram"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Class, Use Case and Sequence diagrams are UML diagrams.",
          },
          
          {
            question: "Which model combines elements of both iterative and waterfall models?",
            options: [
              "Spiral Model",
              "Waterfall Model",
              "Agile Model",
              "RAD Model"
            ],
            correct: [0],
            type: "single",
            explanation: "Spiral model combines iterative development with systematic aspects.",
          },
          
          {
            question: "Which phase of SDLC involves coding the software?",
            options: [
              "Implementation",
              "Requirement Analysis",
              "Testing",
              "Maintenance"
            ],
            correct: [0],
            type: "single",
            explanation: "Implementation phase involves writing the actual code.",
          },
          
          {
            question: "Which of the following are characteristics of good software? (Select all that apply)",
            options: [
              "Reliability",
              "Efficiency",
              "Maintainability",
              "Confusion"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Good software should be reliable, efficient and maintainable.",
          },
          
          {
            question: "Which testing ensures the software meets user requirements?",
            options: [
              "Unit Testing",
              "Acceptance Testing",
              "Integration Testing",
              "White Box Testing"
            ],
            correct: [1],
            type: "single",
            explanation: "Acceptance testing ensures the software satisfies user needs.",
          },
          
          {
            question: "Which of the following are responsibilities of a software engineer? (Select all that apply)",
            options: [
              "Design software systems",
              "Write code",
              "Test software",
              "Manufacture hardware"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Software engineers design, develop and test software systems.",
          },
          
          {
            question: "Which model delivers software in small increments?",
            options: [
              "Incremental Model",
              "Waterfall Model",
              "Big Bang Model",
              "Linear Model"
            ],
            correct: [0],
            type: "single",
            explanation: "Incremental model delivers the system in small functional parts.",
          },
          
          {
            question: "Which of the following are software maintenance types? (Select all that apply)",
            options: [
              "Corrective Maintenance",
              "Adaptive Maintenance",
              "Perfective Maintenance",
              "Mechanical Maintenance"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Corrective, adaptive and perfective are types of software maintenance.",
          },
          
          ],

        hard: [
          {
            question: "Which of the following are key principles of Software Engineering? (Select all that apply)",
            options: [
              "Modularity",
              "Abstraction",
              "Encapsulation",
              "Random Coding"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Modularity, abstraction and encapsulation help manage complexity in software systems.",
          },
          
          {
            question: "Which model emphasizes risk analysis during development?",
            options: [
              "Waterfall Model",
              "Spiral Model",
              "Agile Model",
              "V Model"
            ],
            correct: [1],
            type: "single",
            explanation: "The Spiral model focuses heavily on risk analysis in each phase.",
          },
          
          {
            question: "Which of the following are non-functional requirements? (Select all that apply)",
            options: [
              "Performance",
              "Security",
              "Usability",
              "Login Feature"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Performance, security and usability are non-functional requirements.",
          },
          
          {
            question: "Which testing method verifies the integration between modules?",
            options: [
              "Unit Testing",
              "Integration Testing",
              "System Testing",
              "Acceptance Testing"
            ],
            correct: [1],
            type: "single",
            explanation: "Integration testing checks interaction between modules.",
          },
          
          {
            question: "Which of the following UML diagrams are behavioral diagrams? (Select all that apply)",
            options: [
              "Sequence Diagram",
              "Activity Diagram",
              "Use Case Diagram",
              "Class Diagram"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Sequence, Activity and Use Case diagrams describe system behavior.",
          },
          
          {
            question: "Which document describes system architecture and design?",
            options: [
              "SRS Document",
              "Design Document",
              "Test Plan",
              "User Manual"
            ],
            correct: [1],
            type: "single",
            explanation: "The design document explains system architecture and design decisions.",
          },
          
          {
            question: "Which of the following are advantages of modular programming? (Select all that apply)",
            options: [
              "Improved maintainability",
              "Code reusability",
              "Easier debugging",
              "Increased complexity"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Modular programming improves maintainability and debugging.",
          },
          
          {
            question: "Which SDLC model is best suited for large complex projects?",
            options: [
              "Spiral Model",
              "Waterfall Model",
              "Big Bang Model",
              "Prototype Model"
            ],
            correct: [0],
            type: "single",
            explanation: "Spiral model is ideal for large projects with risk management.",
          },
          
          {
            question: "Which of the following are software quality attributes? (Select all that apply)",
            options: [
              "Reliability",
              "Efficiency",
              "Maintainability",
              "Temperature"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Software quality attributes include reliability, efficiency and maintainability.",
          },
          
          {
            question: "Which technique is used to estimate project cost and effort?",
            options: [
              "COCOMO Model",
              "Waterfall Model",
              "Agile Method",
              "Prototype Model"
            ],
            correct: [0],
            type: "single",
            explanation: "COCOMO (Constructive Cost Model) is used for project estimation.",
          },
          
          {
            question: "Which of the following are responsibilities of a software project manager? (Select all that apply)",
            options: [
              "Planning",
              "Scheduling",
              "Resource allocation",
              "Coding every module"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Project managers handle planning, scheduling and resource allocation.",
          },
          
          {
            question: "Which testing approach tests the system as a whole?",
            options: [
              "Unit Testing",
              "Integration Testing",
              "System Testing",
              "White Box Testing"
            ],
            correct: [2],
            type: "single",
            explanation: "System testing evaluates the complete system.",
          },
          
          {
            question: "Which of the following are types of software maintenance? (Select all that apply)",
            options: [
              "Corrective",
              "Adaptive",
              "Perfective",
              "Predictive"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Corrective, adaptive and perfective are standard maintenance types.",
          },
          
          {
            question: "Which development model focuses on building prototypes before final software?",
            options: [
              "Prototype Model",
              "Waterfall Model",
              "V Model",
              "Spiral Model"
            ],
            correct: [0],
            type: "single",
            explanation: "Prototype model builds a working model before full development.",
          },
          
          {
            question: "Which of the following are risk management strategies? (Select all that apply)",
            options: [
              "Risk avoidance",
              "Risk reduction",
              "Risk transfer",
              "Risk ignorance"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Risk management includes avoidance, reduction and transfer.",
          },
          
          {
            question: "Which metric measures software reliability?",
            options: [
              "Mean Time Between Failures",
              "Lines of Code",
              "Cyclomatic Complexity",
              "Code Coverage"
            ],
            correct: [0],
            type: "single",
            explanation: "MTBF measures the reliability of software systems.",
          },
          
          {
            question: "Which of the following are characteristics of Agile development? (Select all that apply)",
            options: [
              "Iterative development",
              "Continuous feedback",
              "Customer collaboration",
              "Strict linear phases"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Agile development encourages collaboration and iterative development.",
          },
          
          {
            question: "Which testing ensures that new changes do not break existing functionality?",
            options: [
              "Regression Testing",
              "Unit Testing",
              "Integration Testing",
              "System Testing"
            ],
            correct: [0],
            type: "single",
            explanation: "Regression testing verifies that new code changes do not affect existing features.",
          },
          
          {
            question: "Which design principle promotes hiding internal implementation details?",
            options: [
              "Encapsulation",
              "Inheritance",
              "Polymorphism",
              "Aggregation"
            ],
            correct: [0],
            type: "single",
            explanation: "Encapsulation hides internal details and exposes only necessary functionality.",
          },
          
          {
            question: "Which of the following are advantages of software reuse? (Select all that apply)",
            options: [
              "Reduced development time",
              "Lower cost",
              "Improved reliability",
              "Increased errors"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Reusing components saves time, reduces cost and improves reliability.",
          },
          
        ],
      },
    },
    Network: {
      name: "Computer Network",
      icon: "fas fa-scroll",
      description: "Journey through the pages of human history",
      questions: {
        easy: [
          {
            question: "What does LAN stand for?",
            options: [
              "Local Area Network",
              "Large Area Network",
              "Long Area Network",
              "Limited Area Network"
            ],
            correct: [0],
            type: "single",
            explanation: "LAN stands for Local Area Network which connects devices in a small geographical area.",
          },
          
          {
            question: "Which device connects multiple computers in a network?",
            options: ["Monitor", "Switch", "Keyboard", "Printer"],
            correct: [1],
            type: "single",
            explanation: "A switch connects multiple devices in a LAN.",
          },
          
          {
            question: "What does IP stand for?",
            options: [
              "Internet Protocol",
              "Internal Program",
              "Internet Program",
              "Internal Protocol"
            ],
            correct: [0],
            type: "single",
            explanation: "IP stands for Internet Protocol used for addressing devices in a network.",
          },
          
          {
            question: "Which of the following are network types? (Select all that apply)",
            options: [
              "LAN",
              "WAN",
              "MAN",
              "CPU"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "LAN, WAN and MAN are types of networks.",
          },
          
          {
            question: "Which protocol is used to transfer web pages?",
            options: ["HTTP", "FTP", "SMTP", "POP3"],
            correct: [0],
            type: "single",
            explanation: "HTTP (HyperText Transfer Protocol) is used to transfer web pages.",
          },
          
          {
            question: "Which device connects different networks together?",
            options: ["Router", "Mouse", "Scanner", "Speaker"],
            correct: [0],
            type: "single",
            explanation: "A router connects different networks and routes data packets.",
          },
          
          {
            question: "Which of the following are network devices? (Select all that apply)",
            options: [
              "Router",
              "Switch",
              "Hub",
              "Monitor"
            ],
            correct: [0,1,2],
            type: "multiple",
            explanation: "Router, switch and hub are networking devices."
          },
          
          {
            question: "Which topology connects all devices to a central hub?",
            options: [
              "Star Topology",
              "Ring Topology",
              "Bus Topology",
              "Mesh Topology"
            ],
            correct: [0],
            type: "single",
            explanation: "In star topology all devices connect to a central hub.",
          },
          
          {
            question: "What does URL stand for?",
            options: [
              "Universal Resource Locator",
              "Uniform Remote Locator",
              "Universal Remote Link",
              "Uniform Resource Locator",
            ],
            correct: [3],
            type: "single",
            explanation: "URL stands for Uniform Resource Locator which identifies web addresses.",
          },
          
          {
            question: "Which layer of OSI model is responsible for data transmission?",
            options: [
              "Application Layer",
              "Physical Layer",
              "Session Layer",
              "Presentation Layer"
            ],
            correct: [1],
            type: "single",
            explanation: "The physical layer transmits raw data bits over the network.",
          },
        ],


        medium: [
          
{
  question: "Which of the following are layers of the OSI model? (Select all that apply)",
  options: [
    "Application Layer",
    "Transport Layer",
    "Network Layer",
    "Browser Layer"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Application, Transport and Network are valid OSI layers.",
},

{
  question: "Which protocol is used for sending emails?",
  options: ["SMTP", "HTTP", "FTP", "TCP"],
  correct: [0],
  type: "single",
  explanation: "SMTP (Simple Mail Transfer Protocol) is used to send emails.",
},

{
  question: "Which of the following are transmission media? (Select all that apply)",
  options: [
    "Optical Fiber",
    "Twisted Pair Cable",
    "Coaxial Cable",
    "Keyboard"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Optical fiber, twisted pair and coaxial cables are transmission media.",
},

{
  question: "Which layer of the OSI model is responsible for routing?",
  options: [
    "Transport Layer",
    "Network Layer",
    "Session Layer",
    "Application Layer"
  ],
  correct: [1],
  type: "single",
  explanation: "The network layer handles routing and logical addressing.",
},

{
  question: "Which of the following are types of network topologies? (Select all that apply)",
  options: [
    "Star",
    "Bus",
    "Ring",
    "Triangle"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Star, Bus and Ring are common network topologies.",
},

{
  question: "Which protocol is used for secure web communication?",
  options: ["HTTP", "HTTPS", "FTP", "SMTP"],
  correct: [1],
  type: "single",
  explanation: "HTTPS encrypts communication between browser and server.",
},

{
  question: "Which of the following are functions of the Transport Layer? (Select all that apply)",
  options: [
    "Flow control",
    "Error control",
    "Segmentation",
    "Web page design"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Transport layer provides segmentation, flow control and error control.",
},

{
  question: "Which protocol is used to transfer files over the internet?",
  options: ["FTP", "HTTP", "SMTP", "SNMP"],
  correct: [0],
  type: "single",
  explanation: "FTP (File Transfer Protocol) is used for file transfer.",
},

{
  question: "Which of the following are advantages of optical fiber? (Select all that apply)",
  options: [
    "High bandwidth",
    "Low signal loss",
    "Immunity to electromagnetic interference",
    "Heavy weight"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Optical fiber provides high speed and low signal loss.",
},

{
  question: "Which device operates at the Network Layer of the OSI model?",
  options: ["Switch", "Hub", "Router", "Repeater"],
  correct: [2],
  type: "single",
  explanation: "Routers operate at the network layer.",
},

{
  question: "Which of the following are types of network addressing? (Select all that apply)",
  options: [
    "IP Address",
    "MAC Address",
    "Port Address",
    "File Address"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "IP, MAC and Port addresses are used in networking.",
},

{
  question: "Which layer of the OSI model is responsible for data encryption?",
  options: [
    "Presentation Layer",
    "Session Layer",
    "Transport Layer",
    "Network Layer"
  ],
  correct: [0],
  type: "single",
  explanation: "Presentation layer handles encryption and data formatting.",
},

{
  question: "Which of the following are protocols used in TCP/IP model? (Select all that apply)",
  options: [
    "HTTP",
    "FTP",
    "SMTP",
    "HTML"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "HTTP, FTP and SMTP are TCP/IP protocols while HTML is a markup language.",
},

{
  question: "Which device amplifies signals in a network?",
  options: ["Router", "Repeater", "Switch", "Bridge"],
  correct: [1],
  type: "single",
  explanation: "Repeater regenerates or amplifies signals in a network.",
},

{
  question: "Which of the following are characteristics of a good network? (Select all that apply)",
  options: [
    "Reliability",
    "Scalability",
    "Performance",
    "Slow speed"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Good networks should be reliable, scalable and high performance.",
},

        ],


  hard: [
          {
  question: "Which of the following are layers of the TCP/IP model? (Select all that apply)",
  options: [
    "Application Layer",
    "Transport Layer",
    "Internet Layer",
    "Hardware Layer"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "TCP/IP model includes Application, Transport, Internet and Network Access layers.",
},

{
  question: "Which algorithm is used by routers to determine the shortest path?",
  options: [
    "Binary Search",
    "Dijkstra Algorithm",
    "Merge Sort",
    "Selection Sort"
  ],
  correct: [1],
  type: "single",
  explanation: "Dijkstra's algorithm is commonly used in routing protocols.",
},

{
  question: "Which of the following are routing protocols? (Select all that apply)",
  options: [
    "RIP",
    "OSPF",
    "BGP",
    "HTTP"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "RIP, OSPF and BGP are routing protocols.",
},

{
  question: "Which layer of the OSI model is responsible for logical addressing?",
  options: [
    "Data Link Layer",
    "Network Layer",
    "Transport Layer",
    "Session Layer"
  ],
  correct: [1],
  type: "single",
  explanation: "The Network layer handles logical addressing like IP addresses.",
},

{
  question: "Which of the following are congestion control techniques? (Select all that apply)",
  options: [
    "Traffic Shaping",
    "Leaky Bucket",
    "Token Bucket",
    "Binary Search"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Traffic shaping techniques include leaky bucket and token bucket.",
},

{
  question: "Which protocol is used to translate domain names into IP addresses?",
  options: ["DNS", "FTP", "SMTP", "HTTP"],
  correct: [0],
  type: "single",
  explanation: "DNS (Domain Name System) converts domain names to IP addresses.",
},

{
  question: "Which of the following are switching techniques? (Select all that apply)",
  options: [
    "Circuit Switching",
    "Packet Switching",
    "Message Switching",
    "File Switching"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Circuit, packet and message switching are communication techniques.",
},

{
  question: "Which OSI layer is responsible for error detection and correction?",
  options: [
    "Data Link Layer",
    "Network Layer",
    "Session Layer",
    "Presentation Layer"
  ],
  correct: [0],
  type: "single",
  explanation: "Data link layer handles error detection and correction.",
},

{
  question: "Which of the following are characteristics of TCP? (Select all that apply)",
  options: [
    "Connection-oriented",
    "Reliable transmission",
    "Error checking",
    "Stateless protocol"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "TCP is connection-oriented and ensures reliable data transmission.",
},

{
  question: "Which protocol is used for network management?",
  options: [
    "SNMP",
    "HTTP",
    "FTP",
    "SMTP"
  ],
  correct: [0],
  type: "single",
  explanation: "SNMP (Simple Network Management Protocol) is used to manage network devices.",
},

{
  question: "Which of the following are types of network attacks? (Select all that apply)",
  options: [
    "DoS Attack",
    "Man-in-the-Middle",
    "Phishing",
    "Compilation Attack"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "DoS, MITM and phishing are common network security attacks.",
},

{
  question: "Which OSI layer manages sessions between applications?",
  options: [
    "Session Layer",
    "Transport Layer",
    "Network Layer",
    "Application Layer"
  ],
  correct: [0],
  type: "single",
  explanation: "Session layer establishes and manages sessions.",
},

{
  question: "Which of the following are IPv6 features? (Select all that apply)",
  options: [
    "128-bit address",
    "Improved security",
    "Larger address space",
    "32-bit addressing"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "IPv6 uses 128-bit addressing and supports improved security.",
},

{
  question: "Which protocol ensures reliable data delivery in TCP/IP?",
  options: [
    "UDP",
    "TCP",
    "IP",
    "ARP"
  ],
  correct: [1],
  type: "single",
  explanation: "TCP provides reliable data delivery.",
},

{
  question: "Which of the following are wireless networking standards? (Select all that apply)",
  options: [
    "Wi-Fi",
    "Bluetooth",
    "Zigbee",
    "Ethernet"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Wi-Fi, Bluetooth and Zigbee are wireless standards.",
},

{
  question: "Which protocol maps IP addresses to MAC addresses?",
  options: [
    "ARP",
    "DNS",
    "SMTP",
    "HTTP"
  ],
  correct: [0],
  type: "single",
  explanation: "ARP resolves IP addresses to MAC addresses.",
},

{
  question: "Which of the following are advantages of packet switching? (Select all that apply)",
  options: [
    "Efficient bandwidth usage",
    "Reduced delay",
    "Flexible routing",
    "Dedicated channel"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Packet switching uses bandwidth efficiently and supports flexible routing.",
},

{
  question: "Which layer provides end-to-end communication?",
  options: [
    "Transport Layer",
    "Network Layer",
    "Data Link Layer",
    "Physical Layer"
  ],
  correct: [0],
  type: "single",
  explanation: "Transport layer provides end-to-end communication.",
},

{
  question: "Which of the following are types of firewalls? (Select all that apply)",
  options: [
    "Packet Filtering Firewall",
    "Stateful Firewall",
    "Proxy Firewall",
    "Binary Firewall"
  ],
  correct: [0,1,2],
  type: "multiple",
  explanation: "Packet filtering, stateful and proxy firewalls are common firewall types.",
},

{
  question: "Which protocol is used to securely transfer files over the internet?",
  options: [
    "SFTP",
    "FTP",
    "HTTP",
    "SMTP"
  ],
  correct: [0],
  type: "single",
  explanation: "SFTP (Secure File Transfer Protocol) securely transfers files.",
},

        ],
      },
    },
  }
  
  // Global Variables and State
  let currentQuiz = {
    category: null,
    difficulty: null,
    questions: [],
    currentQuestion: 0,
    score: 0,
    answers: [],
    startTime: null,
    questionStartTime: null,
    timeRemaining: 0,
    totalTimeLimit: 0,
    questionTimeLimit: 15,
    timers: {
      question: null,
      total: null,
    },
  }
  
  let gameSettings = {
    soundEnabled: true,
    theme: "dark",
  }
  
  let leaderboard = []
  
  // Difficulty Settings
  const difficultySettings = {
    easy: { questions: 10, timePerQuestion: 15, totalTime: 300 },
    medium: { questions: 15, timePerQuestion: 20, totalTime: 450 },
    hard: { questions: 20, timePerQuestion: 25, totalTime: 600 },
  }
  
  // Initialize Application
  document.addEventListener("DOMContentLoaded", () => {
    initializeApp()
    loadSettings()
    loadLeaderboard()
    populateCategories()
    setupEventListeners()
    animateStats()
    updateTotalPlayers()
  })
  
  // Application Initialization
  function initializeApp() {
    showWelcome()
    updateNavigation("home")
  }
  
  // Load Settings from Local Storage
  function loadSettings() {
    const savedSettings = localStorage.getItem("quizSettings")
    if (savedSettings) {
      gameSettings = { ...gameSettings, ...JSON.parse(savedSettings) }
    }
  
    // Apply theme
    document.body.className = gameSettings.theme === "light" ? "light-theme" : "dark-theme"
  
    // Update sound toggle
    const soundToggle = document.getElementById("sound-toggle")
    if (soundToggle) {
      soundToggle.innerHTML = gameSettings.soundEnabled
        ? '<i class="fas fa-volume-up"></i>'
        : '<i class="fas fa-volume-mute"></i>'
      if (!gameSettings.soundEnabled) {
        soundToggle.classList.add("muted")
      }
    }
  
    // Update theme toggle
    const themeToggle = document.getElementById("theme-toggle")
    if (themeToggle) {
      themeToggle.innerHTML =
        gameSettings.theme === "light" ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>'
    }
  }
  
  // Save Settings to Local Storage
  function saveSettings() {
    localStorage.setItem("quizSettings", JSON.stringify(gameSettings))
  }
  
  // Load Leaderboard from Local Storage
  function loadLeaderboard() {
    const savedLeaderboard = localStorage.getItem("quizLeaderboard")
    if (savedLeaderboard) {
      leaderboard = JSON.parse(savedLeaderboard)
    } else {
      // Initialize with sample data
      leaderboard = generateSampleLeaderboard()
      saveLeaderboard()
    }
  }
  
  // Save Leaderboard to Local Storage
  function saveLeaderboard() {
    localStorage.setItem("quizLeaderboard", JSON.stringify(leaderboard))
  }
  
  // Generate Sample Leaderboard Data
  function generateSampleLeaderboard() {
    const sampleNames = [
      "Alex Johnson",
      "Sarah Chen",
      "Mike Rodriguez",
      "Emma Wilson",
      "David Kim",
      "Lisa Thompson",
      "John Davis",
      "Maria Garcia",
      "Chris Lee",
      "Anna Brown",
    ]
    const categories = Object.keys(quizData)
    const difficulties = ["easy", "medium", "hard"]
    const sample = []
  
    for (let i = 0; i < 50; i++) {
      sample.push({
        name: sampleNames[Math.floor(Math.random() * sampleNames.length)],
        category: categories[Math.floor(Math.random() * categories.length)],
        difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
        score: Math.floor(Math.random() * 1000) + 200,
        accuracy: Math.floor(Math.random() * 40) + 60,
        time: Math.floor(Math.random() * 300) + 120,
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
      })
    }
  
    return sample.sort((a, b) => b.score - a.score)
  }
  
  // Navigation Functions
  function showWelcome() {
    hideAllSections()
    document.getElementById("welcome-section").classList.remove("hidden")
    updateNavigation("home")
  }
  
  function showCategories() {
    hideAllSections()
    document.getElementById("category-section").classList.remove("hidden")
    updateNavigation("categories")
  }
  
  function showLeaderboard() {
    hideAllSections()
    document.getElementById("leaderboard-section").classList.remove("hidden")
    updateNavigation("leaderboard")
    populateLeaderboard()
  }
  
  function showAbout() {
    hideAllSections()
    document.getElementById("about-section").classList.remove("hidden")
    updateNavigation("about")
  }
  
  function hideAllSections() {
    const sections = [
      "welcome-section",
      "category-section",
      "quiz-section",
      "results-section",
      "review-section",
      "leaderboard-section",
      "about-section",
    ]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) element.classList.add("hidden")
    })
  }
  
  function updateNavigation(activeSection) {
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.dataset.section === activeSection) {
        link.classList.add("active")
      }
    })
  }
  
  // Populate Categories General Knowledge
  function populateCategories() {
    const categoriesGrid = document.getElementById("categories-grid")
    if (!categoriesGrid) return
  
    categoriesGrid.innerHTML = ""
  
    Object.keys(quizData).forEach((categoryKey) => {
      const category = quizData[categoryKey]
      const categoryCard = document.createElement("div")
      categoryCard.className = "category-card"
      categoryCard.onclick = () => startQuiz(categoryKey)
  
      const totalQuestions = Object.values(category.questions).reduce((sum, questions) => sum + questions.length, 0)
  
      categoryCard.innerHTML = `
        <i class="${category.icon} category-icon"></i>
        <h3 class="category-title">${category.name}</h3>
        <p class="category-description">${category.description}</p>
        <div class="category-stats">
          <span>${totalQuestions} Questions</span>
          <span>3 Levels</span>
        </div>
      `
  
      categoriesGrid.appendChild(categoryCard)
    })
  }
  
  // Start Quiz
  function startQuiz(categoryKey) {
    const difficulty = document.querySelector(".difficulty-btn.active").dataset.difficulty
  
    if (!quizData[categoryKey] || !quizData[categoryKey].questions[difficulty]) {
      alert("Quiz not available for this category and difficulty.")
      return
    }
  
    // Initialize quiz state
    currentQuiz = {
      category: categoryKey,
      difficulty: difficulty,
      questions: shuffleArray([...quizData[categoryKey].questions[difficulty]]),
      currentQuestion: 0,
      score: 0,
      answers: [],
      startTime: Date.now(),
      questionStartTime: Date.now(),
      timeRemaining: difficultySettings[difficulty].totalTime,
      totalTimeLimit: difficultySettings[difficulty].totalTime,
      questionTimeLimit: difficultySettings[difficulty].timePerQuestion,
      timers: { question: null, total: null },
    }
  
    // Limit questions based on difficulty
    currentQuiz.questions = currentQuiz.questions.slice(0, difficultySettings[difficulty].questions)
  
    hideAllSections()
    document.getElementById("quiz-section").classList.remove("hidden")
  
    setupQuizUI()
    displayQuestion()
    startTimers()
  }
  
  // Quick Start
  function quickStart() {
    const categories = Object.keys(quizData)
    const difficulties = ["easy", "medium", "hard"]
  
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]
    const randomDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)]
  
    // Set random difficulty as active
    document.querySelectorAll(".difficulty-btn").forEach((btn) => btn.classList.remove("active"))
    document.querySelector(`[data-difficulty="${randomDifficulty}"]`).classList.add("active")
  
    startQuiz(randomCategory)
  }
  
  // Setup Quiz UI
  function setupQuizUI() {
    const categoryBadge = document.getElementById("current-category")
    const difficultyBadge = document.getElementById("current-difficulty")
    const questionCounter = document.getElementById("question-counter")
  
    if (categoryBadge) categoryBadge.textContent = quizData[currentQuiz.category].name
    if (difficultyBadge)
      difficultyBadge.textContent = currentQuiz.difficulty.charAt(0).toUpperCase() + currentQuiz.difficulty.slice(1)
    if (questionCounter)
      questionCounter.textContent = `Question ${currentQuiz.currentQuestion + 1} of ${currentQuiz.questions.length}`
  
    // Setup progress indicators
    setupProgressIndicators()
  
    // Update total timer display
    updateTotalTimer()
  
    // Reset navigation buttons
    updateNavigationButtons()
  }
  
  // Setup Progress Indicators
  function setupProgressIndicators() {
    const progressIndicators = document.getElementById("progress-indicators")
    if (!progressIndicators) return
  
    progressIndicators.innerHTML = ""
  
    for (let i = 0; i < currentQuiz.questions.length; i++) {
      const dot = document.createElement("div")
      dot.className = "progress-dot"
      dot.onclick = () => jumpToQuestion(i)
      progressIndicators.appendChild(dot)
    }
  
    updateProgressIndicators()
  }
  
  // Update Progress Indicators
  function updateProgressIndicators() {
    const dots = document.querySelectorAll(".progress-dot")
    dots.forEach((dot, index) => {
      dot.classList.remove("current", "completed", "skipped")
  
      if (index === currentQuiz.currentQuestion) {
        dot.classList.add("current")
      } else if (index < currentQuiz.currentQuestion) {
        if (currentQuiz.answers[index] && currentQuiz.answers[index].skipped) {
          dot.classList.add("skipped")
        } else {
          dot.classList.add("completed")
        }
      }
    })
  
    // Update progress bar
    const progressFill = document.getElementById("progress-fill")
    if (progressFill) {
      const progress = (currentQuiz.currentQuestion / currentQuiz.questions.length) * 100
      progressFill.style.width = `${progress}%`
    }
  }
  
  // Display Question
  function displayQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentQuestion]
    if (!question) return
  
    // Update question text and type
    const questionText = document.getElementById("question-text")
    const questionType = document.getElementById("question-type")
  
    if (questionText) questionText.textContent = question.question
    if (questionType) {
      questionType.textContent =
        question.type === "multiple" ? "Multiple Choice (Select all that apply)" : "Single Choice"
    }
  
    // Update question counter
    const questionCounter = document.getElementById("question-counter")
    if (questionCounter) {
      questionCounter.textContent = `Question ${currentQuiz.currentQuestion + 1} of ${currentQuiz.questions.length}`
    }
  
    // Display answers
    displayAnswers(question)
  
    // Reset question timer
    currentQuiz.questionStartTime = Date.now()
    startQuestionTimer()
  
    // Update navigation buttons
    updateNavigationButtons()
  
    // Update progress
    updateProgressIndicators()
  
    // Update score display
    updateScoreDisplay()
  }
  
  // Display Answers
  function displayAnswers(question) {
    const answersGrid = document.getElementById("answers-grid")
    if (!answersGrid) return
  
    answersGrid.innerHTML = ""
  
    // Set grid layout based on question type
    if (question.type === "multiple") {
      answersGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))"
    } else {
      answersGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))"
    }
  
    question.options.forEach((option, index) => {
      const answerOption = document.createElement("div")
      answerOption.className = "answer-option"
      answerOption.dataset.index = index
      answerOption.onclick = () => selectAnswer(index)
  
      answerOption.innerHTML = `
        <span>${option}</span>
        <i class="fas fa-check answer-icon"></i>
      `
  
      answersGrid.appendChild(answerOption)
    })
  
    // Restore previous selections and feedback if any
    const previousAnswer = currentQuiz.answers[currentQuiz.currentQuestion]
    if (previousAnswer && previousAnswer.selected) {
      previousAnswer.selected.forEach((index) => {
        const option = document.querySelector(`[data-index="${index}"]`)
        if (option) {
          option.classList.add(question.type === "multiple" ? "multiple-selected" : "selected")
        }
      })
  
      // Restore feedback if it was shown
      if (previousAnswer.feedbackShown) {
        const answerOptions = document.querySelectorAll(".answer-option")
        answerOptions.forEach((option, index) => {
          if (question.correct.includes(index)) {
            option.classList.add("correct")
          } else if (previousAnswer.selected.includes(index)) {
            option.classList.add("incorrect")
          }
        })
      }
    }
  }
  
  // Select Answer
  function selectAnswer(index) {
    const question = currentQuiz.questions[currentQuiz.currentQuestion]
    const answerOptions = document.querySelectorAll(".answer-option")
    const selectedOption = document.querySelector(`[data-index="${index}"]`)
  
    // Get current answer state
    const currentAnswer = currentQuiz.answers[currentQuiz.currentQuestion]
    const feedbackShown = currentAnswer && currentAnswer.feedbackShown
  
    // If feedback was shown and user is changing answer, clear feedback and recalculate
    if (feedbackShown) {
      // Clear visual feedback
      answerOptions.forEach((option) => {
        option.classList.remove("correct", "incorrect")
      })
  
      // Subtract previous score if it was correct
      if (currentAnswer.correct) {
        const timeBonus = Math.max(0, currentQuiz.questionTimeLimit - currentAnswer.timeSpent / 1000)
        const baseScore = difficultySettings[currentQuiz.difficulty].questions * 10
        const questionScore = baseScore + timeBonus * 2
        currentQuiz.score -= Math.round(questionScore)
      }
    }
  
    if (question.type === "single") {
      // Single choice - clear all selections and select this one
      answerOptions.forEach((option) => option.classList.remove("selected"))
      selectedOption.classList.add("selected")
  
      // Store answer
      currentQuiz.answers[currentQuiz.currentQuestion] = {
        selected: [index],
        timeSpent: Date.now() - currentQuiz.questionStartTime,
        skipped: false,
        feedbackShown: false,
        correct: false,
      }
    } else {
      // Multiple choice - toggle selection
      const isSelected = selectedOption.classList.contains("multiple-selected")
  
      if (isSelected) {
        selectedOption.classList.remove("multiple-selected")
      } else {
        selectedOption.classList.add("multiple-selected")
      }
  
      // Get all selected indices
      const selectedIndices = []
      answerOptions.forEach((option, idx) => {
        if (option.classList.contains("multiple-selected")) {
          selectedIndices.push(idx)
        }
      })
  
      // Store answer
      currentQuiz.answers[currentQuiz.currentQuestion] = {
        selected: selectedIndices,
        timeSpent: Date.now() - currentQuiz.questionStartTime,
        skipped: false,
        feedbackShown: false,
        correct: false,
      }
    }
  
    // Enable next button
    updateNavigationButtons()
  
    // Play sound
    playSound("select")
  }
  
  // Jump to Question
  function jumpToQuestion(questionIndex) {
    if (questionIndex >= 0 && questionIndex < currentQuiz.questions.length) {
      currentQuiz.currentQuestion = questionIndex
      displayQuestion()
    }
  }
  
  // Next Question
  function nextQuestion() {
    const answer = currentQuiz.answers[currentQuiz.currentQuestion]
  
    if (!answer || !answer.selected || answer.selected.length === 0) {
      if (!confirm("You haven't selected an answer. Do you want to skip this question?")) {
        return
      }
      skipQuestion()
      return
    }
  
    // Only check answer if feedback hasn't been shown yet
    if (!answer.feedbackShown) {
      checkAnswer()
  
      setTimeout(() => {
        proceedToNext()
      }, 1500)
    } else {
      // If feedback was already shown, proceed immediately
      proceedToNext()
    }
  }
  
  // Helper function to proceed to next question
  function proceedToNext() {
    if (currentQuiz.currentQuestion < currentQuiz.questions.length - 1) {
      currentQuiz.currentQuestion++
      displayQuestion()
    } else {
      finishQuiz()
    }
  }
  
  // Previous Question
  function previousQuestion() {
    if (currentQuiz.currentQuestion > 0) {
      currentQuiz.currentQuestion--
      displayQuestion()
    }
  }
  
  // Skip Question
  function skipQuestion() {
    currentQuiz.answers[currentQuiz.currentQuestion] = {
      selected: [],
      timeSpent: Date.now() - currentQuiz.questionStartTime,
      skipped: true,
    }
  
    if (currentQuiz.currentQuestion < currentQuiz.questions.length - 1) {
      currentQuiz.currentQuestion++
      displayQuestion()
    } else {
      finishQuiz()
    }
  
    playSound("skip")
  }
  
  // Check Answer
  function checkAnswer() {
    const question = currentQuiz.questions[currentQuiz.currentQuestion]
    const answer = currentQuiz.answers[currentQuiz.currentQuestion]
    const answerOptions = document.querySelectorAll(".answer-option")
  
    if (!answer || !answer.selected) return
  
    const isCorrect = arraysEqual(answer.selected.sort(), question.correct.sort())
  
    // Show correct/incorrect feedback
    answerOptions.forEach((option, index) => {
      if (question.correct.includes(index)) {
        option.classList.add("correct")
      } else if (answer.selected.includes(index)) {
        option.classList.add("incorrect")
      }
    })
  
    // Calculate score
    if (isCorrect) {
      const timeBonus = Math.max(0, currentQuiz.questionTimeLimit - answer.timeSpent / 1000)
      const baseScore = difficultySettings[currentQuiz.difficulty].questions * 10
      const questionScore = baseScore + timeBonus * 2
      currentQuiz.score += Math.round(questionScore)
      playSound("correct")
    } else {
      playSound("incorrect")
    }
  
    // Update score display
    updateScoreDisplay()
  
    // Store result
    answer.correct = isCorrect
    answer.feedbackShown = true
  }
  
  // Timer Functions
  function startTimers() {
    startTotalTimer()
    startQuestionTimer()
  }
  
  function startTotalTimer() {
    clearInterval(currentQuiz.timers.total)
  
    currentQuiz.timers.total = setInterval(() => {
      currentQuiz.timeRemaining--
      updateTotalTimer()
  
      if (currentQuiz.timeRemaining <= 0) {
        clearInterval(currentQuiz.timers.total)
        finishQuiz()
      }
    }, 1000)
  }
  
  function startQuestionTimer() {
    clearInterval(currentQuiz.timers.question)
  
    let timeLeft = currentQuiz.questionTimeLimit
    updateQuestionTimer(timeLeft)
  
    currentQuiz.timers.question = setInterval(() => {
      timeLeft--
      updateQuestionTimer(timeLeft)
  
      if (timeLeft <= 0) {
        clearInterval(currentQuiz.timers.question)
        // Auto-skip question
        skipQuestion()
      }
    }, 1000)
  }
  
  function updateTotalTimer() {
    const totalTimer = document.getElementById("total-time")
    if (totalTimer) {
      const minutes = Math.floor(currentQuiz.timeRemaining / 60)
      const seconds = currentQuiz.timeRemaining % 60
      totalTimer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    }
  }
  
  function updateQuestionTimer(timeLeft) {
    const timer = document.getElementById("timer")
    const timerBar = document.getElementById("timer-bar")
  
    if (timer) timer.textContent = timeLeft
  
    if (timerBar) {
      const percentage = (timeLeft / currentQuiz.questionTimeLimit) * 100
      timerBar.style.width = `${percentage}%`
  
      // Change color based on time remaining
      if (percentage <= 25) {
        timerBar.style.background = "linear-gradient(90deg, #ff4757, #ff3742)"
      } else if (percentage <= 50) {
        timerBar.style.background = "linear-gradient(90deg, #ffa502, #ff7675)"
      } else {
        timerBar.style.background = "linear-gradient(90deg, var(--primary-color), var(--secondary-color))"
      }
    }
  
    // Play warning sound
    if (timeLeft <= 5 && timeLeft > 0) {
      playSound("timer")
    }
  }
  
  function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("current-score")
    if (scoreDisplay) {
      scoreDisplay.textContent = currentQuiz.score
    }
  }
  
  function updateNavigationButtons() {
    const prevButton = document.getElementById("prev-button")
    const nextButton = document.getElementById("next-button")
    const skipButton = document.getElementById("skip-button")
  
    if (prevButton) {
      prevButton.style.display = currentQuiz.currentQuestion > 0 ? "flex" : "none"
    }
  
    if (nextButton) {
      const answer = currentQuiz.answers[currentQuiz.currentQuestion]
      const hasAnswer = answer && answer.selected && answer.selected.length > 0
  
      nextButton.disabled = !hasAnswer
      nextButton.innerHTML =
        currentQuiz.currentQuestion === currentQuiz.questions.length - 1
          ? '<span>Finish Quiz</span><i class="fas fa-flag-checkered"></i>'
          : '<span>Next Question</span><i class="fas fa-arrow-right"></i>'
    }
  
    // Show buttons with animation
    setTimeout(() => {
      if (prevButton) prevButton.classList.add("show")
      if (nextButton) nextButton.classList.add("show")
      if (skipButton) skipButton.classList.add("show")
    }, 100)
  }
  
  // Finish Quiz
  function finishQuiz() {
    clearInterval(currentQuiz.timers.total)
    clearInterval(currentQuiz.timers.question)
  
    const endTime = Date.now()
    const totalTime = Math.round((endTime - currentQuiz.startTime) / 1000)
  
    // Calculate final results
    const results = calculateResults(totalTime)
  
    // Save to leaderboard
    saveToLeaderboard(results)
  
    // Show results
    showResults(results)
  }
  
  // Calculate Results
  function calculateResults(totalTime) {
    const correctAnswers = currentQuiz.answers.filter((answer) => answer && answer.correct).length
    const totalQuestions = currentQuiz.questions.length
    const accuracy = Math.round((correctAnswers / totalQuestions) * 100)
    const skippedQuestions = currentQuiz.answers.filter((answer) => answer && answer.skipped).length
  
    return {
      score: currentQuiz.score,
      correctAnswers,
      totalQuestions,
      accuracy,
      skippedQuestions,
      totalTime,
      category: currentQuiz.category,
      difficulty: currentQuiz.difficulty,
    }
  }
  
  // Show Results
  function showResults(results) {
    hideAllSections()
    document.getElementById("results-section").classList.remove("hidden")
  
    // Update results display
    document.getElementById("final-score").textContent = results.score
    document.getElementById("correct-answers").textContent = results.correctAnswers
    document.getElementById("total-questions").textContent = results.totalQuestions
    document.getElementById("accuracy").textContent = `${results.accuracy}%`
  
    const minutes = Math.floor(results.totalTime / 60)
    const seconds = results.totalTime % 60
    document.getElementById("time-taken").textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`
  
    // Performance message
    const performanceMessage = document.getElementById("performance-message")
    if (performanceMessage) {
      performanceMessage.textContent = getPerformanceMessage(results.accuracy)
    }
  
    // Achievement badges
    displayAchievementBadges(results)
  }
  
  // Get Performance Message
  function getPerformanceMessage(accuracy) {
    if (accuracy >= 90) return "Outstanding! You're a quiz master! 🏆"
    if (accuracy >= 80) return "Excellent work! You really know your stuff! 🌟"
    if (accuracy >= 70) return "Great job! You're doing well! 👍"
    if (accuracy >= 60) return "Good effort! Keep practicing! 💪"
    return "Don't give up! Practice makes perfect! 📚"
  }
  
  // Display Achievement Badges
  function displayAchievementBadges(results) {
    const badgesContainer = document.getElementById("achievement-badges")
    if (!badgesContainer) return
  
    badgesContainer.innerHTML = ""
  
    const badges = []
  
    if (results.accuracy === 100) badges.push({ icon: "fas fa-crown", text: "Perfect Score" })
    if (results.accuracy >= 90) badges.push({ icon: "fas fa-star", text: "Excellence" })
    if (results.skippedQuestions === 0) badges.push({ icon: "fas fa-check-circle", text: "Completionist" })
    if (results.difficulty === "hard") badges.push({ icon: "fas fa-fire", text: "Challenge Accepted" })
    if (results.totalTime < difficultySettings[results.difficulty].totalTime * 0.5) {
      badges.push({ icon: "fas fa-bolt", text: "Speed Demon" })
    }
  
    badges.forEach((badge) => {
      const badgeElement = document.createElement("div")
      badgeElement.className = "achievement-badge"
      badgeElement.innerHTML = `<i class="${badge.icon}"></i> ${badge.text}`
      badgesContainer.appendChild(badgeElement)
    })
  }
  
  // Save to Leaderboard
  function saveToLeaderboard(results) {
    const playerName = prompt("Enter your name for the leaderboard:") || "Anonymous"
  
    const entry = {
      name: playerName,
      category: results.category,
      difficulty: results.difficulty,
      score: results.score,
      accuracy: results.accuracy,
      time: results.totalTime,
      date: new Date(),
    }
  
    leaderboard.push(entry)
    leaderboard.sort((a, b) => b.score - a.score)
    leaderboard = leaderboard.slice(0, 100) // Keep top 100
  
    saveLeaderboard()
  }
  
  // Review Answers
  function reviewAnswers() {
    hideAllSections()
    document.getElementById("review-section").classList.remove("hidden")
  
    const reviewContent = document.getElementById("review-content")
    if (!reviewContent) return
  
    reviewContent.innerHTML = ""
  
    currentQuiz.questions.forEach((question, index) => {
      const answer = currentQuiz.answers[index]
      const reviewQuestion = document.createElement("div")
      reviewQuestion.className = "review-question"
  
      let resultClass = "skipped"
      let resultText = "Skipped"
  
      if (answer && !answer.skipped) {
        resultClass = answer.correct ? "correct" : "incorrect"
        resultText = answer.correct ? "Correct" : "Incorrect"
      }
  
      reviewQuestion.innerHTML = `
        <div class="review-question-header">
          <span class="review-question-number">Question ${index + 1}</span>
          <span class="review-result ${resultClass}">${resultText}</span>
        </div>
        <div class="review-question-text">${question.question}</div>
        <div class="review-answers" id="review-answers-${index}"></div>
        <div class="review-explanation">
          <strong>Explanation:</strong> ${question.explanation}
        </div>
      `
  
      reviewContent.appendChild(reviewQuestion)
  
      // Add answer options
      const answersContainer = document.getElementById(`review-answers-${index}`)
      question.options.forEach((option, optionIndex) => {
        const answerDiv = document.createElement("div")
        answerDiv.className = "review-answer"
  
        if (question.correct.includes(optionIndex)) {
          answerDiv.classList.add("correct-answer")
        }
  
        if (answer && answer.selected && answer.selected.includes(optionIndex)) {
          answerDiv.classList.add("user-selected")
          if (!question.correct.includes(optionIndex)) {
            answerDiv.classList.add("incorrect-selected")
          }
        }
  
        answerDiv.innerHTML = `
          <span>${option}</span>
          <div>
            ${question.correct.includes(optionIndex) ? '<i class="fas fa-check" style="color: var(--success-color);"></i>' : ""}
            ${answer && answer.selected && answer.selected.includes(optionIndex) ? '<i class="fas fa-user" style="color: var(--primary-color);"></i>' : ""}
          </div>
        `
  
        answersContainer.appendChild(answerDiv)
      })
    })
  }
  
  // Populate Leaderboard
  function populateLeaderboard() {
    const categoryFilter = document.getElementById("leaderboard-category")
    const difficultyFilter = document.getElementById("leaderboard-difficulty")
    const leaderboardContent = document.getElementById("leaderboard-content")
  
    if (!leaderboardContent) return
  
    // Populate category filter
    if (categoryFilter && categoryFilter.children.length === 1) {
      Object.keys(quizData).forEach((categoryKey) => {
        const option = document.createElement("option")
        option.value = categoryKey
        option.textContent = quizData[categoryKey].name
        categoryFilter.appendChild(option)
      })
    }
  
    // Filter leaderboard
    const categoryValue = categoryFilter ? categoryFilter.value : "all"
    const difficultyValue = difficultyFilter ? difficultyFilter.value : "all"
  
    let filteredLeaderboard = leaderboard
  
    if (categoryValue !== "all") {
      filteredLeaderboard = filteredLeaderboard.filter((entry) => entry.category === categoryValue)
    }
  
    if (difficultyValue !== "all") {
      filteredLeaderboard = filteredLeaderboard.filter((entry) => entry.difficulty === difficultyValue)
    }
  
    // Display leaderboard
    leaderboardContent.innerHTML = ""
  
    if (filteredLeaderboard.length === 0) {
      leaderboardContent.innerHTML =
        '<p style="text-align: center; color: var(--text-secondary);">No scores found for the selected filters.</p>'
      return
    }
  
    filteredLeaderboard.slice(0, 20).forEach((entry, index) => {
      const leaderboardItem = document.createElement("div")
      leaderboardItem.className = "leaderboard-item"
  
      const rankClass = index < 3 ? "top-3" : ""
      const categoryName = quizData[entry.category] ? quizData[entry.category].name : entry.category
  
      leaderboardItem.innerHTML = `
        <div class="leaderboard-rank ${rankClass}">${index + 1}</div>
        <div class="leaderboard-player">
          <div class="leaderboard-name">${entry.name}</div>
          <div class="leaderboard-details">${categoryName} - ${entry.difficulty.charAt(0).toUpperCase() + entry.difficulty.slice(1)} | ${entry.accuracy}% accuracy</div>
        </div>
        <div class="leaderboard-score">${entry.score}</div>
      `
  
      leaderboardContent.appendChild(leaderboardItem)
    })
  }
  
  // Share Results
  function shareResults() {
    const modal = document.getElementById("share-modal")
    const shareText = document.getElementById("share-text")
  
    if (!modal || !shareText) return
  
    const results = calculateResults(Math.round((Date.now() - currentQuiz.startTime) / 1000))
    const categoryName = quizData[currentQuiz.category].name
  
    const text = `I just scored ${results.score} points on Quiz Master Pro! 🎯\n\nCategory: ${categoryName}\nDifficulty: ${currentQuiz.difficulty.charAt(0).toUpperCase() + currentQuiz.difficulty.slice(1)}\nAccuracy: ${results.accuracy}%\n\nCan you beat my score? Try it now!`
  
    shareText.textContent = text
    modal.classList.remove("hidden")
  }
  
  function closeShareModal() {
    const modal = document.getElementById("share-modal")
    if (modal) modal.classList.add("hidden")
  }
  
  function shareToTwitter() {
    const text = document.getElementById("share-text").textContent
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }
  
  function shareToFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
    window.open(url, "_blank")
  }
  
  function shareToLinkedIn() {
    const text = document.getElementById("share-text").textContent
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }
  
  function copyResults() {
    const text = document.getElementById("share-text").textContent
    navigator.clipboard.writeText(text).then(() => {
      alert("Results copied to clipboard!")
    })
  }
  
  // Quit Quiz
  function quitQuiz() {
    if (confirm("Are you sure you want to quit the quiz? Your progress will be lost.")) {
      clearInterval(currentQuiz.timers.total)
      clearInterval(currentQuiz.timers.question)
      showWelcome()
    }
  }
  
  // Theme and Settings
  function toggleTheme() {
    gameSettings.theme = gameSettings.theme === "dark" ? "light" : "dark"
    document.body.className = gameSettings.theme === "light" ? "light-theme" : "dark-theme"
  
    const themeToggle = document.getElementById("theme-toggle")
    if (themeToggle) {
      themeToggle.innerHTML =
        gameSettings.theme === "light" ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>'
    }
  
    saveSettings()
  }
  
  function toggleSound() {
    gameSettings.soundEnabled = !gameSettings.soundEnabled
  
    const soundToggle = document.getElementById("sound-toggle")
    if (soundToggle) {
      soundToggle.innerHTML = gameSettings.soundEnabled
        ? '<i class="fas fa-volume-up"></i>'
        : '<i class="fas fa-volume-mute"></i>'
  
      if (gameSettings.soundEnabled) {
        soundToggle.classList.remove("muted")
      } else {
        soundToggle.classList.add("muted")
      }
    }
  
    saveSettings()
  }
  
  // Sound Effects - Updated function
  function playSound(type) {
    if (!gameSettings.soundEnabled) return
  
    // Create audio context for better browser compatibility
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
  
    // Simple beep sounds using Web Audio API
    const sounds = {
      correct: () => playBeep(audioContext, 800, 0.2, "sine"),
      incorrect: () => playBeep(audioContext, 300, 0.3, "sawtooth"),
      timer: () => playBeep(audioContext, 600, 0.1, "square"),
      select: () => playBeep(audioContext, 400, 0.1, "sine"),
      skip: () => playBeep(audioContext, 200, 0.2, "triangle"),
    }
  
    const soundFunction = sounds[type]
    if (soundFunction) {
      try {
        soundFunction()
      } catch (error) {
        console.log("Audio playback failed:", error)
      }
    }
  }
  
  // Helper function to create beep sounds
  function playBeep(audioContext, frequency, duration, type = "sine") {
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
  
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
  
    oscillator.frequency.value = frequency
    oscillator.type = type
  
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)
  
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + duration)
  }
  
  // Initialize audio context on first user interaction
  let audioInitialized = false
  
  function initializeAudio() {
    if (!audioInitialized) {
      // Create a silent audio context to enable audio
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      if (audioContext.state === "suspended") {
        audioContext.resume()
      }
      audioInitialized = true
    }
  }
  
  // Animate Statistics
  function animateStats() {
    const statNumbers = document.querySelectorAll(".stat-number")
  
    statNumbers.forEach((stat) => {
      const target = Number.parseInt(stat.dataset.count)
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0
  
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        stat.textContent = Math.floor(current)
      }, 16)
    })
  }
  
  function updateTotalPlayers() {
    const totalPlayersElement = document.getElementById("total-players")
    if (totalPlayersElement) {
      const baseCount = 1000
      const additionalPlayers = leaderboard.length
      const total = baseCount + additionalPlayers
      totalPlayersElement.dataset.count = total
    }
  }
  
  // Event Listeners
  function setupEventListeners() {
    // Navigation
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const section = link.dataset.section
  
        switch (section) {
          case "home":
            showWelcome()
            break
          case "categories":
            showCategories()
            break
          case "leaderboard":
            showLeaderboard()
            break
          case "about":
            showAbout()
            break
        }
      })
    })
  
    // Mobile menu toggle
    const navToggle = document.getElementById("nav-toggle")
    const navMenu = document.getElementById("nav-menu")
  
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active")
        navMenu.classList.toggle("active")
      })
    }
  
    // Theme toggle
    const themeToggle = document.getElementById("theme-toggle")
    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme)
    }
  
    // Sound toggle
    const soundToggle = document.getElementById("sound-toggle")
    if (soundToggle) {
      soundToggle.addEventListener("click", toggleSound)
    }
  
    // Difficulty selection
    document.querySelectorAll(".difficulty-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".difficulty-btn").forEach((b) => b.classList.remove("active"))
        btn.classList.add("active")
      })
    })
  
    // Quiz navigation
    const nextButton = document.getElementById("next-button")
    if (nextButton) {
      nextButton.addEventListener("click", nextQuestion)
    }
  
    // Leaderboard filters
    const leaderboardCategory = document.getElementById("leaderboard-category")
    const leaderboardDifficulty = document.getElementById("leaderboard-difficulty")
  
    if (leaderboardCategory) {
      leaderboardCategory.addEventListener("change", populateLeaderboard)
    }
  
    if (leaderboardDifficulty) {
      leaderboardDifficulty.addEventListener("change", populateLeaderboard)
    }
  
    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (document.getElementById("quiz-section").classList.contains("hidden")) return
  
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault()
          previousQuestion()
          break
        case "ArrowRight":
        case "Enter":
          e.preventDefault()
          nextQuestion()
          break
        case "Escape":
          e.preventDefault()
          quitQuiz()
          break
        case "1":
        case "2":
        case "3":
        case "4":
          e.preventDefault()
          const index = Number.parseInt(e.key) - 1
          const option = document.querySelector(`[data-index="${index}"]`)
          if (option) selectAnswer(index)
          break
      }
    })
  
    // Close modal when clicking outside
    document.addEventListener("click", (e) => {
      const modal = document.getElementById("share-modal")
      if (modal && e.target === modal) {
        closeShareModal()
      }
    })
  
    // Initialize audio on first user interaction
    document.addEventListener("click", initializeAudio, { once: true })
    document.addEventListener("keydown", initializeAudio, { once: true })
    document.addEventListener("touchstart", initializeAudio, { once: true })
  }
  
  // Utility Functions
  function shuffleArray(array) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
  
  function arraysEqual(a, b) {
    if (a.length !== b.length) return false
    return a.every((val, index) => val === b[index])
  }
  
  // Add scroll effect to navbar
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    }
  })