import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsCard } from 'components/StatisticsCard/StatisticsCard';
import { Container, Stat } from './Statistics.style';

export const Statistics = ({ data }) => {
	return (
		<Container>
			<h2 className="title">Upload Stats</h2>
			<Stat>
				{data.map(({ id, label, percentage }) => {
					return (
						<StatisticsCard key={id} label={label} percentage={percentage} />
					);
				})}
			</Stat>
		</Container>
	);
};

Statistics.prototype = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			data: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	),
};
