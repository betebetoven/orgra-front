import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';

const initialGrid = Array(3).fill().map(() => Array(3).fill({ figure: null, color: null }));

function App() {
  const [grid, setGrid] = useState(initialGrid);

  useEffect(() => {
    console.log("Grid state updated:", grid);
  }, [grid]);

  const updateGrid = (row, col, figure, color) => {
    const newGrid = [...grid];
    newGrid[row][col] = { figure, color };
    setGrid(newGrid);
  };

  const removeFigure = (row, col) => {
    updateGrid(row, col, null, null);
  };

  // Function to handle sending the grid data
  const handleSendGridData = () => {
    console.log("Sending grid data to backend:", grid);
    // Here you could also use fetch or axios to POST this data to a backend endpoint
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
