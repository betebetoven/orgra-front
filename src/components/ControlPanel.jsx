import React, { useState } from 'react';
import  orga  from '../parser/orga';

const ControlPanel = ({ updateGrid }) => {
  const [command, setCommand] = useState(''); 
  const [error, setError] = useState('');
  const [Comandos, setComandos] = useState([]); // [1

  const handleInputChange = (e) => {
    setCommand(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const results = orga.parse(command );
      setComandos(results); // [1]
      results.forEach(result => {
        if (result) {
          updateGrid(parseInt(result.row), parseInt(result.col), result.figure, result.color);
        }
      });
      setError(''); // Clear any previous errors on successful command processing
    } catch (err) {
      setError('Failed to parse command: ' + err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={command} onChange={handleInputChange} />
        <button type="submit">Execute</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ControlPanel;
