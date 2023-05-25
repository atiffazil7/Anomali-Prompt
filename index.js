
// Select the element containing the text to be parsed as HTML
const textElement = document.querySelector('[wb-element="text-data"]');

// Parse the text content as HTML
const parser = new DOMParser();
const htmlDocument = parser.parseFromString(
  textElement.textContent,
  'text/html'
);

// Get the parsed HTML content
const parsedHTML = htmlDocument.documentElement;

// Append the parsed HTML to a container element
const container = document.querySelector('[wb-element="parsed-html-container"]');
container.appendChild(parsedHTML);
