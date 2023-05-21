import React from 'react'
import './Header.css';
import { Button } from "@material-tailwind/react";
import TextEditor from './TextEditor';

function Header() {
  return (
    <div>
      <header className='flex justify-between items-center p-3 pb-1'>
        <span className='cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9" style={{color: "#0a64ff",}}>
  <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
</svg>

        </span>

        <div className='flex-grow px-2'>
            <h2>Untitled Document</h2>
            <div className='flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600'>
                <p className='option'>File</p>
                <p className='option'>Edit</p>
                <p className='option'>View</p>
                <p className='option'>Insert</p>
                <p className='option'>Format</p>
                <p className='option'>Tools</p>
            </div>
        </div>

        <Button
        color='lightBlue'
        buttonType='filled'
        size='regular'
        className='hidden md:!inline-flex h-10'
        rounded={false}
        block={false}
        iconOnly={false}
        ripple='light'
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-4">
  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
</svg>


            SHARE
        </Button>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer rounded-full h-10 w-10 ml-2" style={{color: '#f0900f'}}>
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>

      </header>

      <TextEditor />
    </div>
  )
}


export default Header;
