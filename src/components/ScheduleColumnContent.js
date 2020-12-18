import React from 'react';
import {
	getDomainData,
	getSelectedCharactersForMat,
	getSelectedWeaponsForMat,
} from '../data';
import MatCard from './MatCard';

const ScheduleColumnContent = ({
	selectedCharacters,
	selectedWeapons,
	mats = [],
}) => {
	if (!mats.length) {
		return (
			<div className="h-16 flex-grow grid place-content-center">
				<h3 className="text-gray-500">No domain materials today</h3>
			</div>
		);
	}

	const renderMats = () => {
		return mats.map((mat) => (
			<MatCard
				characters={getSelectedCharactersForMat(
					selectedCharacters,
					mat
				)}
				weapons={getSelectedWeaponsForMat(selectedWeapons, mat)}
				data={mat}
				domainData={getDomainData(mat.name)}
				key={mat.name}
			></MatCard>
		));
	};
	return (
		<div className="m-auto md:m-0 max-w-sm md:max-w-full">
			{renderMats()}
		</div>
	);
};

export default ScheduleColumnContent;
