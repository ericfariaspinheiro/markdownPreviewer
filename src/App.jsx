import React from 'react';
import './App.css';

const defaultText = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Cute Puppy](https://www.pngall.com/wp-content/uploads/11/Cute-Puppy-PNG-Images.png) `

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: defaultText
    }
    this.handleChange = this.handleChange.bind(this);
    this.converter = this.converter.bind(this);
  }

  handleChange(event){
   this.setState({input: event.target.value})
  }

  converter() {
    let x = marked.parse(this.state.input, { breaks: true });
    return {__html : x};
  }
  
  render(){
    return (
      <div >
        <div id="editorWindow">
          <h3>Enter markdown below:</h3>
          <textarea name="editor" id="editor" value={this.state.input} cols="50" rows="10" onChange={this.handleChange}></textarea>
        </div>
        <div id="previweWindow">
          <h3 id="preview" dangerouslySetInnerHTML ={this.converter()}></h3>
        </div>
      </div>  
    )
  }
}

export default App;

