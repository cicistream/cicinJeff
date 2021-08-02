import React, { FC, useEffect, useRef } from 'react';
import Vditor from 'vditor';
import { editorConfig } from './editorConfig';

interface EditorProps {
  editorConfig: IOptions,
}

const Editor:FC<EditorProps> = ({ editorConfig }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const vditor = useRef<object>({});
  // Vditor.preview()

  useEffect(() => {
    if (!vditor.current) {
      vditor.current = new Vditor(editorRef.current!, editorConfig)
    }
  }, []);

  return (
    <div id="vditor" ref={editorRef}>
      {}
    </div>
  )
}

export default { Editor };
