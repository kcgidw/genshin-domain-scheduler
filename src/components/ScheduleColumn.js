import React from 'react';
import { getScheduledMatsForDay } from '../data';
import { getTitle } from '../days';
import MatCard from './MatCard';

const ColHeader = ({ day }) => {
	return (
		<div className="p-8 grid place-content-center">
			<h1>{getTitle(day)}</h1>
		</div>
	);
};

const ScheduleColumn = ({ selection, day }) => {
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
		return <div className="flex flex-col">{renderMats()}</div>;
	};

	return (
		<div key={day} className="bg-gray-800 border-0">
			<ColHeader day={day} key={`${day}-header`}></ColHeader>
			<ColContent
				mats={getScheduledMatsForDay(day, selection)}
				key={day}
			></ColContent>
		</div>
	);
};

export default ScheduleColumn;
