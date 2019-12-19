import React from 'react';
// import styled from 'styled-components';
import { ReportTypeProps } from '../types';

const ReportPreview: React.FC<ReportTypeProps> = ({ data, handleDeleteClick, handleReportClick }) => {
	const { country, tripDescription, tripDestination, tripDuration, tripStart, friendsList, id } = data;

	return (
		<React.Fragment>
			<article onClick={handleReportClick}>
				<h2>
					{country && country.label}
				</h2>
				<p>
					{tripDescription}
				</p>
				<p>
					{tripDestination}
				</p>
				<p>
					{tripDuration}
				</p>
				<p>
					{tripStart}
				</p>
				<p>
					{friendsList && friendsList.join(', ')}
				</p>
			</article>
			<button onClick={() => handleDeleteClick(id)}>
				Delete
			</button>
		</React.Fragment>
	);
};

export default ReportPreview;
