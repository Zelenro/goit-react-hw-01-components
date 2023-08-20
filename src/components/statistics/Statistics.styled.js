import { styled } from 'styled-components';

export const WrapperSection = styled.section`
  display: block;
  border: 2px solid black;
  border-radius: 4px;
  max-width: 300px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  background-color: deepskyblue;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  background-color: deepskyblue;
`;

export const StatList = styled.ul`
  display: flex;
  margin-top: 16px;
  background-color: deepskyblue;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin-top: 16px;
  background-color: deepskyblue;
`;

export const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
