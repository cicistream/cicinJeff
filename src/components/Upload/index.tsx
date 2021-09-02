import React from 'react';
import { Upload } from 'antd';

interface IUploadProps {
    name: string;
    multiple?: boolean;
}

function UploadBox(props: IUploadProps) {
    return <Upload {...props}></Upload>;
}

export default UploadBox;
