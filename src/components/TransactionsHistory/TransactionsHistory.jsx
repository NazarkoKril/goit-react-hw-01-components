import React from 'react';
import PropTypes from 'prop-types';
import {
	Table,
	TableHeader,
	TableHeaderItem,
	TableBody,
} from './TransactionsHistory.style';
import { TransactionsHistoryItem } from 'components/TransactionsHistoryItem/TransactionsHistoryItem';

export const TransactionsHistory = ({ items }) => {
	return (
		<Table>
			<thead>
				<TableHeader>
					<TableHeaderItem>Type</TableHeaderItem>
					<TableHeaderItem>Amount</TableHeaderItem>
					<TableHeaderItem>Currency</TableHeaderItem>
				</TableHeader>
			</thead>

			<TableBody>
				{items.map(({ id, type, amount, currency }) => {
					return (
						<TransactionsHistoryItem
							key={id}
							type={type}
							amount={amount}
							currency={currency}
						/>
					);
				})}
			</TableBody>
		</Table>
	);
};
TransactionsHistory.prototype = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
		})
	),
};
