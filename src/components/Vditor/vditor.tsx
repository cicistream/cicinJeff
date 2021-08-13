import React, { FC, useEffect, useRef } from 'react';
import { defaultOptions } from './editorConfig';
import Vditor from 'vditor';
import 'vditor/src/assets/scss/index.scss';
import styles from './index.less';
export interface IVditorProps {
    id: string;
    options?: IOptions;
    bindVditor?(vditor: Vditor): void;
}

const VditorEditor: FC<IVditorProps> = ({ id, options, bindVditor }) => {
    const vditorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const keyId = `vditor-editor-${id}`;
        let ops = options ?? defaultOptions;
        const vditor = new Vditor(keyId, ops);
        if (!!bindVditor) {
            bindVditor(vditor);
        }
    }, []);

    return (
        <div
            className={styles.vditorContainer}
            id={`vditor-editor-${id}`}
            ref={vditorRef}
        ></div>
    );
};

export default VditorEditor;
