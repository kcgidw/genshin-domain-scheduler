import React from 'react';
import Roster from './Roster';
import WeaponRoster from './WeaponRoster';

const CustomizeView = ({
	selectedCharacters,
	selectedWeapons,
	onCharacterSelectionChange,
	onWeaponSelectionChange,
}) => {
	return (
		<div
			id="configure"
			className="m-auto max-w-4xl flex flex-col space-y-8"
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

export default CustomizeView;