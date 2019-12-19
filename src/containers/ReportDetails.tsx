import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import useFetchCountries from '../hooks/useFetchCountries';
import { addReportToStorage, editReportFromStorage, getSingleReportFromStorage} from '../utils/localStorage';
import { useHistory, useParams } from "react-router-dom";
import MonthPicker from '../components/form/MonthPicker';
import RadioBox from '../components/form/RadioBox';
import NumberField from '../components/form/NumberField';
import TextArea from "../components/form/Textarea";
import CheckboxBoxGroup from "../components/form/CheckboxGroup";

const friendsList = ['Samantha', 'Claire', 'Tom'];
const emptyReport = {
	country: { value: "POL", label: "Poland" },
	tripStartDate: "",
	tripDuration: "",
	tripDescription: "",
	friendsList: [],
	destination: "",
	id: Date.now()
};

const ReportDetails: React.FC = () => {
	const history = useHistory();
	const { id } = useParams();
	const countries = useFetchCountries();
	const isAddMode = id === 'add';

	const [state, setState] = useState(emptyReport);

	useEffect(() => {
		if (isAddMode) {
			setState(emptyReport);
		} else {
			setState(getSingleReportFromStorage(id));
		}
	}, [id, isAddMode]);

	const handleSelectChange = (country: any) => setState({ ...state, country });

	const handleCheckboxChange = (value: string[], name: string) => setState({ ...state, [name]: value });

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { value, name } = evt.target;
		setState({
			...state,
			[name]: value
		});
	};

	const handleSubmit = () => {
		if (isAddMode) {
			addReportToStorage([state]);
		} else {
			editReportFromStorage(state)
		}
		history.push('/');
	};

	return (
		<React.Fragment>
			<Select options={countries}
							autoFocus
							name="country"
							value={state.country}
							placeholder="Select Country..."
							onChange={handleSelectChange}
			/>
			<MonthPicker id="trip-start"
									 name="tripStartDate"
									 value={state.tripStartDate}
									 onChangeInput={handleChange}
			/>
			<NumberField id="trip-duration"
									 name="tripDuration"
									 value={state.tripDuration}
									 label="Trip duration (days):"
									 onChangeInput={handleChange}
			/>
			<TextArea id="trip-description"
								name="tripDescription"
								value={state.tripDescription}
								onChangeInput={handleChange}
			/>
			<CheckboxBoxGroup ids={friendsList}
												name="friendsList"
												value={state.friendsList}
												onChangeInput={handleCheckboxChange}
			/>
			<RadioBox ids={['Transit', 'Destination']}
								name="destination"
								value={state.destination}
								onChangeInput={handleChange}/>

			<button onClick={handleSubmit}>{isAddMode ? 'Add': 'Edit'} report</button>

		</React.Fragment>
	);
};

export default ReportDetails;
