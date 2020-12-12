import React from 'react';
import { getScheduledMatsForDay } from '../data';
import MatCard from './MatCard';

const dayTitle = {
	monthur: 'Mon/Thur',
	tuefri: 'Tue/Fri',
	wedsat: 'Wed/Sat',
};

const ColHeader = ({ day }) => {
	return (
		<div className="h-16 grid place-content-center">
			<span>{dayTitle[day]}</span>
		</div>
	);
};

const Schedule = ({ selection = {} }) => {
	const ColContent = ({ mats = [] }) => {
		const renderMats = () => {
			return mats.map((mat) => (
				<MatCard
					selection={selection}
					data={mat}
					key={mat.name}
				></MatCard>
			));
		};
		return (
			<div className="min-h-full flex flex-col p-4">{renderMats()}</div>
		);
	};

	const renderCols = () => {
		return Object.keys(dayTitle).map((day) => {
			return (
				<div key={day} className="bg-black bg-opacity-20 border-0">
					<ColHeader day={day} key={`${day}-header`}></ColHeader>
					<ColContent
						mats={getScheduledMatsForDay(day, selection)}
						key={day}
					></ColContent>
				</div>
			);
		});
	};
	return (
		<div
			id="schedule"
			className="place-self-center grid grid-cols-3 space-x-4 h-full w-4/5 max-w-6xl"
		>
			{renderCols()}
		</div>
	);
};
export default Schedule;
