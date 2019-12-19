import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';

const CheckboxBoxGroupWrapper = styled.div`
  
`;

const CheckboxBoxGroup: React.FC<FormInputType> = ({ ids, name, value, onChangeInput }) => {
	const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		let newValue: any = value;

		if (evt.target.checked) {
			newValue = [...newValue, evt.target.value];
		} else {
			newValue = newValue.filter((val: string) => val !== evt.target.value)
		}

		onChangeInput(newValue, name)
	};

	return (
		<CheckboxBoxGroupWrapper>
			{ids && ids.map(id => (
				<label key={id} htmlFor={id}>
					{id}
					<input type="checkbox" name={name} id={id} value={id} checked={value.includes(id)} onChange={handleOnChange} />
				</label>
			))}
		</CheckboxBoxGroupWrapper>
	);
};

export default CheckboxBoxGroup;
