import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getReportsFromStorage } from '../utils/localStorage';

const List = styled.ul`
  list-style-type: none;
`;

const ReportList: React.FC = () => {
	const [reports, setReports] = useState([]);

	useEffect(() => {
		setReports(getReportsFromStorage());
	}, []);

	return (
		<List>
			{reports.length ? reports.map((report: ({ country: { value: string }, tripStart: string}), idx) => <li key={`${report.country.value}${idx}`}>{report.country.value}{report.tripStart}</li>) : 'No reports'}
		</List>
	);
};

export default ReportList;
