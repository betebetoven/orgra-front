import React, { useState } from 'react';
import styled from 'styled-components';

const Cell = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid black;
  position: relative; // for positioning the edit overlay
`;

const Figure = styled.div`
  font-size: 40px;
  color: ${props => props.color || 'black'};
`;

const EditOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridCell = ({ rowIndex, colIndex, figure, color, onRemove, updateGrid }) => {
  const [editMode, setEditMode] = useState(false);
  
  const handleChangeFigure = (e) => {
    updateGrid(rowIndex, colIndex, e.target.value, color);
  };

  const handleChangeColor = (e) => {
    updateGrid(rowIndex, colIndex, figure, e.target.value);
  };

  return (
    <Cell onDoubleClick={() => setEditMode(!editMode)}>
      {editMode ? (
        <EditOverlay>
          <select onChange={handleChangeFigure} value={figure}>
            <option value="">Select Figure</option>
            <option value="x">X</option>
            <option value="o">O</option>
            <option value="☆">☆</option>
            <option value="△">△</option>
          </select>
          <select onChange={handleChangeColor} value={color}>
            <option value="">Select Color</option>
            <option value="cyan">Cyan</option>
            <option value="negro">Negro</option>
            <option value="yellow">Amarillo</option>
            <option value="magenta">Magenta</option>
          </select>
        </EditOverlay>
      ) : (
        figure && <Figure color={color}>{figure}</Figure>
      )}
    </Cell>
  );
};

export default GridCell;
