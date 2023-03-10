import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({ title, stats }) => {
	const item = stats.map(stat => (
		<li className={css.item} key={stat.id}>
			<span className={css.label}>{stat.label}</span>
			<span className={css.percentage}>{stat.percentage}%</span>
		</li>
	));

	return (
		<section className={css.statistics}>
			{title && <h2 className={css.title}>{title}</h2>}

			<ul className={css.stat_list}>{item}</ul>
		</section>
	)
}
Statistics.defaultProps = {
	stats: [],
}

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired
		})
	),
};

export default Statistics;