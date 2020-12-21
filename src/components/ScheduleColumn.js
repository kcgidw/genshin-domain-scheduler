import React from 'react';
import { getScheduledMatsForDay } from '../data';
import ScheduleColumnContent from './ScheduleColumnContent';
import ScheduleColumnHeader from './ScheduleColumnHeader';

const ScheduleColumn = ({ selectedCharacters, selectedWeapons, day }) => {
	return (
		<div key={day} className="max-w-xs flex-1 flex flex-col section-card">
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
	);
};

export default ScheduleColumn;
