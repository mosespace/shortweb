"use state";

import React, { useState } from "react";
import { CardProps } from "@/types/types";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Card({ name, content, tag }: CardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='rounded-3xl text-center shadow-lg bg-white p-6 flex flex-col justify-between h-full'>
      <h3 className='text-sm font-light text-left text-gray-500 dark:text-gray-700'>
        {name}
      </h3>
      <div className='flex flex-col flex-grow justify-center py-8 px-4'>
        <div>
          <p className='font-bold text-2xl mt-2 dark:text-background'>
            {content}
          </p>
        </div>
        <div className='mt-4'>
          <CopyToClipboard text={content} onCopy={handleCopy}>
            <button className='text-sm text-gray-500 dark:text-gray-700 mt-2 relative'>
              Click to copy
              {copied && (
                <span className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-xs rounded py-1 px-2'>
                  Copied!
                </span>
              )}
            </button>
          </CopyToClipboard>
        </div>
      </div>

      {tag && (
        <p className='text-xs text-gray-400 mt-4 text-right dark:text-gray-700'>
          {tag}
        </p>
      )}
    </div>
  );
}
