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
		return <Schedule></Schedule>;
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
		<div className="flex flex-col h-full">
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
		</div>
	);
};

export default App;
