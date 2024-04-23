# React Frontend for Grid Figure Editor

## Project Overview
This React application provides an interactive interface for dynamically managing a grid where users can set figures and colors. It supports command inputs for automated configurations and manual interactions directly within the grid cells.

### Backend Repo Link
[Backend Repo Link](https://github.com/betebetoven/orga-back)

#### Features
- **Expression Evaluation**: The parser can evaluate mathematical expressions including basic arithmetic (`+`, `-`, `*`, `/`) and power operations (`^`).
- **Command Interpretation**: Supports drawing commands that specify the type of shape to draw (e.g., `x`, `o`, `star`, `triangle`) and its properties like position and color.
- **Array Output**: Outputs an array of parsed instructions, where each instruction is an object detailing a drawing command or expression.

#### Grammar Specification
The grammar of the parser includes:
- **Tokens**: Recognizes numbers, arithmetic operators, parentheses, semicolons, and specific keywords for drawing commands and colors.
- **Productions**:
  - Expressions for arithmetic calculations.
  - Instructions for drawing that combine a prefix command with coordinates and a color specification.
- **Parser Output**: Returns a structured array of instructions, each represented as a JavaScript object.

## Components
- **App.js**: Root component managing state and integrating the grid and control panel components.
- **ControlPanel.jsx**: Allows command input for manipulating the grid based on a custom syntax parsed by an integrated parser.
- **Grid.jsx**: Renders the grid layout where each cell can be individually configured.
- **GridCell.jsx**: Represents a single cell in the grid, handling its display and modifications.

## Parser
- **orga.jison**: Contains the grammar for parsing commands.
- **orga.js**: The compiled parser script that executes the parsing of command inputs.

## Running the Project
Ensure Node.js and npm are installed, then run:
```bash
npm install
npm start
```
This starts the application on `http://localhost:3000` and expects a backend on `http://localhost:8080`.

## Development
- Enhance the parser for more complex commands.
- Improve UI interaction and styling with `styled-components`.
- Extend error handling for robust user feedback.

## Additional Notes
Error handling in the `ControlPanel` uses `dangerouslySetInnerHTML` for displaying multiline error messages properly. Ensure to adjust backend endpoints as per your deployment setup.