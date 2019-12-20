import React from 'react';
import styled from 'styled-components';
import { ButtonType } from '../types';

const ButtonElem = styled.button<ButtonType>`
	background-color: ${props => props.variant === 'submit' ? "#4CAF50" : "red"}
  color: white; 
  border: none;
  padding: .5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: .5rem 0;
  transition-duration: 0.4s;
  cursor: pointer;
  
  &:hover {
  	opacity: .5;
  }
`;

const Button: React.FC<ButtonType> = ({ label, variant, onClick }) => {
	return (
		<ButtonElem variant={variant} onClick={onClick}>{label}</ButtonElem>
	);
};

export default Button;
