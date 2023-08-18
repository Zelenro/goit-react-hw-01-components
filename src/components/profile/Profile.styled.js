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

export const List = styled.ul`
  padding: 16px;
  display: flex;
  align-items: center;
`;
export const ListItem = styled.li`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 33%;
`;
