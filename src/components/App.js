import React, { useState } from 'react';
import { useLocalStorage, useMedia } from 'react-use';
import Schedule from './Schedule';
import TabbedSchedule from './TabbedSchedule';
import NavButton from './NavButton';
import { Calendar, Info, Users } from 'react-feather';
import About from './About';
import CustomizeView from './CustomizeView';
import Placeholder from './Placeholder';

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
	const isWide = useMedia('(min-width: 768px)');

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
				if (isWide) {
					return (
						<Schedule
							selectedCharacters={selectedCharacters}
							selectedWeapons={selectedWeapons}
						></Schedule>
					);
				}
				return (
					<TabbedSchedule
						selectedCharacters={selectedCharacters}
						selectedWeapons={selectedWeapons}
					></TabbedSchedule>
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
				<NavButton
					isActive={view === viewKey}
					onClick={() => {
						setView(viewKey);
					}}
					icon={NavButtonIcons[viewKey]}
					label={viewKey}
					key={viewKey}
				></NavButton>
			);
		});
	};

	const renderPlaceholder = () => {
		if (
			!Object.keys(selectedCharacters).length &&
			!Object.keys(selectedWeapons).length
		) {
			return (
				<Placeholder
					onLink={() => {
						setView('customize');
					}}
				></Placeholder>
			);
		}
	};

	return (
		<div className="flex flex-col min-h-screen">
			<nav className="flex-grow-0 p-2 flex flex-row">
				{renderNavButtons()}
			</nav>
			<div id="main" className="flex-grow md:py-12">
				{view === 'schedule' && renderPlaceholder()}
				{renderView()}
			</div>
			<footer className="flex-grow-0 p-2 text-xs text-gray-200 opacity-30">
				This fansite is not affiliated with or endorsed by miHoYo.
			</footer>
		</div>
	);
};

export default App;
