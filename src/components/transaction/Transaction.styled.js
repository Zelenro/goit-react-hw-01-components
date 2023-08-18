import { styled } from 'styled-components';

export const TransactionTable = styled.table`
  border: 2px solid black;
  border-radius: 4px;
  min-width: 300px;
  max-width: 300px;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: auto;
  margin-right: auto;
  background-color: deepskyblue;
`;

export const Colums = styled.thead`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding: 8px 0;
  background-color: deepskyblue;
`;
