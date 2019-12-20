import React from 'react';
import styled from 'styled-components';
import { FormInputType } from '../../types';
import FormFieldWrapper from './FormFieldWrapper';

const CheckboxLabel = styled.label`
	display: block;
	margin: .5rem 0;
`;

const CheckboxBoxGroup: React.FC<FormInputType> = ({ ids, name, title, value, onChangeInput }) => {
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
		<FormFieldWrapper>
			<em>{title}</em>
			{ids && ids.map(id => (
				<CheckboxLabel key={id} htmlFor={id}>
					<input type="checkbox" name={name} id={id} value={id} checked={value.includes(id)} onChange={handleOnChange} />
					{id}
				</CheckboxLabel>
			))}
		</FormFieldWrapper>
	);
};

export default CheckboxBoxGroup;
