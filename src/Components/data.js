export const topics = [
  {
    id: 1,
    name: "ReactJs",
    description:
      "A JavaScript library for building user interfaces, maintained by Facebook.",
  },
  {
    id: 2,
    name: "HTML",
    description:
      "The standard markup language used for creating web pages and web applications.",
  },
  {
    id: 3,
    name: "CSS",
    description:
      "A style sheet language used for describing the presentation of a document written in HTML or XML.",
  },
  {
    id: 4,
    name: "NodeJS",
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine for building fast and scalable network applications.",
  },
  {
    id: 5,
    name: "MongoDB",
    description:
      "A NoSQL database that uses a document-oriented data model and is known for its flexibility and scalability.",
  },
  {
    id: 6,
    name: "ExpressJS",
    description:
      "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
  },
];


export const questions = [
  {
    id: 1,
    name: "ReactJS",
    tags: {
      easy: [
        {
          id: 1,
          question: "What is a component in React?",
          answer:
            "A component is a reusable piece of UI that can be a class or a function.",
        },
        {
          id: 2,
          question: "What is JSX?",
          answer:
            "JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used in React to describe the UI.",
        },
      ],
      medium: [
        {
          id: 3,
          question: "What are hooks in React?",
          answer:
            "Hooks are functions that let you use state and other React features in function components.",
        },
        {
          id: 4,
          question: "What is the useEffect hook used for?",
          answer:
            "The useEffect hook is used to perform side effects in function components, such as fetching data or directly interacting with the DOM.",
        },
        {
          id: 5,
          question: "What is the difference between state and props?",
          answer:
            "State is a local data store that is managed within a component, whereas props are inputs to a component that allow data to be passed from parent to child.",
        },
      ],
      hard: [
        {
          id: 6,
          question: "What is the virtual DOM?",
          answer:
            "The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM using libraries like ReactDOM.",
        },
        {
          id: 7,
          question: "How does React handle reconciliation?",
          answer:
            "Reconciliation is the process through which React updates the DOM by comparing the virtual DOM with the actual DOM and applying the minimal set of changes.",
        },
        {
          id: 8,
          question: "What are React Portals?",
          answer:
            "React Portals allow rendering a component outside of its parent DOM hierarchy, which is useful for modals and overlays.",
        },
        {
          id: 9,
          question: "How do you manage state in a class component?",
          answer:
            "State in a class component is managed using the `this.state` property and updated with `this.setState()`.",
        },
      ],
    },
  },
  {
    id: 2,
    name: "HTML",
    tags: {
      easy: [
        {
          id: 1,
          question: "What does HTML stand for?",
          answer: "HTML stands for HyperText Markup Language.",
        },
        {
          id: 2,
          question: "What is the purpose of the <title> tag in HTML?",
          answer:
            "The <title> tag sets the title of the HTML document, which is displayed in the browser's title bar or tab.",
        },
      ],
      medium: [
        {
          id: 3,
          question: "What is the difference between <div> and <span> tags?",
          answer:
            "<div> is a block-level element used for grouping and styling larger sections of content, while <span> is an inline element used for styling small parts of content within a block-level element.",
        },
        {
          id: 4,
          question:
            "How can you include external CSS files in an HTML document?",
          answer:
            "External CSS files can be included using the <link> tag in the <head> section of the HTML document. Example: <link rel='stylesheet' href='styles.css'>.",
        },
        {
          id: 5,
          question: "What are semantic HTML elements?",
          answer:
            "Semantic HTML elements clearly describe their meaning in a human- and machine-readable way, such as <article>, <footer>, <header>, <section>, and <nav>.",
        },
      ],
      hard: [
        {
          id: 6,
          question: "How do you implement responsive design in HTML?",
          answer:
            "Responsive design is achieved using CSS media queries to adjust styles based on the device’s screen size and using flexible grid layouts and fluid images.",
        },
        {
          id: 7,
          question: "What are HTML data attributes and how are they used?",
          answer:
            "HTML data attributes are used to store extra information on an HTML element, which can be accessed via JavaScript. They are prefixed with 'data-' (e.g., data-info='value').",
        },
        {
          id: 8,
          question:
            "How do you create a form and handle form submissions in HTML?",
          answer:
            "A form is created using the <form> tag. Form submissions can be handled by setting the action attribute to the URL where the form data should be sent, and optionally, the method attribute to specify the HTTP method (GET or POST).",
        },
        {
          id: 9,
          question: "Explain the use of the <template> tag in HTML.",
          answer:
            "The <template> tag holds client-side content that you don't want to be rendered when the page loads. It can be used to create reusable chunks of HTML that can be cloned and inserted into the document using JavaScript.",
        },
      ],
    },
  },
  {
    id: 3,
    name: "CSS",
    tags: {
      easy: [
        {
          id: 1,
          question: "What does CSS stand for?",
          answer: "CSS stands for Cascading Style Sheets.",
        },
        {
          id: 2,
          question: "What is the purpose of the <link> tag in HTML?",
          answer:
            "The <link> tag is used to link external CSS files to an HTML document. Example: <link rel='stylesheet' href='styles.css'>.",
        },
      ],
      medium: [
        {
          id: 3,
          question: "What is the CSS box model?",
          answer:
            "The CSS box model describes how the content, padding, border, and margin of an element are structured and interact with one another.",
        },
        {
          id: 4,
          question: "How do you center a block-level element horizontally?",
          answer:
            "A block-level element can be centered horizontally using margin: auto; and setting a specific width for the element.",
        },
        {
          id: 5,
          question:
            "What is the difference between 'class' and 'id' selectors in CSS?",
          answer:
            "A 'class' selector is reusable and can be applied to multiple elements, while an 'id' selector is unique and should be applied to only one element in the document.",
        },
      ],
      hard: [
        {
          id: 6,
          question: "What is Flexbox and how is it used in CSS?",
          answer:
            "Flexbox is a CSS layout module designed to distribute space and align items in a container. It is used by setting display: flex; on a container element.",
        },
        {
          id: 7,
          question: "How do CSS Grid and Flexbox differ?",
          answer:
            "CSS Grid is a two-dimensional layout system for both columns and rows, while Flexbox is a one-dimensional layout system for either rows or columns. Grid is better for complex layouts, while Flexbox is better for simpler layouts and aligning items in a single direction.",
        },
        {
          id: 8,
          question: "What are CSS pseudo-classes and pseudo-elements?",
          answer:
            "Pseudo-classes are used to define a special state of an element (e.g., :hover), while pseudo-elements are used to style specific parts of an element (e.g., ::before, ::after).",
        },
        {
          id: 9,
          question: "How do you create a CSS animation?",
          answer:
            "CSS animations are created using the @keyframes rule to define the animation sequence and the animation property to apply it to an element.",
        },
      ],
    },
  },
  {
    id: 4,
    name: "NodeJS",
    tags: {
      easy: [
        {
          id: 1,
          question: "What is NodeJS?",
          answer:
            "NodeJS is a runtime environment that allows you to run JavaScript on the server side.",
        },
        {
          id: 2,
          question: "How do you install NodeJS?",
          answer:
            "NodeJS can be installed from the official website by downloading the installer for your operating system.",
        },
      ],
      medium: [
        {
          id: 3,
          question: "How do you handle asynchronous operations in NodeJS?",
          answer:
            "Asynchronous operations in NodeJS can be handled using callbacks, promises, or async/await.",
        },
        {
          id: 4,
          question: "What is the purpose of the Node Package Manager (NPM)?",
          answer:
            "NPM is a package manager for NodeJS that allows you to install and manage packages (libraries) needed for your NodeJS project.",
        },
        {
          id: 5,
          question: "What is an event loop in NodeJS?",
          answer:
            "The event loop is a mechanism that allows NodeJS to perform non-blocking I/O operations, despite JavaScript being single-threaded, by offloading operations to the system kernel whenever possible.",
        },
      ],
      hard: [
        {
          id: 6,
          question: "What is event-driven programming in NodeJS?",
          answer:
            "Event-driven programming in NodeJS is a programming paradigm where the flow of the program is determined by events such as user actions, sensor outputs, or message passing.",
        },
        {
          id: 7,
          question: "How do you manage environments in NodeJS?",
          answer:
            "Environments in NodeJS can be managed using environment variables and tools like dotenv to load them into your application.",
        },
        {
          id: 8,
          question: "What is clustering in NodeJS?",
          answer:
            "Clustering is a technique to create multiple instances of a NodeJS application to take advantage of multi-core systems and improve performance.",
        },
        {
          id: 9,
          question: "Explain NodeJS Streams and their types.",
          answer:
            "NodeJS Streams are objects that let you read data from a source or write data to a destination in a continuous fashion. The types include Readable, Writable, Duplex, and Transform streams.",
        },
      ],
    },
  },
  {
    id: 5,
    name: "MongoDB",
    tags: {
      easy: [
        {
          id: 1,
          question: "What is MongoDB?",
          answer:
            "MongoDB is a NoSQL database that uses a document-oriented data model, storing data in JSON-like documents.",
        },
        {
          id: 2,
          question: "What is a collection in MongoDB?",
          answer:
            "A collection in MongoDB is a group of MongoDB documents, similar to a table in relational databases.",
        },
      ],
      medium: [
        {
          id: 3,
          question: "How do you perform a query in MongoDB?",
          answer:
            "Queries in MongoDB are performed using the `find()` method, which returns documents that match the specified criteria.",
        },
        {
          id: 4,
          question: "What are indexes in MongoDB and why are they used?",
          answer:
            "Indexes in MongoDB improve query performance by allowing faster data retrieval. They work by creating data structures that store a small portion of the data in a way that is quick to search.",
        },
        {
          id: 5,
          question: "How do you update a document in MongoDB?",
          answer:
            "Documents are updated using the `updateOne()` or `updateMany()` methods, which allow you to modify existing documents based on specified criteria.",
        },
      ],
      hard: [
        {
          id: 6,
          question: "What is sharding in MongoDB?",
          answer:
            "Sharding is a method for distributing data across multiple servers to handle large datasets and high throughput operations. It involves partitioning data and distributing it across shards (servers).",
        },
        {
          id: 7,
          question: "Explain the concept of replication in MongoDB.",
          answer:
            "Replication in MongoDB involves copying data from a primary server to one or more secondary servers to ensure data redundancy and high availability. A replica set is a group of MongoDB servers that maintain the same dataset.",
        },
        {
          id: 8,
          question: "What is the Aggregation Framework in MongoDB?",
          answer:
            "The Aggregation Framework is a set of operations that process data records and return computed results. It allows you to perform complex data manipulations and aggregations such as filtering, grouping, and sorting.",
        },
        {
          id: 9,
          question: "How does MongoDB handle data consistency and durability?",
          answer:
            "MongoDB handles data consistency and durability through replica sets, write concerns, and journaling. Replica sets ensure that data is replicated across multiple servers, while write concerns and journaling help ensure that write operations are properly recorded and recoverable.",
        },
      ],
    },
  },
  {
    id: 6,
    name: "ExpressJS",
    tags: {
      easy: [
        {
          id: 1,
          question: "What is ExpressJS?",
          answer:
            "ExpressJS is a web application framework for Node.js that simplifies the creation of server-side applications by providing a robust set of features for building web and mobile applications.",
        },
        {
          id: 2,
          question: "How do you create a new ExpressJS application?",
          answer:
            "You can create a new ExpressJS application by initializing a new Node.js project with `npm init` and then installing Express using `npm install express`. Create an `app.js` file and write your Express code there.",
        },
      ],
      medium: [
        {
          id: 3,
          question: "How do you define routes in ExpressJS?",
          answer:
            "Routes in ExpressJS are defined using the `app.get()`, `app.post()`, `app.put()`, and `app.delete()` methods. Each method specifies the HTTP method and path, and the callback function handles the request and response.",
        },
        {
          id: 4,
          question: "What is middleware in ExpressJS?",
          answer:
            "Middleware in ExpressJS are functions that have access to the request, response, and next middleware function in the application’s request-response cycle. They can modify the request or response objects, end the request-response cycle, or call the next middleware function.",
        },
        {
          id: 5,
          question: "How do you handle errors in ExpressJS?",
          answer:
            "Errors in ExpressJS are handled using error-handling middleware. An error-handling middleware function is defined with four arguments: `err`, `req`, `res`, and `next`. It catches any errors that occur in the application and can send a response to the client.",
        },
      ],
      hard: [
        {
          id: 6,
          question: "Explain how ExpressJS handles asynchronous operations.",
          answer:
            "ExpressJS handles asynchronous operations through the use of asynchronous functions, promises, and callbacks. Middleware and route handlers can be asynchronous, allowing for non-blocking operations such as database queries and file handling.",
        },
        {
          id: 7,
          question:
            "What is the purpose of `req` and `res` objects in ExpressJS?",
          answer:
            "The `req` (request) object represents the HTTP request and contains properties such as headers, body, and query parameters. The `res` (response) object represents the HTTP response and provides methods to send data back to the client, such as `res.send()`, `res.json()`, and `res.render()`.",
        },
        {
          id: 8,
          question: "How do you set up a RESTful API using ExpressJS?",
          answer:
            "A RESTful API in ExpressJS is set up by defining routes that correspond to different HTTP methods (GET, POST, PUT, DELETE) and endpoints. Each route handler performs operations such as reading from or writing to a database and sending responses to clients.",
        },
        {
          id: 9,
          question:
            "What are the differences between `app.use()` and `app.all()` in ExpressJS?",
          answer:
            "`app.use()` is used to mount middleware functions that are executed for all routes or specific paths, while `app.all()` is used to handle all HTTP methods for a specific route or path. `app.use()` is typically used for middleware, while `app.all()` is used for route handling.",
        },
      ],
    },
  },
];
