
### Project README

#### Overview
This project involves a parser developed using Jison, which is a parser generator similar to Bison/Yacc but for JavaScript. The parser is designed to parse a custom language that includes mathematical expressions, drawing commands, and structured instructions.

### Backend Repo Link
[Backend Repo Link](https://github.com/betebetoven/orga-back)

#### Features
- **Expression Evaluation**: The parser can evaluate mathematical expressions including basic arithmetic (`+`, `-`, `*`, `/`) and power operations (`^`).
- **Command Interpretation**: Supports drawing commands that specify the type of shape to draw (e.g., `x`, `o`, `e`, `t`) and its properties like position and color.
- **Array Output**: Outputs an array of parsed instructions, where each instruction is an object detailing a drawing command or expression.

#### Grammar Specification
The grammar of the parser includes:
- **Tokens**: Recognizes numbers, arithmetic operators, parentheses, semicolons, and specific keywords for drawing commands and colors.
- **Productions**:
  - Expressions for arithmetic calculations.
  - Instructions for drawing that combine a prefix command with coordinates and a color specification.
- **Parser Output**: Returns a structured array of instructions, each represented as a JavaScript object.

#### Usage
To use the parser, include it in your JavaScript environment and call the `parse` method with a string containing the commands and expressions to be parsed. The parser will return an array of objects, each representing an instruction decoded from the input string.

#### Installation
- Ensure Node.js is installed on your system.
- Install Jison globally via npm:
  ```bash
  npm install -g jison
  ```
- Generate the parser using the Jison file:
  ```bash
  jison grammar.jison
  ```
- Use the generated JavaScript file in your project.

#### Example
Here's a simple example of using the parser in a Node.js script:
```javascript
const parser = require('./path_to_generated_parser.js');

const input = `set_print_x (1,2,cyan); set_print_o (3,4,negro);`;
const output = parser.parse(input);
console.log(output);
```

This will output an array of instructions based on the input string, interpreting and structuring each command and its parameters.

#### Development
- Modify the `.jison` file to adjust the grammar and rebuild the parser using the Jison command mentioned above.
- Test changes locally by adjusting the input string and observing the output.

### Conclusion
This parser serves as a foundational tool for interpreting structured commands into a format that can be further processed by drawing libraries or for generating graphical output based on textual commands.

#### Repository Structure
- `grammar.jison`: Contains the grammar definition.
- `README.md`: This file, describing the project.
- `examples/`: Directory containing example scripts and input files.
