import React, { useState } from 'react';
import orga from '../parser/orga';

const ControlPanel = ({ updateGrid }) => {
  const [command, setCommand] = useState('');
  const [error, setError] = useState('');
  const [Comandos, setComandos] = useState([]);

  const handleInputChange = (e) => {
    setCommand(e.target.value);
  };

  const handleFileRead = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/plain") {
      try {
        const text = await file.text();
        setCommand(text);
      } catch (readError) {
        console.error("Error reading file:", readError);
        setError('Error reading file');
      }
    } else {
      setError('Please upload a valid text file.');
    }
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
      err.message = err.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
      setError(<div dangerouslySetInnerHTML={{__html: err.message}} />);
    }
  };

  const handleSaveToFile = () => {
    const blob = new Blob([command], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "saved_command.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
        <input
          type="file"
          accept=".txt"
          onChange={handleFileRead}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <button type="submit">Execute</button>
        <button type="button" onClick={handleSaveToFile} style={{ marginTop: '10px' }}>
          Save to File
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ControlPanel;
