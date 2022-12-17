import './App.css';
import React from 'react';
import { useCopyToClipboard } from "use-copy-clipboard-hook";

function App() {
  const [copied, copyToClipboard] = useCopyToClipboard();
  return (
    <div className="App">
      <button onClick={() =>
        copyToClipboard('Copy Text', 3000)}>Copy</button>
      {copied ? "text copied" : "Copy"}
    </div>
  );
}

export default App;
