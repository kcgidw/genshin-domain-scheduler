import React from 'react';
import Roster from './Roster';
import WeaponRoster from './WeaponRoster';

const Configure = ({
	selectedCharacters,
	selectedWeapons,
	onCharacterSelectionChange,
	onWeaponSelectionChange,
}) => {
	return (
		<div
			id="configure"
			className="justify-self-center max-w-4xl flex flex-col space-y-8"
		>
			<Roster
				selection={selectedCharacters}
				onSelectionChange={onCharacterSelectionChange}
			/>
			<WeaponRoster
				selection={selectedWeapons}
				onSelectionChange={onWeaponSelectionChange}
			/>
		</div>
	);
};

export default Configure;
