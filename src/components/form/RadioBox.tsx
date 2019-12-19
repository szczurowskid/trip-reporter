import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';

const RadioBoxWrapper = styled.div`
  
`;

const RadioBox: React.FC<FormInputType> = ({ ids, name, value, onChangeInput }) => {
	return (
		<RadioBoxWrapper>
			{ids && ids.map(id => (
				<label key={id} htmlFor={id}>
					{id}
					<input type="radio" id={id} name={name} value={id} checked={value.includes(id)} onChange={onChangeInput} />
				</label>
			))}
		</RadioBoxWrapper>
	);
};

export default RadioBox;
