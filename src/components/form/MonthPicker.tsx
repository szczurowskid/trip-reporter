import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';

const MonthPickerWrapper = styled.div`
  
`;

const MonthPicker: React.FC<FormInputType> = ({ id, name, value, onChangeInput }) => {
	return (
		<MonthPickerWrapper>
			<label htmlFor={id}>Start of the trip:</label>
			<input type="month" id={id} name={name} value={value} onChange={onChangeInput} />
		</MonthPickerWrapper>
	);
};

export default MonthPicker;
