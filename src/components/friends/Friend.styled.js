import { styled } from 'styled-components';
import { TiWiFi } from "react-icons/ti";

export const Friends = styled.ul`
  border: 2px solid black;
  border-radius: 4px;
  max-width: 300px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  background-color: deepskyblue;
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 4px;
  margin: 16px;
  padding: 16px;
`;

export const Status = styled.span`
  display: inline-block;
  width: 30px; 
  height: 30px; 
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;

export const IconTiWiFi = styled(TiWiFi)`
  width: 100%; 
  height: 100%; 
  color: ${props => (props.$isOnline === !true ? 'black' : 'darkblue')};
`;

