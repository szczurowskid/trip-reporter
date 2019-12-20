import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';

const FormField = styled.div`
  margin: 2rem 0;
  width: 40vw;
  & * {
  	font-size: 1rem;  
  }
`;

const FormFieldWrapper: React.FC<FormInputType> = (props) => {
	return (
		<FormField>
			{props.children}
		</FormField>
	);
};

export default FormFieldWrapper;
