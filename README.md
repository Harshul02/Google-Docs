# Google Docs Clone

This is a Google Docs clone made using React.js. It provides a simple and intuitive interface for creating and editing documents.

## Components

### Index

The index.js file serves as the entry point of the application. It is responsible for rendering the root component of your React application and attaching it to the DOM (Document Object Model). It incorporates the App component.

### App

The App component represents the main container or layout of the application. It is where the overall structure and behavior of the application is defined. It contains Docs component.

### Docs

It incorporates the Header component.

### Header

The header component displays the Docs logo, file title, and various options such as File, Edit, View, Insert, Format, Tools. It also includes a share button and user symbol. The Header component also incorporates the TextEditor component.

![Screenshot (409)](https://github.com/Harshul02/Google-Docs/assets/95930860/1110e14b-d3bd-4466-b2b4-bd6168bdef65)

### TextEditor

The TextEditor component provides a rich text editing experience with features like formatting text (bold, italic, underline), changing font styles, adjusting alignment, changing font size, adding links, and more. It uses the react-draft-wysiwyg npm package to implement these functionalities. The TextEditor component also includes a sidebar component for Google icons.

![Screenshot (410)](https://github.com/Harshul02/Google-Docs/assets/95930860/0775bde9-87c1-4e26-9f39-d95a81f015bc)

### Sidebar

The sidebar component displays a set of Google Apps icons using an array of objects. By utilizing the map function, I dynamically rendered the icons in the sidebar. Each object in the array represents an app and contains information such as the app's link, image, and name.

  ```
      {sideBarIcon.map((item)=> {
                return(
                <SidebarIcon 
                 Link={item.link} 
                 Image={item.image} 
                 name={item.name} 
                 />
                )
         })}
  ```  

## Installation

To run the Google Docs clone on your local machine, follow these steps:

1. Clone the repository:

   ```shell
   git clone <repository-url>

2. Navigate to the project directory:

   ```shell
   cd Google-Docs

3. Install the dependencies:
  
   ```shell
   npm install

4. Start the development server:

   ```shell
   npm start

5. Open your web browser and visit http://localhost:3000 to access the application.
