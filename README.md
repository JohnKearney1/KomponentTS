# Komponent (React Library)

![`version: a-1.0.0`](./src/assets/img/screenshot.png)

Komponent is my lightweight, flexible component library for React. It is designed to be a very blank, highly customizable component library that can be used to build any kind of UI with a high degree of advanced styling options. It is built with TypeScript and some basic pre-styled-components.

This library is still in development (very much a WIP). As such, there is no build. To develop, see usage instructions below.

## Usage

#### Setup

- Clone the repository.
- Run `npm install` to install dependencies.

#### Development Environment
- Run `npm run storybook` to open the Storybook interface.
- Develop components in the `src/components` directory.
- Add stories for the components in the `src/stories` directory.

#### Build the Library
- Run `npm run build` to build the library.
- The library will be built in the `dist` directory.


## Components

For a full list of component props and usage, see the Storybook interface, or visit the [Komponent Wiki](https://github.com/JohnKearney1/komponent/wiki).

### Button

The Button component is a simple button that can be customized with a variety of props.


## Colors

<style>
.color-swatch {
display: inline-block;
width: 75px;
height: 75px;
margin: 0 10px 10px 0;
border: 1px solid #000;
}
</style>
<div class="colorbox" style="
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
">
<div class="colorbox" style="
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
">
<div style="font-weight: bold;">Primary Pallete</div>
<br/>
<div class="colorbox" style="
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
">
<div class="color-swatch" style="background-color: #1a1a1a; 
display: flex; 
justify-content: center;
align-items: center;
color: white;"> 
#1a1a1a
</div>
<div class="color-swatch" style="background-color: #2a2a2a; 
display: flex; 
justify-content: center;
align-items: center;
color: white;"> 
#2a2a2a
</div>
</div>
</div>
<div class="colorbox" style="
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
">
<div style="font-weight: bold;">Secondary Pallete</div>
<br/>
<div class="colorbox" style="
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
">
<div class="color-swatch" style="background-color: #f1f1f1; 
display: flex; 
justify-content: center;
align-items: center;
color: black;"> 
#f1f1f1
</div>
<div class="color-swatch" style="background-color: #dfdfdf; 
display: flex; 
justify-content: center;
align-items: center;
color: black;"> 
#dfdfdf
</div>
</div>
</div>
</div>
