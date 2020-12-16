import React from 'react';
import cn from 'classnames';
import getDay from 'date-fns/getDay';

const dayIdxs = {
	monthur: [1, 4],
	tuefri: [2, 5],
	wedsat: [3, 6],
};

const renderDayTitle = (dayTuple, todayIdx) => {
	const todayCn = (idx) => cn({ 'text-yellow-100': todayIdx === idx });
	switch (dayTuple) {
		case 'monthur':
			return (
				<>
					<span className={todayCn(1)}>Mon</span> /{' '}
					<span className={todayCn(4)}>Thur</span>
				</>
			);
		case 'tuefri':
			return (
				<>
					<span className={todayCn(2)}>Tue</span> /{' '}
					<span className={todayCn(5)}>Fri</span>
				</>
			);
		case 'wedsat':
			return (
				<>
					<span className={todayCn(3)}>Wed</span> /{' '}
					<span className={todayCn(6)}>Sat</span>
				</>
			);
		default:
			console.warn(`Invalid day ${dayTuple}`);
	}
};

const ScheduleColumnHeader = ({ day }) => {
	const todayIdx = getDay(new Date());
	const isToday = dayIdxs[day].includes(todayIdx);
	const cns = cn(
		'p-8 grid place-content-center bg-opacity-20 border-t-4 border-yellow-200',
		{
			'border-opacity-0': !isToday,
			'column-header-glow border-opacity-50': isToday,
		}
	);
	const headerCns = cn('m-0 text-gray-300', {});
	return (
		<div className={cns}>
			<h1 className={headerCns}>{renderDayTitle(day, todayIdx)}</h1>
		</div>
	);
};

export default ScheduleColumnHeader;
