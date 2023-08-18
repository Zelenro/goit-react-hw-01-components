import { styled } from 'styled-components';

export const WrapperCard = styled.div`
  display: block;
  border: 2px solid black;
  border-radius: 4px;
  max-width: 300px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  background-color: deepskyblue;
`;

export const List = styled.ul`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const Avatar = styled.img`
  padding: 16px;
  min-width: 50px;
  max-width: 250px;
`;
