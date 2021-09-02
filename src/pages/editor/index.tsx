import React, { FC } from 'react';
import { Input } from 'antd';
import { VditorEditor } from '@/components/Vditor';
import BaseLayout from '@/layouts/BaseLayout';
import { useState } from 'react';

const Editor: FC = () => {
    const [title, setTitle] = useState<string>('');
    return (
        <BaseLayout>
            <Input
                className="h-16 input border-r-0 mt-6"
                placeholder="请输入标题"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <VditorEditor id="Date" />
        </BaseLayout>
    );
};

export default Editor;
