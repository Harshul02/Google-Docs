import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TerxEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  }

  return (
    <div className='bg-[#F8F9FA] min-h-screen pb-16'>
      <div className="flex">
        <div className="flex-grow">
          <Editor
            editorState={editorState}
            toolbarClassName="flex sticky top-0 z-50"
            wrapperClassName="wrapperClassName"
            editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        <div className="w-14 bg-gray-200 h-screen"> {/* Sidebar */}
          {/* Sidebar content */}
          <ul className="py-4">
            <li className="flex items-center p-2 hover:bg-gray-300">
              <span className="material-icons mr-2"></span> 
            </li>
            <li className="flex items-center p-2 hover:bg-gray-300">
              <span className="material-icons mr-2"></span>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-300">
              <span className="material-icons mr-2"></span> 
            </li>
            {/* Add more Google apps as required */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TerxEditor;
