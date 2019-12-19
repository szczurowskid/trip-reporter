import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';

const TextAreaWrapper = styled.div`
  
`;

const TextArea: React.FC<FormInputType> = ({ id, name, value, onChangeInput }) => {
	return (
		<TextAreaWrapper>
			<label htmlFor={id}>Trip description:</label>
			<textarea id={id} name={name} rows={5} cols={30} value={value} onChange={onChangeInput} />
		</TextAreaWrapper>
	);
};

export default TextArea;
