import React from 'react';
import styled from 'styled-components';
import { ReportTypeProps } from '../types';
import Button from './Button';

const Article = styled.article`
	width: 90vw;
	background-color: white;
	margin-top: 1rem;
	padding: 1rem;
	box-shadow: .5px .1px 10px -1px #ccc;
	border-left: 4px solid gray;
	cursor: pointer;
	
	&:hover {
		transform: scale(1.01);
		transition: .5s;
	}
`;

const TripInfo = styled.span`
	font-weight: normal;
`;

const TripStartDate = styled.p`
	color: gray;
	font-size: .8rem;
`;

const ReportPreview: React.FC<ReportTypeProps> = ({ data, handleDeleteClick, handleReportClick }) => {
	const { country, tripDescription, tripDestination, tripDuration, tripStartDate, friendsList, id } = data;

	const renderTripDuration = () => `(duration: ${tripDuration} day${tripDuration === '1' ? '' : 's'})`;

	return (
		<React.Fragment>
			<Article onClick={handleReportClick}>
				<TripStartDate>
					{tripStartDate} {tripDuration ? <TripInfo>{renderTripDuration()}</TripInfo> : ''}
				</TripStartDate>
				<h3>
					{country.label} {tripDestination ? <TripInfo>({tripDestination})</TripInfo> : ''}
				</h3>
				<p>
					{tripDescription}
				</p>
				<p>
					Travel companions: {friendsList.length ? friendsList.join(', ') : 'no one'}
				</p>
			</Article>
			<Button onClick={() => handleDeleteClick(id)}
							variant="cancel"
							label="Delete"
			/>
		</React.Fragment>
	);
};

export default ReportPreview;
