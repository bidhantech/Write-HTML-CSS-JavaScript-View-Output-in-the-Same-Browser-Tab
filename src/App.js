import React, { useState } from 'react';

function App() {
  let [HTML, setHTML] = useState('');
  let [CSS, setCSS] = useState('');
  let [JavaScript, setJavaScript] = useState('');
  let [SourceCode, setSourceCode] = useState('');

  function onChangeHTML(event) {
    setHTML(event.target.value);
  }

  function onChangeCSS(event) {
    setCSS(event.target.value);
  }

  function onChangeJavaScript(event) {
    setJavaScript(event.target.value);
  }

  function onRun() {

    let tempSourceCode = `<!DOCTYPE html>
                          <html>
                            <head>
                               <title>title</title>
                               <style>
                                  ${CSS}
                                </style>
                            </head>
                           <body>
                              ${HTML}
                              <script>
                                ${JavaScript}
                              </script>
                            </body>
                          </html>`;

    setSourceCode(tempSourceCode);

    window.location = "/#output";
  }

  return (
    <div className="App">
      <div className="container">

        <section className="html-container">
          <span>HTML</span><br />
          <textarea spellCheck="false" className="html editor" onChange={onChangeHTML} />
        </section>

        <section className="css-container">
          <span>CSS</span><br />
          <textarea spellCheck="false" className="css editor" onChange={onChangeCSS} />
        </section>

        <section className="javascript-container">
          <span>JavaScript</span><br />
          <textarea spellCheck="false" className="javascript editor" onChange={onChangeJavaScript} />
        </section>

      </div>


      <span className="run" onClick={onRun}>VIEW OUTPUT</span>

      <span className="heading-output" id="output">OUTPUT</span>
      <iframe srcDoc={SourceCode} title="Output" className="output" sandbox="allow-scripts" />
    </div>
  );
}

export default App;
