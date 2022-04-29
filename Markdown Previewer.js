import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const defaultContent = `

![Adélie penguin](https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Ad%C3%A9lie_Penguin.jpg/345px-Ad%C3%A9lie_Penguin.jpg)

# Adélie penguin
## Pygoscelis adeliae
### The Adélie penguin is a Antarctic penguin that has a black head and back with a white chest and belly, and a white ring around each of their eyes. There are about 2.5 million Adélie penguins in the Southern Ocean around Antarctica. Adélie penguins travel the furthest to breed because they build their nests from stones and need to find stones. Adélies come ashore to breed in the summer. In the winter, they live on ice that floats off the Antarctic shore.

\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**For more info**

[Adélie penguin](https://en.wikipedia.org/wiki/Ad%C3%A9lie_penguin)

> Scientific classification

1. Pygoscelis
2. P. adeliae


`

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => 
  <textarea value={content} onChange={handleTextareaChange} id="editor" />

const Previewer = ({content}) => (
  <div id="preview" 
    dangerouslySetInnerHTML={{
      __html: marked(content, { renderer: renderer })
    }}
  />
);

const App = () => {
  const [content, setContent] = React.useState(defaultContent)
  
  const handleTextareaChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <div class="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"));