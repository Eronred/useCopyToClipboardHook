
# Copy Clipboard Custom Hook 🪝

The easiest way to use copy to clipboard in React as a custom hook 🪝

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
## Source Code for Junior Developers

If you are a junior developer, create a hooks folder in src folder and create own custom hook instead of using this package and impress your teammates, senior/mid developers 🤠 The usage is the same way 👋

```bash
import { useState } from "react";

export const useCopyToClipboard = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text, delay) => {
        navigator.clipboard.writeText(text).then(
            () => {
                setCopied(true)
                setTimeout(() => setCopied(false), delay)
            },
            (err) => console.error('Failed to copy', err)
        );
    }

    return [copied, copyToClipboard]
}

```



## Authors

- [@eronred](https://www.github.com/eronred)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eronred)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/imeronn)

