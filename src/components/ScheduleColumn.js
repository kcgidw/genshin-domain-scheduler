import React from 'react';
import {
	getScheduledMatsForDay,
	getSelectedCharactersForMat,
	getSelectedWeaponsForMat,
} from '../data';
import ScheduleColumnHeader from './ScheduleColumnHeader';
import MatCard from './MatCard';

const ScheduleColumn = ({ selectedCharacters, selectedWeapons, day }) => {
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
			<ScheduleColumnHeader
				day={day}
				key={`${day}-header`}
			></ScheduleColumnHeader>
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
