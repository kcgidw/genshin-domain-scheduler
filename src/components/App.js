import React, { useState } from 'react';
import { useLocalStorage } from 'react-use';
import Schedule from './Schedule';
import ViewTabButton from './ViewTabButton';
import { Calendar, Info, Users } from 'react-feather';
import About from './About';
import CustomizeView from './CustomizeView';

const Views = {
	schedule: 'schedule',
	customize: 'customize',
	about: 'about',
};

const NavButtonIcons = {
	[Views.schedule]: <Calendar size={16}></Calendar>,
	[Views.customize]: <Users size={16} />,
	[Views.about]: <Info size={16} />,
};

const App = () => {
	const [view, setView] = useState(Views.schedule);

	const [selectedCharacters, setSelectedCharacters] = useLocalStorage(
		'selectedCharacters',
		{}
	);
	const [selectedWeapons, setSelectedWeapons] = useLocalStorage(
		'selectedWeapons',
		{}
	);

	const handleCharacterSelectionChange = (data) => {
		setSelectedCharacters(data);
	};
	const handleWeaponSelectionChange = (data) => {
		setSelectedWeapons(data);
	};

	const renderView = () => {
		switch (view) {
			case Views.schedule:
				return (
					<Schedule
						selectedCharacters={selectedCharacters}
						selectedWeapons={selectedWeapons}
					></Schedule>
				);
			case Views.customize:
				return (
					<CustomizeView
						selectedCharacters={selectedCharacters}
						selectedWeapons={selectedWeapons}
						onCharacterSelectionChange={
							handleCharacterSelectionChange
						}
						onWeaponSelectionChange={handleWeaponSelectionChange}
					></CustomizeView>
				);
			case Views.about:
				return <About />;
			default:
				console.warn(`Invalid view ${view}`);
		}
	};

	const renderNavButtons = () => {
		return Object.keys(Views).map((viewKey) => {
			return (
				<ViewTabButton
					isActive={view === viewKey}
					onClick={() => {
						setView(viewKey);
					}}
					icon={NavButtonIcons[viewKey]}
					label={viewKey}
					key={viewKey}
				></ViewTabButton>
			);
		});
	};

	return (
		<div className="flex flex-col min-h-screen">
			<nav className="flex-grow-0 p-2 flex flex-row">
				{renderNavButtons()}
			</nav>
			<div id="main" className="flex-grow md:p-8">
				{renderView()}
			</div>
			<footer className="flex-grow-0 p-2 text-xs text-gray-500">
				This fansite is not affiliated with or endorsed by miHoYo.
			</footer>
		</div>
	);
};

export default App;
