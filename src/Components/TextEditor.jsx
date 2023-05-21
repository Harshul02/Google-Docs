import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import SideBar from './SideBar';

function TextEditor() {
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
        <SideBar />
      </div>
    </div>
  )
}

export default TextEditor;
