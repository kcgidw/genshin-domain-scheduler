import React from 'react';
import ScheduleColumn from './ScheduleColumn';
import * as days from '../days';

const Schedule = ({ selectedCharacters, selectedWeapons }) => {
	const renderCols = () => {
		return days.list.map((day) => {
			return (
				<ScheduleColumn
					day={day}
					selectedCharacters={selectedCharacters}
					selectedWeapons={selectedWeapons}
					key={day}
				></ScheduleColumn>
			);
		});
	};

	return (
		<div
			id="schedule"
			className="place-self-center grid grid-cols-3 gap-x-4 h-full max-w-6xl"
		>
			{renderCols()}
		</div>
	);
};
export default Schedule;
