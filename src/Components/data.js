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
export const newquestions = [
  {
    id: 1,
    name: "React Basics",
    tags: {
      coreReact: [
        {
          id: 1,
          question: "What is React?",
          answer: "A JavaScript library for building user interfaces.",
          code: "const element = <h1>Hello, world!</h1>;",
        },
        {
          id: 2,
          question: "What is JSX?",
          answer:
            "A syntax extension for JavaScript that looks similar to XML.",
          code: "const element = <div>Hello, JSX!</div>;",
        },
      ],
      reactRouter: [
        {
          id: 1,
          question: "What is React Router?",
          answer: "A library for routing in React applications.",
          code: "import { BrowserRouter as Router, Route } from 'react-router-dom';",
        },
        {
          id: 2,
          question: "How do you create a route in React Router?",
          answer:
            "You create a route using the Route component with a path and a component.",
          code: "<Route path='/about' component={About} />",
        },
      ],
      stateManagement: [
        {
          id: 1,
          question: "What is state in React?",
          answer:
            "State is an object that determines how that component renders and behaves.",
          code: "const [count, setCount] = useState(0);",
        },
        {
          id: 2,
          question: "What is the purpose of useEffect?",
          answer:
            "useEffect is a Hook that lets you perform side effects in function components.",
          code: "useEffect(() => { document.title = `Count: ${count}`; }, [count]);",
        },
      ],
      hooks: [
        {
          id: 1,
          question: "What are React Hooks?",
          answer:
            "Hooks are functions that let you use state and other React features without writing a class.",
          code: "const [state, setState] = useState(initialState);",
        },
        {
          id: 2,
          question: "What is the useCallback Hook?",
          answer: "useCallback returns a memoized callback function.",
          code: "const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);",
        },
      ],
      contextAPI: [
        {
          id: 1,
          question: "What is the Context API?",
          answer:
            "The Context API is a way to create global state in a React application.",
          code: "const MyContext = createContext();",
        },
        {
          id: 2,
          question: "How do you use the Context API?",
          answer:
            "You use the Context API by creating a context and wrapping components in a Provider.",
          code: "<MyContext.Provider value={/* some value */}><App /></MyContext.Provider>",
        },
      ],
    },
  },
  // Other topics can be added here...
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
        {
          id: 3,
          question:
            "What is the difference between a functional and class component?",
          answer:
            "A functional component is a simpler component that is written as a function, while a class component is written as a class and provides more features like state and lifecycle methods.",
        },
        {
          id: 4,
          question: "What is the role of props in React?",
          answer:
            "Props are inputs to a React component that are passed from a parent component and are immutable within the component.",
        },
        {
          id: 5,
          question: "What is the purpose of the ReactDOM library?",
          answer:
            "ReactDOM provides methods to interact with the DOM in React applications, such as rendering components.",
        },
        {
          id: 6,
          question: "How do you create a React component?",
          answer:
            "A React component can be created using a function or a class that returns JSX elements.",
        },
        {
          id: 7,
          question: "What is the use of keys in React?",
          answer:
            "Keys are used in React to help identify which items in a list have changed, are added, or removed, and they help optimize the rendering of lists.",
        },
        {
          id: 8,
          question: "What are React fragments?",
          answer:
            "React fragments let you group multiple elements without adding extra nodes to the DOM.",
        },
        {
          id: 9,
          question: "How can you conditionally render elements in React?",
          answer:
            "Conditional rendering in React can be done using JavaScript conditional operators like if/else, ternary operators, or logical &&.",
        },
        {
          id: 10,
          question: "What is the use of the render method in class components?",
          answer:
            "The render method in class components is used to describe what the UI should look like by returning a JSX element.",
        },
      ],
      medium: [
        {
          id: 1,
          question: "What are hooks in React?",
          answer:
            "Hooks are functions that let you use state and other React features in function components.",
        },
        {
          id: 2,
          question: "What is the useEffect hook used for?",
          answer:
            "The useEffect hook is used to perform side effects in function components, such as fetching data or directly interacting with the DOM.",
        },
        {
          id: 3,
          question: "What is the difference between state and props?",
          answer:
            "State is a local data store that is managed within a component, whereas props are inputs to a component that allow data to be passed from parent to child.",
        },
        {
          id: 4,
          question: "What is the useState hook?",
          answer:
            "The useState hook allows you to add state to function components, providing a way to manage local state.",
        },
        {
          id: 5,
          question: "How does React handle form inputs?",
          answer:
            "React handles form inputs by using controlled components where form data is managed by the component state.",
        },
        {
          id: 6,
          question: "What is prop drilling and how can it be avoided?",
          answer:
            "Prop drilling is the process of passing props through multiple levels of a component tree. It can be avoided using context or state management libraries like Redux.",
        },
        {
          id: 7,
          question: "How does React optimize performance?",
          answer:
            "React optimizes performance by minimizing the number of DOM updates using the virtual DOM and by providing tools like memoization (React.memo) and lazy loading.",
        },
        {
          id: 8,
          question: "What is the purpose of the useReducer hook?",
          answer:
            "The useReducer hook is used to manage complex state logic in function components, similar to how a reducer function works in Redux.",
        },
        {
          id: 9,
          question: "What is context API in React?",
          answer:
            "The Context API is used to share state across multiple components without passing props down manually at every level.",
        },
        {
          id: 10,
          question: "How do you handle errors in React components?",
          answer:
            "Errors in React components can be handled using error boundaries, which catch JavaScript errors in their child components and display a fallback UI.",
        },
      ],
      hard: [
        {
          id: 1,
          question: "What is the virtual DOM?",
          answer:
            "The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM using libraries like ReactDOM.",
        },
        {
          id: 2,
          question: "How does React handle reconciliation?",
          answer:
            "Reconciliation is the process through which React updates the DOM by comparing the virtual DOM with the actual DOM and applying the minimal set of changes.",
        },
        {
          id: 3,
          question: "What are React Portals?",
          answer:
            "React Portals allow rendering a component outside of its parent DOM hierarchy, which is useful for modals and overlays.",
        },
        {
          id: 4,
          question: "How do you manage state in a class component?",
          answer:
            "State in a class component is managed using the `this.state` property and updated with `this.setState()`.",
        },
        {
          id: 5,
          question: "What are higher-order components (HOCs) in React?",
          answer:
            "Higher-order components are functions that take a component and return a new component, allowing for code reuse across multiple components.",
        },
        {
          id: 6,
          question:
            "What is the difference between controlled and uncontrolled components?",
          answer:
            "Controlled components are components where React controls the form elements' values through state, while uncontrolled components manage their own state internally with refs.",
        },
        {
          id: 7,
          question: "What is the significance of key prop in lists?",
          answer:
            "The key prop in lists helps React identify which items have changed, been added, or removed, improving the efficiency of the rendering process.",
        },
        {
          id: 8,
          question: "How does server-side rendering (SSR) work in React?",
          answer:
            "Server-side rendering involves rendering the initial HTML content of a React application on the server, which is then sent to the client. This improves the perceived load time and SEO.",
        },
        {
          id: 9,
          question: "How do you optimize React applications for performance?",
          answer:
            "Performance optimization in React includes techniques like code splitting, lazy loading, memoization, and avoiding unnecessary re-renders by using React.memo or shouldComponentUpdate.",
        },
        {
          id: 10,
          question: "What is the use of the useMemo hook?",
          answer:
            "The useMemo hook is used to memoize expensive calculations, re-computing them only when their dependencies change, thus improving performance.",
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
        {
          id: 3,
          question: "What is the function of the <meta> tag in HTML?",
          answer:
            "The <meta> tag provides metadata about the HTML document, such as the character set, viewport settings, or author information.",
        },
        {
          id: 4,
          question: "What is the use of the <img> tag in HTML?",
          answer:
            "The <img> tag is used to embed images in an HTML document. It requires the src attribute to specify the image source and the alt attribute for alternative text.",
        },
        {
          id: 5,
          question: "How do you create a hyperlink in HTML?",
          answer:
            "A hyperlink is created using the <a> tag with the href attribute pointing to the destination URL. Example: <a href='https://www.example.com'>Link</a>.",
        },
        {
          id: 6,
          question: "What does the <br> tag do in HTML?",
          answer:
            "The <br> tag is used to insert a line break within text, creating a new line without starting a new paragraph.",
        },
        {
          id: 7,
          question: "What is the <head> section in an HTML document?",
          answer:
            "The <head> section contains meta-information about the document, such as the title, links to stylesheets, and scripts.",
        },
        {
          id: 8,
          question: "What is the purpose of the <body> tag?",
          answer:
            "The <body> tag contains all the visible content of an HTML document, such as text, images, links, and other elements.",
        },
        {
          id: 9,
          question: "How do you add comments in HTML?",
          answer:
            "Comments in HTML are added using <!-- Comment text here -->. They are not displayed in the browser and are used to add notes or explanations within the code.",
        },
        {
          id: 10,
          question: "What is the <p> tag used for in HTML?",
          answer:
            "The <p> tag is used to define a paragraph in HTML. It automatically adds space before and after the content.",
        },
      ],
      medium: [
        {
          id: 1,
          question: "What is the difference between <div> and <span> tags?",
          answer:
            "<div> is a block-level element used for grouping and styling larger sections of content, while <span> is an inline element used for styling small parts of content within a block-level element.",
        },
        {
          id: 2,
          question:
            "How can you include external CSS files in an HTML document?",
          answer:
            "External CSS files can be included using the <link> tag in the <head> section of the HTML document. Example: <link rel='stylesheet' href='styles.css'>.",
        },
        {
          id: 3,
          question: "What are semantic HTML elements?",
          answer:
            "Semantic HTML elements clearly describe their meaning in a human- and machine-readable way, such as <article>, <footer>, <header>, <section>, and <nav>.",
        },
        {
          id: 4,
          question:
            "How do you create an unordered list and an ordered list in HTML?",
          answer:
            "An unordered list is created using the <ul> tag with <li> elements for each item. An ordered list uses the <ol> tag with <li> elements. Example: <ul><li>Item</li></ul> and <ol><li>Item</li></ol>.",
        },
        {
          id: 5,
          question: "What is the purpose of the <header> and <footer> tags?",
          answer:
            "The <header> tag defines the top section of a document, typically containing navigation, logos, or titles. The <footer> tag defines the bottom section, often containing copyright information, links, or contact details.",
        },
        {
          id: 6,
          question: "How do you create a table in HTML?",
          answer:
            "A table is created using the <table> tag, with <tr> elements for rows, <th> for headers, and <td> for data cells. Example: <table><tr><th>Header</th><td>Data</td></tr></table>.",
        },
        {
          id: 7,
          question: "What is the <iframe> tag used for in HTML?",
          answer:
            "The <iframe> tag is used to embed another HTML document within the current document. It requires the src attribute to specify the URL of the document to embed.",
        },
        {
          id: 8,
          question: "How do you create a dropdown list in HTML?",
          answer:
            "A dropdown list is created using the <select> tag with <option> elements for each item. Example: <select><option>Option 1</option><option>Option 2</option></select>.",
        },
        {
          id: 9,
          question:
            "What is the difference between an inline and block-level element?",
          answer:
            "An inline element does not start on a new line and only takes up as much width as necessary, while a block-level element starts on a new line and takes up the full width available.",
        },
        {
          id: 10,
          question:
            "How do you create an anchor link to a specific part of a page?",
          answer:
            "An anchor link is created by giving an element an id attribute and then using a link with a hash symbol (#) followed by the id. Example: <a href='#section'>Go to Section</a> and <h2 id='section'>Section</h2>.",
        },
      ],
      hard: [
        {
          id: 1,
          question: "How do you implement responsive design in HTML?",
          answer:
            "Responsive design is achieved using CSS media queries to adjust styles based on the device’s screen size and using flexible grid layouts and fluid images.",
        },
        {
          id: 2,
          question: "What are HTML data attributes and how are they used?",
          answer:
            "HTML data attributes are used to store extra information on an HTML element, which can be accessed via JavaScript. They are prefixed with 'data-' (e.g., data-info='value').",
        },
        {
          id: 3,
          question:
            "How do you create a form and handle form submissions in HTML?",
          answer:
            "A form is created using the <form> tag. Form submissions can be handled by setting the action attribute to the URL where the form data should be sent, and optionally, the method attribute to specify the HTTP method (GET or POST).",
        },
        {
          id: 4,
          question: "Explain the use of the <template> tag in HTML.",
          answer:
            "The <template> tag holds client-side content that you don't want to be rendered when the page loads. It can be used to create reusable chunks of HTML that can be cloned and inserted into the document using JavaScript.",
        },
        {
          id: 5,
          question:
            "What is the difference between <script> and <noscript> tags?",
          answer:
            "The <script> tag is used to embed or reference JavaScript code, while the <noscript> tag defines content to be displayed when the browser does not support JavaScript or has it disabled.",
        },
        {
          id: 6,
          question: "How do you use the <picture> tag for responsive images?",
          answer:
            "The <picture> tag is used to define multiple sources for an image, allowing the browser to select the most appropriate one based on the screen size, resolution, or other factors.",
        },
        {
          id: 7,
          question: "What is the purpose of the <canvas> tag in HTML?",
          answer:
            "The <canvas> tag is used to draw graphics on the fly via JavaScript. It provides an area where you can use JavaScript to render visual content such as shapes, images, and text.",
        },
        {
          id: 8,
          question: "How do you include inline SVGs in an HTML document?",
          answer:
            "Inline SVGs can be included directly in HTML using the <svg> tag. This allows for easy manipulation and styling of SVG elements with CSS and JavaScript.",
        },
        {
          id: 9,
          question: "How do you handle accessibility in HTML?",
          answer:
            "Accessibility in HTML is handled by using semantic elements, providing alternative text for images, using ARIA roles, labels, and properties, and ensuring proper tab navigation.",
        },
        {
          id: 10,
          question: "What are web workers and how are they used?",
          answer:
            "Web workers are a feature that allows running JavaScript code in the background, on a separate thread from the main execution thread, to avoid blocking the user interface.",
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
        {
          id: 3,
          question: "How do you change the background color of an element?",
          answer:
            "The background color of an element can be changed using the background-color property in CSS. Example: background-color: blue;",
        },
        {
          id: 4,
          question:
            "What is the difference between inline and block elements in CSS?",
          answer:
            "Inline elements take up only as much width as necessary and do not start on a new line, while block elements take up the full width available and start on a new line.",
        },
        {
          id: 5,
          question: "How do you make text bold in CSS?",
          answer:
            "Text can be made bold using the font-weight property in CSS. Example: font-weight: bold;",
        },
        {
          id: 6,
          question: "What is the use of the 'color' property in CSS?",
          answer:
            "The 'color' property in CSS is used to set the color of the text within an element. Example: color: red;",
        },
        {
          id: 7,
          question: "How do you add a border to an element in CSS?",
          answer:
            "A border can be added to an element using the border property in CSS. Example: border: 1px solid black;",
        },
        {
          id: 8,
          question: "What is the use of the 'padding' property in CSS?",
          answer:
            "The 'padding' property is used to create space inside an element, between the content and the border. Example: padding: 10px;",
        },
        {
          id: 9,
          question: "What does 'margin' do in CSS?",
          answer:
            "The 'margin' property creates space outside an element, pushing other elements away. Example: margin: 10px;",
        },
        {
          id: 10,
          question: "How do you change the font size of an element in CSS?",
          answer:
            "The font size of an element can be changed using the font-size property in CSS. Example: font-size: 16px;",
        },
      ],
      medium: [
        {
          id: 1,
          question: "What is the CSS box model?",
          answer:
            "The CSS box model describes how the content, padding, border, and margin of an element are structured and interact with one another.",
        },
        {
          id: 2,
          question: "How do you center a block-level element horizontally?",
          answer:
            "A block-level element can be centered horizontally using margin: auto; and setting a specific width for the element.",
        },
        {
          id: 3,
          question:
            "What is the difference between 'class' and 'id' selectors in CSS?",
          answer:
            "A 'class' selector is reusable and can be applied to multiple elements, while an 'id' selector is unique and should be applied to only one element in the document.",
        },
        {
          id: 4,
          question:
            "How do you select an element with a specific class in CSS?",
          answer:
            "An element with a specific class can be selected using the dot (.) notation in CSS. Example: .classname { /* styles */ }",
        },
        {
          id: 5,
          question:
            "What is the difference between 'absolute' and 'relative' positioning in CSS?",
          answer:
            "Absolute positioning removes an element from the normal document flow and positions it relative to its nearest positioned ancestor, while relative positioning keeps an element in the normal flow but offsets it relative to its normal position.",
        },
        {
          id: 6,
          question: "How do you create a CSS hover effect?",
          answer:
            "A CSS hover effect is created using the :hover pseudo-class. Example: a:hover { color: blue; }",
        },
        {
          id: 7,
          question: "What are media queries in CSS?",
          answer:
            "Media queries are used to apply different styles to a website depending on the device's characteristics, such as screen size or resolution. Example: @media (max-width: 600px) { /* styles */ }",
        },
        {
          id: 8,
          question: "What is the purpose of the z-index property in CSS?",
          answer:
            "The z-index property controls the stacking order of elements that overlap. Higher z-index values are placed in front of elements with lower values.",
        },
        {
          id: 9,
          question: "How do you apply a shadow to an element in CSS?",
          answer:
            "A shadow can be applied to an element using the box-shadow property in CSS. Example: box-shadow: 2px 2px 5px gray;",
        },
        {
          id: 10,
          question: "What is the difference between margin and padding in CSS?",
          answer:
            "Margin is the space outside an element's border, while padding is the space inside the element's border, between the content and the border.",
        },
      ],
      hard: [
        {
          id: 1,
          question: "What is Flexbox and how is it used in CSS?",
          answer:
            "Flexbox is a CSS layout module designed to distribute space and align items in a container. It is used by setting display: flex; on a container element.",
        },
        {
          id: 2,
          question: "How do CSS Grid and Flexbox differ?",
          answer:
            "CSS Grid is a two-dimensional layout system for both columns and rows, while Flexbox is a one-dimensional layout system for either rows or columns. Grid is better for complex layouts, while Flexbox is better for simpler layouts and aligning items in a single direction.",
        },
        {
          id: 3,
          question: "What are CSS pseudo-classes and pseudo-elements?",
          answer:
            "Pseudo-classes are used to define a special state of an element (e.g., :hover), while pseudo-elements are used to style specific parts of an element (e.g., ::before, ::after).",
        },
        {
          id: 4,
          question: "How do you create a CSS animation?",
          answer:
            "CSS animations are created using the @keyframes rule to define the animation sequence and the animation property to apply it to an element.",
        },
        {
          id: 5,
          question: "How do you use CSS variables?",
          answer:
            "CSS variables, or custom properties, are defined using the --syntax and can be reused throughout the stylesheet. Example: --main-color: #333; color: var(--main-color);",
        },
        {
          id: 6,
          question: "What is the purpose of the transform property in CSS?",
          answer:
            "The transform property allows you to rotate, scale, skew, or translate an element. Example: transform: rotate(45deg);",
        },
        {
          id: 7,
          question: "How do you create a responsive layout using CSS Grid?",
          answer:
            "A responsive layout using CSS Grid is created by defining grid-template-columns with relative units like percentages or fr and using media queries to adjust the layout for different screen sizes.",
        },
        {
          id: 8,
          question:
            "What is the difference between 'em' and 'rem' units in CSS?",
          answer:
            "'em' units are relative to the font-size of the parent element, while 'rem' units are relative to the root element's font size, usually <html>.",
        },
        {
          id: 9,
          question: "How do you create a sticky element in CSS?",
          answer:
            "A sticky element is created by setting position: sticky; and defining top, bottom, left, or right values. It sticks to its position relative to its nearest scrollable ancestor.",
        },
        {
          id: 10,
          question: "What is the purpose of the clip-path property in CSS?",
          answer:
            "The clip-path property is used to define a visible area of an element by clipping it to a specific shape. Example: clip-path: circle(50%);",
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
        {
          id: 3,
          question: "What is the command to check the NodeJS version?",
          answer:
            "The command to check the NodeJS version is `node -v` or `node --version`.",
        },
        {
          id: 4,
          question: "What is a package.json file in NodeJS?",
          answer:
            "A package.json file contains metadata about a NodeJS project and its dependencies, scripts, and configurations.",
        },
        {
          id: 5,
          question: "How do you initialize a NodeJS project?",
          answer:
            "You can initialize a NodeJS project using the `npm init` command, which creates a package.json file.",
        },
        {
          id: 6,
          question: "How do you start a NodeJS server?",
          answer:
            "A NodeJS server can be started by creating an HTTP server with the `http` module and listening on a specific port.",
        },
        {
          id: 7,
          question: "What is the purpose of the 'require' function in NodeJS?",
          answer:
            "The 'require' function is used to import modules or files into a NodeJS application.",
        },
        {
          id: 8,
          question: "How do you install a NodeJS package?",
          answer:
            "You can install a NodeJS package using the `npm install package-name` command.",
        },
        {
          id: 9,
          question: "What is the purpose of the 'exports' object in NodeJS?",
          answer:
            "The 'exports' object is used to expose functions, objects, or variables from a module so they can be accessed in other files.",
        },
        {
          id: 10,
          question: "How do you uninstall a NodeJS package?",
          answer:
            "You can uninstall a NodeJS package using the `npm uninstall package-name` command.",
        },
      ],
      medium: [
        {
          id: 1,
          question: "How do you handle asynchronous operations in NodeJS?",
          answer:
            "Asynchronous operations in NodeJS can be handled using callbacks, promises, or async/await.",
        },
        {
          id: 2,
          question: "What is the purpose of the Node Package Manager (NPM)?",
          answer:
            "NPM is a package manager for NodeJS that allows you to install and manage packages (libraries) needed for your NodeJS project.",
        },
        {
          id: 3,
          question: "What is an event loop in NodeJS?",
          answer:
            "The event loop is a mechanism that allows NodeJS to perform non-blocking I/O operations, despite JavaScript being single-threaded, by offloading operations to the system kernel whenever possible.",
        },
        {
          id: 4,
          question: "What is middleware in NodeJS?",
          answer:
            "Middleware is a function that processes requests and responses in an Express application. It can perform operations like authentication, logging, or data processing.",
        },
        {
          id: 5,
          question: "How do you handle errors in NodeJS?",
          answer:
            "Errors in NodeJS can be handled using try-catch blocks, error-first callbacks, or by passing errors to the next middleware function in Express.",
        },
        {
          id: 6,
          question:
            "What is the difference between synchronous and asynchronous code in NodeJS?",
          answer:
            "Synchronous code blocks the execution of subsequent code until it completes, while asynchronous code allows the program to continue running other tasks while waiting for an operation to finish.",
        },
        {
          id: 7,
          question: "How do you read a file in NodeJS?",
          answer:
            "A file can be read in NodeJS using the `fs` module's `readFile` or `readFileSync` methods.",
        },
        {
          id: 8,
          question: "What is Express.js in NodeJS?",
          answer:
            "Express.js is a minimal and flexible web application framework for NodeJS that provides a robust set of features to develop web and mobile applications.",
        },
        {
          id: 9,
          question: "How do you create a REST API using NodeJS and Express?",
          answer:
            "A REST API can be created by defining routes using Express.js, handling HTTP methods like GET, POST, PUT, DELETE, and sending JSON responses.",
        },
        {
          id: 10,
          question:
            "What is the use of the 'body-parser' middleware in NodeJS?",
          answer:
            "The 'body-parser' middleware parses incoming request bodies in a middleware, making the data available under the req.body property.",
        },
      ],
      hard: [
        {
          id: 1,
          question: "What is event-driven programming in NodeJS?",
          answer:
            "Event-driven programming in NodeJS is a programming paradigm where the flow of the program is determined by events such as user actions, sensor outputs, or message passing.",
        },
        {
          id: 2,
          question: "How do you manage environments in NodeJS?",
          answer:
            "Environments in NodeJS can be managed using environment variables and tools like dotenv to load them into your application.",
        },
        {
          id: 3,
          question: "What is clustering in NodeJS?",
          answer:
            "Clustering is a technique to create multiple instances of a NodeJS application to take advantage of multi-core systems and improve performance.",
        },
        {
          id: 4,
          question: "Explain NodeJS Streams and their types.",
          answer:
            "NodeJS Streams are objects that let you read data from a source or write data to a destination in a continuous fashion. The types include Readable, Writable, Duplex, and Transform streams.",
        },
        {
          id: 5,
          question:
            "What is the purpose of the 'child_process' module in NodeJS?",
          answer:
            "The 'child_process' module allows you to spawn child processes in NodeJS, enabling the execution of commands and scripts outside the main NodeJS process.",
        },
        {
          id: 6,
          question:
            "How do you implement authentication in a NodeJS application?",
          answer:
            "Authentication can be implemented using libraries like Passport.js, JWT (JSON Web Tokens), or OAuth, combined with sessions or token-based authentication.",
        },
        {
          id: 7,
          question: "What is the purpose of the 'buffer' class in NodeJS?",
          answer:
            "The 'buffer' class in NodeJS is used to handle binary data directly, particularly useful for dealing with streams of data like TCP streams or file system operations.",
        },
        {
          id: 8,
          question:
            "How do you improve the performance of a NodeJS application?",
          answer:
            "Performance can be improved by using techniques like clustering, caching, optimizing database queries, using asynchronous operations, and avoiding blocking code.",
        },
        {
          id: 9,
          question: "What is a 'worker thread' in NodeJS?",
          answer:
            "A 'worker thread' is a way to run JavaScript in parallel on multiple threads, helping to offload CPU-intensive tasks from the main thread.",
        },
        {
          id: 10,
          question: "How do you secure a NodeJS application?",
          answer:
            "A NodeJS application can be secured using techniques like input validation, using HTTPS, implementing proper authentication and authorization, protecting against SQL injection, and keeping dependencies updated.",
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
        {
          id: 3,
          question: "How do you insert a document into a MongoDB collection?",
          answer:
            "A document can be inserted into a MongoDB collection using the `insertOne()` or `insertMany()` methods.",
        },
        {
          id: 4,
          question: "What is a document in MongoDB?",
          answer:
            "A document in MongoDB is a record in a collection, similar to a row in a table, stored in a JSON-like format.",
        },
        {
          id: 5,
          question: "How do you delete a document in MongoDB?",
          answer:
            "A document can be deleted using the `deleteOne()` or `deleteMany()` methods, based on specified criteria.",
        },
        {
          id: 6,
          question: "What is the purpose of the `_id` field in MongoDB?",
          answer:
            "The `_id` field is a unique identifier for each document in a MongoDB collection, automatically generated if not provided.",
        },
        {
          id: 7,
          question: "How do you connect to a MongoDB database using Node.js?",
          answer:
            "You can connect to a MongoDB database using Node.js by using the `MongoClient` from the `mongodb` package and calling the `connect()` method with the database URL.",
        },
        {
          id: 8,
          question: "What is a schema in MongoDB?",
          answer:
            "MongoDB is schema-less, meaning there is no fixed structure enforced on documents in a collection, allowing for flexible data models.",
        },
        {
          id: 9,
          question: "What is a BSON in MongoDB?",
          answer:
            "BSON (Binary JSON) is a binary representation of JSON-like documents, used internally by MongoDB for data storage and network transfers.",
        },
        {
          id: 10,
          question: "How do you list all collections in a MongoDB database?",
          answer:
            "You can list all collections in a MongoDB database using the `listCollections()` method.",
        },
      ],
      medium: [
        {
          id: 1,
          question: "How do you perform a query in MongoDB?",
          answer:
            "Queries in MongoDB are performed using the `find()` method, which returns documents that match the specified criteria.",
        },
        {
          id: 2,
          question: "What are indexes in MongoDB and why are they used?",
          answer:
            "Indexes in MongoDB improve query performance by allowing faster data retrieval. They work by creating data structures that store a small portion of the data in a way that is quick to search.",
        },
        {
          id: 3,
          question: "How do you update a document in MongoDB?",
          answer:
            "Documents are updated using the `updateOne()` or `updateMany()` methods, which allow you to modify existing documents based on specified criteria.",
        },
        {
          id: 4,
          question:
            "What is the difference between `findOne()` and `find()` in MongoDB?",
          answer:
            "`findOne()` returns the first document that matches the query criteria, while `find()` returns all documents that match the criteria.",
        },
        {
          id: 5,
          question: "How do you perform aggregation in MongoDB?",
          answer:
            "Aggregation in MongoDB is performed using the `aggregate()` method, which allows for data processing and transformation through stages like `$match`, `$group`, `$sort`, and `$project`.",
        },
        {
          id: 6,
          question: "How do you ensure uniqueness in MongoDB?",
          answer:
            "Uniqueness in MongoDB can be ensured by creating a unique index on a field or combination of fields in a collection.",
        },
        {
          id: 7,
          question: "What is a capped collection in MongoDB?",
          answer:
            "A capped collection is a fixed-size collection that automatically overwrites the oldest documents when the specified size limit is reached.",
        },
        {
          id: 8,
          question: "How do you perform a bulk write operation in MongoDB?",
          answer:
            "Bulk write operations in MongoDB can be performed using the `bulkWrite()` method, allowing for multiple insert, update, and delete operations in a single command.",
        },
        {
          id: 9,
          question: "What is the use of `populate()` in MongoDB?",
          answer:
            "`populate()` is used in Mongoose to replace the specified field in a document with documents from a related collection, simulating joins in a NoSQL environment.",
        },
        {
          id: 10,
          question: "How do you handle data validation in MongoDB?",
          answer:
            "Data validation in MongoDB can be handled using schema validation, which enforces rules on document structure, or by using Mongoose schemas when working with Node.js.",
        },
      ],
      hard: [
        {
          id: 1,
          question: "What is sharding in MongoDB?",
          answer:
            "Sharding is a method for distributing data across multiple servers to handle large datasets and high throughput operations. It involves partitioning data and distributing it across shards (servers).",
        },
        {
          id: 2,
          question: "Explain the concept of replication in MongoDB.",
          answer:
            "Replication in MongoDB involves copying data from a primary server to one or more secondary servers to ensure data redundancy and high availability. A replica set is a group of MongoDB servers that maintain the same dataset.",
        },
        {
          id: 3,
          question: "What is the Aggregation Framework in MongoDB?",
          answer:
            "The Aggregation Framework is a set of operations that process data records and return computed results. It allows you to perform complex data manipulations and aggregations such as filtering, grouping, and sorting.",
        },
        {
          id: 4,
          question: "How does MongoDB handle data consistency and durability?",
          answer:
            "MongoDB handles data consistency and durability through replica sets, write concerns, and journaling. Replica sets ensure that data is replicated across multiple servers, while write concerns and journaling help ensure that write operations are properly recorded and recoverable.",
        },
        {
          id: 5,
          question: "What is a two-phase commit in MongoDB?",
          answer:
            "A two-phase commit in MongoDB is a pattern used to ensure atomicity across multiple documents or collections. It involves preparing a transaction and then committing it only when all operations have succeeded.",
        },
        {
          id: 6,
          question: "How do you implement transactions in MongoDB?",
          answer:
            "Transactions in MongoDB can be implemented using `session.startTransaction()` and committing or aborting the transaction based on the success of operations.",
        },
        {
          id: 7,
          question: "What are MongoDB change streams?",
          answer:
            "Change streams in MongoDB allow you to listen for real-time changes in a collection or database, providing a continuous stream of change events.",
        },
        {
          id: 8,
          question: "How does MongoDB handle concurrency?",
          answer:
            "MongoDB handles concurrency using optimistic concurrency control (OCC) through versioning of documents, and locks are used at the storage engine level to prevent write conflicts.",
        },
        {
          id: 9,
          question:
            "What is the difference between horizontal and vertical scaling in MongoDB?",
          answer:
            "Horizontal scaling in MongoDB involves adding more servers (sharding) to distribute the load, while vertical scaling involves increasing the resources of a single server.",
        },
        {
          id: 10,
          question: "How do you secure a MongoDB deployment?",
          answer:
            "MongoDB deployments can be secured by enabling authentication, using role-based access control (RBAC), encrypting data at rest and in transit, and configuring a firewall to restrict access to the database server.",
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
        {
          id: 3,
          question: "How do you set up a basic route in ExpressJS?",
          answer:
            "A basic route in ExpressJS is set up using the `app.get()` method, where you define the path and a callback function that handles the request and response.",
        },
        {
          id: 4,
          question: "What is `res.send()` in ExpressJS?",
          answer:
            "`res.send()` is a method in ExpressJS that sends a response to the client, either as a string, JSON object, or buffer.",
        },
        {
          id: 5,
          question: "How do you serve static files in ExpressJS?",
          answer:
            "Static files (such as HTML, CSS, and JavaScript files) can be served in ExpressJS using the `express.static` middleware, which is typically used by calling `app.use(express.static('public'))`.",
        },
        {
          id: 6,
          question: "What is `res.json()` in ExpressJS?",
          answer:
            "`res.json()` is a method in ExpressJS that sends a JSON response to the client. It automatically sets the `Content-Type` header to `application/json`.",
        },
        {
          id: 7,
          question: "How do you handle form data in ExpressJS?",
          answer:
            "Form data in ExpressJS can be handled using the `express.urlencoded()` middleware, which parses incoming requests with URL-encoded payloads, and `express.json()` for JSON payloads.",
        },
        {
          id: 8,
          question: "What is `next()` in ExpressJS?",
          answer:
            "`next()` is a function in ExpressJS that passes control to the next middleware function in the stack. It can be used to continue the request-response cycle or to handle errors.",
        },
        {
          id: 9,
          question: "How do you set up environment variables in ExpressJS?",
          answer:
            "Environment variables in ExpressJS are typically set up using the `dotenv` package. The variables are defined in a `.env` file and loaded into the application using `require('dotenv').config()`.",
        },
        {
          id: 10,
          question: "What is `app.listen()` in ExpressJS?",
          answer:
            "`app.listen()` is a method in ExpressJS that starts a server and listens on a specified port and host for incoming requests.",
        },
      ],
      medium: [
        {
          id: 1,
          question: "How do you define routes in ExpressJS?",
          answer:
            "Routes in ExpressJS are defined using the `app.get()`, `app.post()`, `app.put()`, and `app.delete()` methods. Each method specifies the HTTP method and path, and the callback function handles the request and response.",
        },
        {
          id: 2,
          question: "What is middleware in ExpressJS?",
          answer:
            "Middleware in ExpressJS are functions that have access to the request, response, and next middleware function in the application’s request-response cycle. They can modify the request or response objects, end the request-response cycle, or call the next middleware function.",
        },
        {
          id: 3,
          question: "How do you handle errors in ExpressJS?",
          answer:
            "Errors in ExpressJS are handled using error-handling middleware. An error-handling middleware function is defined with four arguments: `err`, `req`, `res`, and `next`. It catches any errors that occur in the application and can send a response to the client.",
        },
        {
          id: 4,
          question:
            "What is the purpose of `req` and `res` objects in ExpressJS?",
          answer:
            "The `req` (request) object represents the HTTP request and contains properties such as headers, body, and query parameters. The `res` (response) object represents the HTTP response and provides methods to send data back to the client, such as `res.send()`, `res.json()`, and `res.render()`.",
        },
        {
          id: 5,
          question: "How do you set up a RESTful API using ExpressJS?",
          answer:
            "A RESTful API in ExpressJS is set up by defining routes that correspond to different HTTP methods (GET, POST, PUT, DELETE) and endpoints. Each route handler performs operations such as reading from or writing to a database and sending responses to clients.",
        },
        {
          id: 6,
          question: "How do you use `app.use()` in ExpressJS?",
          answer:
            "`app.use()` is used to mount middleware functions that are executed for every request to the app. It can be used for logging, parsing request bodies, or serving static files.",
        },
        {
          id: 7,
          question: "How do you handle file uploads in ExpressJS?",
          answer:
            "File uploads in ExpressJS are handled using middleware like `multer`. It processes `multipart/form-data` forms and makes uploaded files available in `req.files`.",
        },
        {
          id: 8,
          question: "What is `res.render()` in ExpressJS?",
          answer:
            "`res.render()` is a method used to render a view template (e.g., Pug, EJS) and send the rendered HTML as a response to the client.",
        },
        {
          id: 9,
          question: "What is CORS and how do you enable it in ExpressJS?",
          answer:
            "CORS (Cross-Origin Resource Sharing) is a security feature that restricts how resources on a web page can be requested from another domain. In ExpressJS, it can be enabled using the `cors` middleware by calling `app.use(cors())`.",
        },
        {
          id: 10,
          question: "How do you implement sessions in ExpressJS?",
          answer:
            "Sessions in ExpressJS can be implemented using the `express-session` middleware, which allows you to store user data on the server between HTTP requests.",
        },
      ],
      hard: [
        {
          id: 1,
          question: "Explain how ExpressJS handles asynchronous operations.",
          answer:
            "ExpressJS handles asynchronous operations through the use of asynchronous functions, promises, and callbacks. Middleware and route handlers can be asynchronous, allowing for non-blocking operations such as database queries and file handling.",
        },
        {
          id: 2,
          question:
            "What are some strategies for scaling an ExpressJS application?",
          answer:
            "Scaling an ExpressJS application can involve horizontal scaling using multiple instances with a load balancer, clustering to utilize multiple CPU cores, and using a reverse proxy like Nginx for better performance and reliability.",
        },
        {
          id: 3,
          question:
            "How do you implement WebSocket communication in an ExpressJS application?",
          answer:
            "WebSocket communication in an ExpressJS application can be implemented using libraries like `ws` or `socket.io`, which enable real-time, bidirectional communication between clients and servers.",
        },
        {
          id: 4,
          question:
            "What are some best practices for securing an ExpressJS application?",
          answer:
            "Best practices for securing an ExpressJS application include using HTTPS, validating and sanitizing user inputs, implementing rate limiting, using Helmet to secure HTTP headers, and regularly updating dependencies to avoid known vulnerabilities.",
        },
        {
          id: 5,
          question:
            "How do you optimize performance in an ExpressJS application?",
          answer:
            "Performance optimization in ExpressJS can be achieved by minimizing middleware, using caching strategies, enabling gzip compression, using a content delivery network (CDN) for static assets, and optimizing database queries.",
        },
        {
          id: 6,
          question:
            "What is the purpose of clustering in an ExpressJS application?",
          answer:
            "Clustering allows an ExpressJS application to spawn multiple instances (workers) of the server, each running on a different CPU core, improving performance and reliability by balancing the load across multiple processes.",
        },
        {
          id: 7,
          question:
            "How do you implement role-based access control (RBAC) in ExpressJS?",
          answer:
            "Role-based access control (RBAC) in ExpressJS can be implemented by defining user roles and permissions, and then checking these roles in middleware before allowing access to certain routes or actions.",
        },
        {
          id: 8,
          question:
            "How do you manage environment-specific configurations in ExpressJS?",
          answer:
            "Environment-specific configurations in ExpressJS can be managed using environment variables and configuration files that define settings for different environments (development, production, etc.). The `config` package can help manage these configurations.",
        },
        {
          id: 9,
          question:
            "What is the role of a reverse proxy in an ExpressJS application?",
          answer:
            "A reverse proxy, such as Nginx, sits between clients and the ExpressJS server, handling tasks like load balancing, SSL termination, and caching, which can improve the performance, security, and scalability of the application.",
        },
        {
          id: 10,
          question: "How do you handle large-scale file uploads in ExpressJS?",
          answer:
            "Large-scale file uploads in ExpressJS can be handled by streaming the files directly to cloud storage services like AWS S3 or by using a combination of middleware like `multer` for handling file uploads and `streaming` libraries to avoid memory overload.",
        },
      ],
    },
  },
];
