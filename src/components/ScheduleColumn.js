import React from 'react';
import cn from 'classnames';
import { getScheduledMatsForDay } from '../data';
import ScheduleColumnContent from './ScheduleColumnContent';
import ScheduleColumnHeader from './ScheduleColumnHeader';
import { todayIdx, isDayPairToday } from '../days';

const ScheduleColumn = ({ selectedCharacters, selectedWeapons, day }) => {
	const today = isDayPairToday(day);
	const sunday = todayIdx === 0;

	const cns = cn('max-w-xs relative flex-1 flex flex-col', {
		'opacity-70': !sunday && !today,
		'shadow-lg': today,
	});
	const bgCns = cn('w-full h-full absolute bg-cardbase', {
		'border-t border-columnheaderhighlight': today,
		'opacity-50': !sunday && !today,
	});
	const glowCns = cn('w-full h-full absolute z-10', {
		'column-glow': today,
	});

	return (
		<div key={day} className={cns}>
			<div className={bgCns}></div>
			<div className={glowCns}></div>
			<div className="z-10">
				<ScheduleColumnHeader
					day={day}
					key={`${day}-header`}
				></ScheduleColumnHeader>
				<ScheduleColumnContent
					selectedCharacters={selectedCharacters}
					selectedWeapons={selectedWeapons}
					mats={getScheduledMatsForDay(
						day,
						selectedCharacters,
						selectedWeapons
					)}
					key={day}
				></ScheduleColumnContent>
			</div>
		</div>
	);
};

export default ScheduleColumn;
