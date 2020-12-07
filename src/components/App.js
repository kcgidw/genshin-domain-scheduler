import React, { useState } from 'react';
import Roster from './Roster';
import Schedule from './Schedule';
import ViewTabButton from './ViewTabButton';

const Views = {
	schedule: 'schedule',
	configure: 'configure',
};

const App = () => {
	const [selectedCharacters, setSelectedCharacters] = useState({});
	const [view, setView] = useState(Views.schedule);
	const handleSelectionChange = (data) => {
		setSelectedCharacters(data);
	};
	const renderSchedule = () => {
		return <Schedule selection={selectedCharacters}></Schedule>;
	};
	const renderRoster = () => {
		return (
			<Roster
				selection={selectedCharacters}
				onSelectionChange={handleSelectionChange}
			></Roster>
		);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<nav className="flex-grow-0 flex flex-row space-x-4">
				<ViewTabButton
					isActive={view === Views.schedule}
					onClick={() => {
						setView(Views.schedule);
					}}
				>
					Schedule
				</ViewTabButton>
				<ViewTabButton
					isActive={view === Views.configure}
					onClick={() => {
						setView(Views.configure);
					}}
				>
					Configure
				</ViewTabButton>
			</nav>
			<div id="main" className="flex-grow grid p-16">
				{view === Views.schedule ? renderSchedule() : renderRoster()}
			</div>
			<footer className="flex-grow-0">footer here</footer>
		</div>
	);
};

export default App;
