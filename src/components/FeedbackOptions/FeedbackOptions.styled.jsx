import styled from 'styled-components';

const colorMap = {
  good: '#4eb977',
  bad: '#b9524e',
};
export const BtnUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Button = styled.button`
  background-color: ${props => colorMap[props.name] || '#007bff'};
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  cursor: pointer;
  transition: filter 0.3s ease;
  &:hover {
    filter: brightness(80%);
  }
  &:active {
    transform: scale(0.9);
  }
`;
