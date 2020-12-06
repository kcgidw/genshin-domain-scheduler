import React from 'react';
import { byDay } from '../data/talentMats';

const dayTitle = {
	monthur: 'Mon/Thur',
	tuefri: 'Tue/Fri',
	wedsat: 'Wed/Sat',
};

const ColHeader = ({ day }) => {
	return (
		<div className="h-16 border grid place-content-center">
			<span>{dayTitle[day]}</span>
		</div>
	);
};

const ColContent = ({ mats = [] }) => {};

const Schedule = ({ selection }) => {
	const renderCols = () => {
		return Object.keys(byDay).map((day) => {
			return (
				<div className="h-full" key={day}>
					<ColHeader day={day}></ColHeader>
				</div>
			);
		});
	};
	return (
		<div
			id="schedule"
			className="place-self-center grid grid-cols-3 h-full w-4/5 max-w-6xl divide-x border"
		>
			{renderCols()}
		</div>
	);
};
export default Schedule;
