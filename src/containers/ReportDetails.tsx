import React, { useState } from 'react';
import Select from 'react-select';
import useGetCountries from '../hooks/useGetCountries';
import { addReportToStorage } from '../utils/localStorage';

const ReportDetails: React.FC = () => {

	const countries = useGetCountries();

	const [state, setState] = useState({
		country: { value: "POL", label: "Poland" },
		tripStart: "",
		tripDuration: "",
		friends: [],
		destination: ""
	});

	const handleSelectChange = (country: any) => {
		setState({
			...state,
			country
		});
	};

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { value, name } = evt.target;
		const newValue = name === "friends" ? [...state.friends, value] : value;
		setState({
			...state,
			[name]: newValue
		});
	};

	const handleSubmit = () => {
		addReportToStorage([state]);
	};
	console.log(state);
	return (
		<React.Fragment>
			<Select options={countries}
							autoFocus
							name="country"
							value={state.country}
							placeholder="Select Country..."
							onChange={handleSelectChange}
			/>
			<label htmlFor="trip-start">Start of the trip:</label>
			<input type="month" id="trip-start" name="tripStart" onChange={handleChange} />

			<label htmlFor="trip-duration">Trip duration:</label>
			<input type="number" id="trip-duration" name="tripDuration" onChange={handleChange} />

			<label htmlFor="trip-description">Trip description:</label>
			<textarea id="trip-description" name="tripDescription" rows={5} cols={33} onChange={handleChange} />

			<input type="checkbox" name="friends" id="Samantha" value="Samantha" onChange={handleChange} />
			<label htmlFor="Samantha">Samantha</label>

			<input type="checkbox" name="friends" id="Claire" value="Claire" onChange={handleChange} />
			<label htmlFor="Claire">Claire</label>

			<input type="checkbox" name="friends" id="Simon" value="Simon" onChange={handleChange} />
			<label htmlFor="Simon">Simon</label>

			<input type="radio" id="goal" name="destination" value="goal" onChange={handleChange} />
			<label htmlFor="goal">Goal</label>

			<input type="radio" id="transit" name="destination" value="transit" onChange={handleChange} />
			<label htmlFor="transit">Destination</label>

			<button onClick={handleSubmit}>Add report</button>

		</React.Fragment>
	);
};

export default ReportDetails;
