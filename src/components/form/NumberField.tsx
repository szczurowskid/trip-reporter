import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';

const NumberFieldWrapper = styled.div`
  
`;

const NumberField: React.FC<FormInputType> = ({ id, name, value, label, onChangeInput }) => {
	return (
		<NumberFieldWrapper>
			<label htmlFor={id}>{label}</label>
			<input type="number" id={id} name={name} value={value} onChange={onChangeInput} />
		</NumberFieldWrapper>
	);
};

export default NumberField;
