import React, { useState } from 'react';
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';

const initialGrid = Array(3).fill().map(() => Array(3).fill({ figure: null, color: null }));

function App() {
  const [grid, setGrid] = useState(initialGrid);

  const updateGrid = (row, col, figure, color) => {
    const newGrid = [...grid];
    newGrid[row][col] = { figure, color };
    setGrid(newGrid);
  };

  const removeFigure = (row, col) => {
    updateGrid(row, col, null, null);
  };

  return (
    <div>
      <Grid grid={grid} onRemoveFigure={removeFigure} updateGrid={updateGrid} />
      <ControlPanel updateGrid={updateGrid} />
    </div>
  );
}

export default App;
