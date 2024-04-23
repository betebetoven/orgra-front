import React, { useState } from 'react';
import orga from '../parser/orga';

const ControlPanel = ({ updateGrid }) => {
  const [command, setCommand] = useState('');
  const [error, setError] = useState('');
  const [Comandos, setComandos] = useState([]);

  const handleInputChange = (e) => {
    setCommand(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const results = orga.parse(command);
      setComandos(results);
      results.forEach(result => {
        if (result) {
          updateGrid(parseInt(result.row), parseInt(result.col), result.figure, result.color);
        }
      });
      setError('');
    } catch (err) {
      //replace /n with <br> in error message
      err.message = err.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
      //setError(err.message);
      //because set error will have a br it needs to accept dangerouslySetInnerHTML to display the error message correctly, do it
      setError( <div dangerouslySetInnerHTML={{__html: err.message}} /> );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={command} 
          onChange={handleInputChange} 
          rows={10} 
          cols={50}
          style={{ fontFamily: 'monospace', fontSize: '16px' }}
        />
        <button type="submit">Execute</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ControlPanel;
