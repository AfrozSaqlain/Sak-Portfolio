
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function CodeBlockk() {
    return (
        <div className='h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pt-10'>
            <SimpleBar forceVisible="y" autoHide={true} className="overflow-visible overscroll-y-auto h-full">
                <div className='container mx-auto h-full overflow-y-auto mt-18 mb-4 p-4 pt-12 pb-28 sm:mt-20 sm:p-0 sm:pt-10 sm:pb-10 flex flex-col xl:flex-row gap-x-6'>
                    <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
                        <h3>GeeksforGeeks Code</h3>
                        <CopyBlock
                            text="print('Hello World')"
                            language='python'
                            showLineNumbers='true'
                            wrapLines
                            theme={dracula}
                            className={`mb-10`}
                        />
                    </div>
                </div>
            </SimpleBar>
        </div>
    );
}