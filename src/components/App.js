import React, { useState } from 'react';
import { useLocalStorage } from 'react-use';
import Roster from './Roster';
import Schedule from './Schedule';
import ViewTabButton from './ViewTabButton';
import { Calendar, Info, Users } from 'react-feather';
import About from './About';

const Views = {
	schedule: 'schedule',
	configure: 'configure',
	about: 'about',
};

const NavButtonIcons = {
	[Views.schedule]: <Calendar size={16}></Calendar>,
	[Views.configure]: <Users size={16} />,
	[Views.about]: <Info size={16} />,
};

const App = () => {
	const [selectedCharacters, setSelectedCharacters] = useLocalStorage(
		'selectedCharacters',
		{}
	);
	const [view, setView] = useState(Views.schedule);
	const handleSelectionChange = (data) => {
		setSelectedCharacters(data);
	};

	const renderView = () => {
		switch (view) {
			case Views.schedule:
				return <Schedule selection={selectedCharacters}></Schedule>;
			case Views.configure:
				return (
					<Roster
						selection={selectedCharacters}
						onSelectionChange={handleSelectionChange}
					></Roster>
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
			<nav className="flex-grow-0 p-2 flex flex-row space-x-4">
				{renderNavButtons()}
			</nav>
			<div id="main" className="flex-grow grid p-16">
				{renderView()}
			</div>
			<footer className="flex-grow-0 p-2 text-xs text-gray-500">
				This fansite is not affiliated with or endorsed by miHoYo.
			</footer>
		</div>
	);
};

export default App;
