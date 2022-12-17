import { useState } from "react";
export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (text, TIMER) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), TIMER);
    }, err => console.error('Failed to copy', err));
  };
  return [copied, copyToClipboard];
};