import React from "react";
import Toast from "react-native-toast-message";

export const showToast = (data) => {
  Toast.show({
    type: data.type,
    text1: data.title,
    text2: data.message,
    keyboardOffset: 70,
    position: data.position,
  });
};

export const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const allQuestions = [
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["<css>", "<script>", "<style>", "<link>"],
    correctAnswer: 2,
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which company developed the Java programming language?",
    answers: ["Microsoft", "Sun Microsystems", "Oracle", "IBM"],
    correctAnswer: 1,
  },
  {
    question: "What does AI stand for?",
    answers: [
      "Artificial Intelligence",
      "Apple Intelligence",
      "Augmented Insight",
      "Artificial Insight",
    ],
    correctAnswer: 0,
  },
  {
    question: "In Python, how do you insert comments in code?",
    answers: [
      "// This is a comment",
      "# This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: ["class", "style", "font", "styles"],
    correctAnswer: 1,
  },
  {
    question: "What does JSON stand for?",
    answers: [
      "JavaScript Object Notation",
      "JavaScript Online Notation",
      "JavaScript 1st Son",
      "Java Source Object Notation",
    ],
    correctAnswer: 0,
  },
  {
    question: "In HTML, what does the <a> tag stand for?",
    answers: ["Audio", "Anchor", "Article", "Alert"],
    correctAnswer: 1,
  },
  {
    question: "Which algorithm is used by Google Search?",
    answers: ["PageRank", "MapReduce", "SHA-256", "RSA"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary function of a web server?",
    answers: [
      "To manage databases",
      "To store files",
      "To serve web pages",
      "To secure network traffic",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which language is primarily used for web development?",
    answers: ["JavaScript", "Python", "C++", "Java"],
    correctAnswer: 0,
  },
  {
    question: "What does SQL stand for?",
    answers: [
      "Structured Query Language",
      "Structured Question Language",
      "Simple Query Language",
      "Simple Question Language",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the use of the 'alt' attribute in HTML?",
    answers: [
      "To specify alternative text for an image",
      "To change the text color",
      "To create hyperlinks",
      "To set the alignment of text",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which protocol is used to transfer web pages?",
    answers: ["HTTP", "FTP", "SMTP", "SNMP"],
    correctAnswer: 0,
  },
  {
    question: "What is React primarily used for?",
    answers: [
      "Building mobile apps",
      "Building server-side applications",
      "Building user interfaces",
      "Building databases",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which HTML tag is used for creating a dropdown list?",
    answers: ["<select>", "<dropdown>", "<list>", "<option>"],
    correctAnswer: 0,
  },
  {
    question: "What does API stand for?",
    answers: [
      "Application Programming Interface",
      "Applied Programming Interface",
      "Advanced Programming Interface",
      "Application Performance Interface",
    ],
    correctAnswer: 0,
  },
  {
    question: "In CSS, what does 'font-size' control?",
    answers: [
      "The size of the font",
      "The style of the font",
      "The color of the font",
      "The weight of the font",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which command is used to initialize a new Git repository?",
    answers: ["git init", "git start", "git new", "git create"],
    correctAnswer: 0,
  },
  {
    question: "What is the default port for HTTP?",
    answers: ["80", "443", "22", "8080"],
    correctAnswer: 0,
  },
  {
    question: "What does DOM stand for?",
    answers: [
      "Document Object Model",
      "Data Object Model",
      "Document Order Model",
      "Data Order Model",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is Bootstrap primarily used for?",
    answers: [
      "Server-side scripting",
      "Database management",
      "Front-end web development",
      "Back-end web development",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which JavaScript framework is developed by Facebook?",
    answers: ["React", "Angular", "Vue", "Svelte"],
    correctAnswer: 0,
  },
  {
    question: "What does SEO stand for?",
    answers: [
      "Search Engine Optimization",
      "Secure Email Optimization",
      "Simple Email Optimization",
      "Search Engine Operation",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used for the largest heading?",
    answers: ["<h1>", "<heading>", "<header>", "<h6>"],
    correctAnswer: 0,
  },
  {
    question: "What is the use of 'margin' in CSS?",
    answers: [
      "To add space around elements",
      "To add space inside elements",
      "To set the background color",
      "To set the font size",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does SQL stand for?",
    answers: [
      "Structured Query Language",
      "Structured Question Language",
      "Simple Query Language",
      "Simple Question Language",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which Python function is used to get user input?",
    answers: ["input()", "get_input()", "get()", "read()"],
    correctAnswer: 0,
  },
  {
    question: "What is the extension of JavaScript files?",
    answers: [".js", ".java", ".jsx", ".json"],
    correctAnswer: 0,
  },
  {
    question:
      "Which HTTP method is used to submit data to be processed to a specified resource?",
    answers: ["POST", "GET", "PUT", "DELETE"],
    correctAnswer: 0,
  },
  {
    question: "What does the CSS 'float' property do?",
    answers: [
      "Positions an element to the left or right",
      "Changes the element's opacity",
      "Sets the element's display type",
      "Defines the element's border",
    ],
    correctAnswer: 0,
  },
  {
    question: "In Git, what is a branch?",
    answers: [
      "A lightweight movable pointer to a commit",
      "A separate directory for project files",
      "A command to merge changes",
      "A backup of the repository",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which programming language is primarily used for Android development?",
    answers: ["Java", "Swift", "C#", "Python"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of 'npm' in Node.js?",
    answers: [
      "To manage project dependencies",
      "To run the server",
      "To create databases",
      "To compile code",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to change the text color?",
    answers: ["color", "font-color", "text-color", "font"],
    correctAnswer: 0,
  },
  {
    question: "What does 'HTML' stand for?",
    answers: [
      "HyperText Markup Language",
      "HyperText Machine Language",
      "HyperText Main Language",
      "Hyperlink Text Markup Language",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which HTML element is used to display a scalar measurement within a range?",
    answers: ["<meter>", "<gauge>", "<range>", "<measure>"],
    correctAnswer: 0,
  },
  {
    question: "What is an API endpoint?",
    answers: [
      "A specific URL where an API can be accessed",
      "A function in the API",
      "A database in the API",
      "A server running the API",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which Python keyword is used to define a function?",
    answers: ["def", "function", "func", "define"],
    correctAnswer: 0,
  },
  {
    question:
      "Which CSS property is used to set the spacing between lines of text?",
    answers: ["line-height", "spacing", "text-spacing", "line-spacing"],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a table row?",
    answers: ["<tr>", "<td>", "<th>", "<table>"],
    correctAnswer: 0,
  },
  {
    question: "What does 'HTTP' stand for?",
    answers: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Protocol",
      "Hyperlink Transfer Protocol",
      "Hyperlink Transmission Protocol",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which JavaScript function is used to parse a string to an integer?",
    answers: ["parseInt()", "toInteger()", "parseInteger()", "intParse()"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'alt' attribute in HTML?",
    answers: [
      "To provide alternative text for an image",
      "To set the image alignment",
      "To create a hyperlink",
      "To change the image size",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which language is primarily used for styling web pages?",
    answers: ["CSS", "HTML", "JavaScript", "Python"],
    correctAnswer: 0,
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    answers: ["404", "200", "500", "301"],
    correctAnswer: 0,
  },
  {
    question: "What is the use of 'padding' in CSS?",
    answers: [
      "To add space inside an element",
      "To add space around an element",
      "To change the background color",
      "To change the text size",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the default file extension for a React component?",
    answers: [".js", ".jsx", ".ts", ".tsx"],
    correctAnswer: 0,
  },
  {
    question:
      "Which method is used to add an element at the end of an array in JavaScript?",
    answers: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary use of 'Docker'?",
    answers: [
      "To create containers for applications",
      "To manage databases",
      "To develop mobile apps",
      "To compile code",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a list item?",
    answers: ["<li>", "<ul>", "<ol>", "<item>"],
    correctAnswer: 0,
  },
  {
    question: "What does 'URL' stand for?",
    answers: [
      "Uniform Resource Locator",
      "Uniform Resource Link",
      "Universal Resource Locator",
      "Universal Resource Link",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'flex' property in CSS?",
    answers: [
      "To create flexible layouts",
      "To set the font size",
      "To change the background color",
      "To add spacing between elements",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which Python keyword is used to create a class?",
    answers: ["class", "define", "create", "new"],
    correctAnswer: 0,
  },
  {
    question: "What does 'AJAX' stand for?",
    answers: [
      "Asynchronous JavaScript and XML",
      "Asynchronous JavaScript and XHTML",
      "Asynchronous Java and XML",
      "Asynchronous JavaScript and XSLT",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which command is used to clone a Git repository?",
    answers: ["git clone", "git pull", "git fetch", "git copy"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of 'Redux' in React applications?",
    answers: [
      "To manage state",
      "To create components",
      "To handle routing",
      "To compile code",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to set the background color?",
    answers: ["background-color", "color", "background", "bg-color"],
    correctAnswer: 0,
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    answers: [
      "The current object",
      "The global object",
      "The parent object",
      "The window object",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a hyperlink?",
    answers: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: 0,
  },
  {
    question: "Which HTTP method is used to retrieve data from a server?",
    answers: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of 'babel' in JavaScript?",
    answers: [
      "To transpile ES6+ code to ES5",
      "To compile code",
      "To manage packages",
      "To run the server",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which Python library is used for data analysis?",
    answers: ["Pandas", "NumPy", "SciPy", "Matplotlib"],
    correctAnswer: 0,
  },
  {
    question: "What does the 'DOCTYPE' declaration in HTML do?",
    answers: [
      "Specifies the document type and version",
      "Sets the document title",
      "Links to external stylesheets",
      "Defines the character encoding",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to change the text color?",
    answers: ["color", "font-color", "text-color", "font"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of 'Node.js'?",
    answers: [
      "To run JavaScript on the server side",
      "To manage databases",
      "To style web pages",
      "To create mobile apps",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to create an unordered list?",
    answers: ["<ul>", "<ol>", "<li>", "<list>"],
    correctAnswer: 0,
  },
  {
    question: "What does 'JSON' stand for?",
    answers: [
      "JavaScript Object Notation",
      "JavaScript Online Notation",
      "JavaScript 1st Son",
      "Java Source Object Notation",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which Python function is used to get the length of a list?",
    answers: ["len()", "length()", "size()", "count()"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of 'Git'?",
    answers: [
      "To version control code",
      "To run JavaScript on the server side",
      "To manage databases",
      "To compile code",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to set the text alignment?",
    answers: ["text-align", "alignment", "text-align", "align"],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to display an image?",
    answers: ["<img>", "<image>", "<pic>", "<figure>"],
    correctAnswer: 0,
  },
  {
    question: "What does the 'head' tag in HTML contain?",
    answers: [
      "Metadata about the document",
      "The main content of the document",
      "Scripts and styles",
      "Links to external resources",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which command is used to stage changes in Git?",
    answers: ["git add", "git commit", "git push", "git merge"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of 'JavaScript'?",
    answers: [
      "To add interactivity to web pages",
      "To style web pages",
      "To manage databases",
      "To compile code",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a paragraph?",
    answers: ["<p>", "<para>", "<paragraph>", "<pg>"],
    correctAnswer: 0,
  },
  {
    question: "What is the default file extension for a TypeScript file?",
    answers: [".ts", ".js", ".jsx", ".tsx"],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to set the font size?",
    answers: ["font-size", "font", "text-size", "size"],
    correctAnswer: 0,
  },
  {
    question: "What does the 'return' keyword do in a function?",
    answers: [
      "Exits the function and returns a value",
      "Defines a function",
      "Calls a function",
      "Ends a loop",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a form?",
    answers: ["<form>", "<input>", "<button>", "<field>"],
    correctAnswer: 0,
  },
  {
    question: "What does the 'h1' tag in HTML represent?",
    answers: ["The largest heading", "A paragraph", "An image", "A hyperlink"],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to set the background image?",
    answers: ["background-image", "background", "image", "bg-image"],
    correctAnswer: 0,
  },
  {
    question: "What does the 'body' tag in HTML contain?",
    answers: [
      "The main content of the document",
      "Metadata about the document",
      "Scripts and styles",
      "Links to external resources",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which command is used to merge branches in Git?",
    answers: ["git merge", "git pull", "git push", "git fetch"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of 'CSS'?",
    answers: [
      "To style web pages",
      "To add interactivity to web pages",
      "To manage databases",
      "To compile code",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a table?",
    answers: ["<table>", "<tr>", "<td>", "<th>"],
    correctAnswer: 0,
  },
  {
    question: "What does the 'title' tag in HTML define?",
    answers: [
      "The title of the document",
      "The main content of the document",
      "A heading",
      "A paragraph",
    ],
    correctAnswer: 0,
  },
];

export const getRandomQuestions = (numQuestions) => {
  const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, numQuestions);
};

export function getQuizResultMessage(totalQuestions, correctAnswers) {
  const score = (correctAnswers / totalQuestions) * 100;

  const messages = [
    {
      range: [0, 19],
      title: "You Failed",
      text: "Don't be discouraged\nkeep practicing and try again.",
    },
    {
      range: [20, 39],
      title: "Keep Trying",
      text: "You're making progress, but there's still room for improvement.",
    },
    {
      range: [40, 59],
      title: "Getting There",
      text: "Good job! You're on the right track.",
    },
    {
      range: [60, 79],
      title: "Good Job",
      text: "Well done! You have a good grasp of the material.",
    },
    {
      range: [80, 89],
      title: "Great Work",
      text: "Excellent! Your hard work is paying off.",
    },
    {
      range: [90, 100],
      title: "Outstanding!",
      text: "Fantastic! You've mastered the material.",
    },
  ];
  const resultMessage = messages.find(
    (msg) => score >= msg.range[0] && score <= msg.range[1]
  );

  return {
    title: resultMessage.title,
    text: resultMessage.text,
    failed: score < 50 ? true : false,
  };
}

export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
