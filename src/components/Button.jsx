import React from 'react'
import '../App.css'
import { useCopyToClipboard } from "use-copy-clipboard-hook";

export default function Button() {
    const [copied, copyToClipboard] = useCopyToClipboard();

    return (
        <>
            <button
                className='Button'
                onClick={() => copyToClipboard('Copied Text', 3000)}>
                {copied ?
                    (
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.21 7.46609C19.117 7.37236 19.0064 7.29796 18.8846 7.24719C18.7627 7.19643 18.632 7.17029 18.5 7.17029C18.368 7.17029 18.2373 7.19643 18.1154 7.24719C17.9936 7.29796 17.883 7.37236 17.79 7.46609L10.34 14.9261L7.21 11.7861C7.11347 11.6928 6.99953 11.6195 6.87468 11.5703C6.74982 11.5211 6.6165 11.497 6.48232 11.4993C6.34814 11.5016 6.21573 11.5304 6.09265 11.5839C5.96957 11.6374 5.85823 11.7146 5.765 11.8111C5.67176 11.9076 5.59844 12.0215 5.54924 12.1464C5.50004 12.2713 5.4759 12.4046 5.47823 12.5388C5.48055 12.6729 5.50928 12.8054 5.56277 12.9284C5.61626 13.0515 5.69347 13.1628 5.79 13.2561L9.63 17.0961C9.72296 17.1898 9.83356 17.2642 9.95542 17.315C10.0773 17.3657 10.208 17.3919 10.34 17.3919C10.472 17.3919 10.6027 17.3657 10.7246 17.315C10.8464 17.2642 10.957 17.1898 11.05 17.0961L19.21 8.93609C19.3115 8.84244 19.3925 8.72879 19.4479 8.60229C19.5033 8.47579 19.5319 8.33919 19.5319 8.20109C19.5319 8.06298 19.5033 7.92638 19.4479 7.79988C19.3925 7.67338 19.3115 7.55973 19.21 7.46609V7.46609Z" fill="white" />
                        </svg>
                    )
                    :
                    (
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 14.2561H9.5C9.23478 14.2561 8.98043 14.3614 8.79289 14.549C8.60536 14.7365 8.5 14.9909 8.5 15.2561C8.5 15.5213 8.60536 15.7757 8.79289 15.9632C8.98043 16.1507 9.23478 16.2561 9.5 16.2561H13.5C13.7652 16.2561 14.0196 16.1507 14.2071 15.9632C14.3946 15.7757 14.5 15.5213 14.5 15.2561C14.5 14.9909 14.3946 14.7365 14.2071 14.549C14.0196 14.3614 13.7652 14.2561 13.5 14.2561ZM17.5 4.25609H16.32C16.1137 3.67254 15.7319 3.16709 15.2271 2.80903C14.7222 2.45097 14.1189 2.25783 13.5 2.25609H11.5C10.8811 2.25783 10.2778 2.45097 9.77293 2.80903C9.26807 3.16709 8.88631 3.67254 8.68 4.25609H7.5C6.70435 4.25609 5.94129 4.57216 5.37868 5.13477C4.81607 5.69738 4.5 6.46044 4.5 7.25609V19.2561C4.5 20.0517 4.81607 20.8148 5.37868 21.3774C5.94129 21.94 6.70435 22.2561 7.5 22.2561H17.5C18.2956 22.2561 19.0587 21.94 19.6213 21.3774C20.1839 20.8148 20.5 20.0517 20.5 19.2561V7.25609C20.5 6.46044 20.1839 5.69738 19.6213 5.13477C19.0587 4.57216 18.2956 4.25609 17.5 4.25609V4.25609ZM10.5 5.25609C10.5 4.99087 10.6054 4.73652 10.7929 4.54898C10.9804 4.36145 11.2348 4.25609 11.5 4.25609H13.5C13.7652 4.25609 14.0196 4.36145 14.2071 4.54898C14.3946 4.73652 14.5 4.99087 14.5 5.25609V6.25609H10.5V5.25609ZM18.5 19.2561C18.5 19.5213 18.3946 19.7757 18.2071 19.9632C18.0196 20.1507 17.7652 20.2561 17.5 20.2561H7.5C7.23478 20.2561 6.98043 20.1507 6.79289 19.9632C6.60536 19.7757 6.5 19.5213 6.5 19.2561V7.25609C6.5 6.99087 6.60536 6.73652 6.79289 6.54898C6.98043 6.36145 7.23478 6.25609 7.5 6.25609H8.5V7.25609C8.5 7.5213 8.60536 7.77566 8.79289 7.96319C8.98043 8.15073 9.23478 8.25609 9.5 8.25609H15.5C15.7652 8.25609 16.0196 8.15073 16.2071 7.96319C16.3946 7.77566 16.5 7.5213 16.5 7.25609V6.25609H17.5C17.7652 6.25609 18.0196 6.36145 18.2071 6.54898C18.3946 6.73652 18.5 6.99087 18.5 7.25609V19.2561ZM15.5 10.2561H9.5C9.23478 10.2561 8.98043 10.3614 8.79289 10.549C8.60536 10.7365 8.5 10.9909 8.5 11.2561C8.5 11.5213 8.60536 11.7757 8.79289 11.9632C8.98043 12.1507 9.23478 12.2561 9.5 12.2561H15.5C15.7652 12.2561 16.0196 12.1507 16.2071 11.9632C16.3946 11.7757 16.5 11.5213 16.5 11.2561C16.5 10.9909 16.3946 10.7365 16.2071 10.549C16.0196 10.3614 15.7652 10.2561 15.5 10.2561Z" fill="white" />
                        </svg>
                    )
                }
                <span>
                    {copied ? "Text copied 🥳" : "Copy 🤖"}
                </span>
            </button>
        </>
    )
}
