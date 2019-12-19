import React from 'react';
import styled from 'styled-components';
import ReportPreview from './ReportPreview';
import { ReportListType } from "../types";
import { useHistory } from 'react-router-dom';

const List = styled.div`
  list-style-type: none;
`;

const ReportList: React.FC<ReportListType> = ({ reports, handleDeleteClick }) => {
	const history = useHistory();
	const onReportClick = (id: number) => {
		history.push(`/report/${id}`);
	};

	return (
		<List>
			{reports.length ?
				reports.map((report, idx) =>
					<ReportPreview key={idx}
												 data={report}
												 handleDeleteClick={handleDeleteClick}
												 handleReportClick={() => onReportClick(report.id)}
				/>)
				: 'No reports'}
		</List>
	);
};

export default ReportList;
