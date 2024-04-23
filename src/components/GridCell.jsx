import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid black;
`;

const Figure = styled.div`
  font-size: 40px;
  color: ${props => props.color || 'black'};
`;

const GridCell = ({ figure, color, onRemove }) => (
  <Cell onDoubleClick={onRemove}>
    {figure && <Figure color={color}>{figure}</Figure>}
  </Cell>
);

export default GridCell;
