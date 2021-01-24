import React from 'react';
import cn from 'classnames';
import { getScheduledMatsForDay } from '../data';
import ScheduleColumnContent from './ScheduleColumnContent';
import ScheduleColumnHeader from './ScheduleColumnHeader';
import { todayIdx, isDayPairToday } from '../days';

const ScheduleColumn = ({ selectedCharacters, selectedWeapons, day }) => {
	const cns = cn(
		'max-w-xs flex-1 flex flex-col section-card border-t border-yellow-200',
		{
			'border-opacity-0': !isDayPairToday(day),
			'opacity-70': todayIdx !== 0 && !isDayPairToday(day),
			'shadow-lg border-opacity-80': isDayPairToday(day),
		}
	);
	const glowCns = cn({
		'column-glow': isDayPairToday(day),
	});
	console.log(isDayPairToday(day));
	return (
		<div key={day} className={cns}>
			<div className={glowCns}>
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
