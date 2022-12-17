import './App.css';
import { useCopyToClipboard } from './hooks/useCopyToClipboard';

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
