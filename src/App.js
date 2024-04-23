import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';

const initialGrid = Array(3).fill().map(() => Array(3).fill({ figure: null, color: null }));

function App() {
  const [grid, setGrid] = useState(initialGrid);

 /* useEffect(() => {
    console.log("Grid state updated:", grid);
  }, [grid]);*/

  const updateGrid = (row, col, figure, color) => {
    const newGrid = [...grid];
    newGrid[row][col] = { figure, color };
    setGrid(newGrid);
  };

  const removeFigure = (row, col) => {
    updateGrid(row, col, null, null);
  };

  // Function to handle sending the grid data
  const handleSendGridData = async () => {
    try {
      console.log("Sending grid data to backend:", grid);
      const response = await fetch('http://localhost:8080/receive-matrix/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ grid })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const responseData = await response.json();
      console.log("Response from backend:", responseData);
    } catch (error) {
      console.error("Failed to send grid data:", error);
    }
  };
  

  return (
    <div>
      <Grid grid={grid} onRemoveFigure={removeFigure} updateGrid={updateGrid} />
      <ControlPanel updateGrid={updateGrid} />
      <button onClick={handleSendGridData}>Send Grid Data</button>
    </div>
  );
}

export default App;
