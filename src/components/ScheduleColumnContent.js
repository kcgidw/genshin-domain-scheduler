import React from 'react';
import { getSelectedCharactersForMat, getSelectedWeaponsForMat } from '../data';
import MatCard from './MatCard';

const ScheduleColumnContent = ({
	selectedCharacters,
	selectedWeapons,
	mats = [],
}) => {
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

export default ScheduleColumnContent;
