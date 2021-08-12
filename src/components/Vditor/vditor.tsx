import React, { FC, useEffect, useRef } from 'react';
import { IOptions } from './type';
import defaultConfig from './editorConfig';
import Vditor from 'vditor';

export interface IVditorProps {
    id: string;
    options?: IOptions;
    bindVditor?(vditor: Vditor): void;
}

const VditorEditor: FC<IVditorProps> = ({ id, options, bindVditor }) => {
    const vditorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const keyId = `vditor-editor-${id}`;
        let ops = options ?? defaultConfig;
        const vditor = new Vditor(keyId, ops);
        if (!!bindVditor) {
            bindVditor(vditor);
        }
    }, []);

    return <div id={`vditor-editor-${id}`} ref={vditorRef}></div>;
};

export default VditorEditor;
