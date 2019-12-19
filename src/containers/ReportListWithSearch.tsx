import React, { useEffect, useState } from 'react';
import { getReportsFromStorage, removeReportFromStorage } from '../utils/localStorage';
import ReportList from '../components/ReportList';
import { useDebouncedCallback } from 'use-debounce';
import { ReportType } from '../types';

const ReportListWithSearch: React.FC = () => {
	const [reports, setReports] = useState([]);
	const [filteredReports, setFilteredReports] = useState(null);

	const onDeleteClick = (id: number) => {
		removeReportFromStorage(id);
		setReports(getReportsFromStorage());
	};

	useEffect(() => {
		setReports(getReportsFromStorage());
	}, []);

	const [debouncedCallback] = useDebouncedCallback(
		(value) => {
			if (value) {
				setFilteredReports(reports.filter((report: ReportType) =>
					report.tripDescription.toLowerCase().includes(value) || report.country.label.toLowerCase().includes(value)
				));
			} else {
				setFilteredReports(null);
			}
		},
		1000
	);

	return (
		<React.Fragment>
			<input type="search"
						 placeholder="Search reports..."
						 onChange={e => debouncedCallback(e.target.value)} />
			<ReportList reports={filteredReports || reports} handleDeleteClick={onDeleteClick}/>
		</React.Fragment>

	);
};

export default ReportListWithSearch;
