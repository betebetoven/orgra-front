import React from 'react';
import GridCell from './GridCell';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
`;

const Grid = ({ grid, onRemoveFigure, updateGrid }) => (
  <GridContainer>
    {grid.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <GridCell
          key={`${rowIndex}-${colIndex}`}
          figure={cell.figure}
          color={cell.color}
          onRemove={() => onRemoveFigure(rowIndex, colIndex)}
        />
      ))
    )}
  </GridContainer>
);

export default Grid;
