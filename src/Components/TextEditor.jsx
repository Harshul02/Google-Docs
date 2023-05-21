import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {Calender} from '../Icons/exp';
import {Keep} from '../Icons/exp';
import {Task} from '../Icons/exp';
import {User} from '../Icons/exp';
import {Maps} from '../Icons/exp';
import {Plus} from '../Icons/exp';

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
        <div className="w-14 bg-gray-200 h-screen"> {/* Sidebar */}
          {/* Sidebar content */}
          <ul className="py-2">
            <li className="flex items-center p-2 hover:bg-gray-300 my-4">
              <span className="material-icons mr-1">
                <a href="https://calendar.google.com/"><img src={Calender} alt="Calender" /></a>
              </span> 
            </li>
            <li className="flex items-center p-2 hover:bg-gray-300 my-4">
              <span className="material-icons mr-1">
              <a href="https://keep.google.com/"><img src={Keep} alt="Keep" /></a>
              </span>
            </li>
            <li className="flex items-center p-3 hover:bg-gray-300 my-4">
              <span className="material-icons mr-1">
              <img src={Task} alt="Task" />
              </span> 
            </li>
            <li className="flex items-center p-3 hover:bg-gray-300 my-4">
              <span className="material-icons mr-1">
              <a href="https://contacts.google.com/"><img src={User} alt="User" /></a>
              </span> 
            </li>
            <li className="flex items-center p-3 hover:bg-gray-300 my-4">
              <span className="material-icons mr-1">
              <a href="https://www.google.com/maps"><img src={Maps} alt="Maps" /></a>
              </span> 
            </li>
            <hr className="border-gray-400 my-3 w-10 mx-auto" />
            <li className="flex items-center p-4 hover:bg-gray-300 my-4">
              <span className="material-icons mr-1">
              <img src={Plus} alt="Plus" />
              </span> 
            </li>
            {/* Add more Google apps as required */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TextEditor;
