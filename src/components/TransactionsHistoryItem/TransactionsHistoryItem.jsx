import React from 'react';
import PropTypes from 'prop-types';
import {
	EachTransaction,
	EachTransactionItem,
} from './TransactionsHistoryItem.styled';

export const TransactionsHistoryItem = ({ type, amount, currency }) => {
	return (
		<EachTransaction>
			<EachTransactionItem>{type}</EachTransactionItem>
			<EachTransactionItem>{amount}</EachTransactionItem>
			<EachTransactionItem>{currency}</EachTransactionItem>
		</EachTransaction>
	);
};

TransactionsHistoryItem.propTypes = {
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
};
