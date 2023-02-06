import React from 'react';
import PropTypes from 'prop-types';
import css from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => {
	const elements = items.map(item => (
		<tr key={item.id}>
			<td>{item.type}</td>
			<td>{item.amount}</td>
			<td>{item.currency}</td>
		</tr>
	));
	return (
		<table className={css.transaction_history}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>
			<tbody>{elements}</tbody>
		</table>
	);
};
TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		})
	),
};

export default TransactionHistory;