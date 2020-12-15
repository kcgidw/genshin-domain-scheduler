import React from 'react';
import {
	getScheduledMatsForDay,
	getSelectedCharactersForMat,
	getSelectedWeaponsForMat,
} from '../data';
import { getTitle } from '../days';
import MatCard from './MatCard';

const ColHeader = ({ day }) => {
	return (
		<div className="p-8 grid place-content-center">
			<h1 className="m-0">{getTitle(day)}</h1>
		</div>
	);
};

const ScheduleColumn = ({
	selectedCharacters,
	selectedWeapons,
	day,
	today,
}) => {
	const ColContent = ({ mats = [] }) => {
		const renderMats = () => {
			return mats.map((mat) => (
				<MatCard
					characters={getSelectedCharactersForMat(
						selectedCharacters,
						mat
					)}
					weapons={getSelectedWeaponsForMat(selectedWeapons, mat)}
					data={mat}
					key={mat.name}
				></MatCard>
			));
		};
		return <div className="pb-8">{renderMats()}</div>;
	};

	return (
		<div
			key={day}
			className="max-w-xs flex-grow bg-gray-800 border-0 shadow"
		>
			<ColHeader day={day} key={`${day}-header`}></ColHeader>
			<ColContent
				mats={getScheduledMatsForDay(
					day,
					selectedCharacters,
					selectedWeapons
				)}
				key={day}
			></ColContent>
		</div>
	);
};

export default ScheduleColumn;
