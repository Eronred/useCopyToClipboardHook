
# Copy Clipboard Custom Hook🪝

The easiest way to use Clipboard in React🪝

## Installation
```bash
npm i use-copy-clipboard-hook

```
## Usage

```bash
import { useCopyToClipboard } from "use-copy-clipboard-hook";

function App() {
  const [copied, copyToClipboard] = useCopyToClipboard();
  return (
    <div className="App">
      <button onClick={() =>
        copyToClipboard('Copy Text', 3000)}>Copy</button>
      {copied ? "Text copied 🥳🥳" : "Copy 🤖"}
    </div>
  );
}

export default App;

```
    



## Authors

- [@eronred](https://www.github.com/eronred)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/eronred)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/imeronn)

