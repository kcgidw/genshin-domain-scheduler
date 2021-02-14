import React, { useState } from 'react';
import { Calendar, Info, Users } from 'react-feather';
import { useLocalStorage, useMedia } from 'react-use';
import { todayIdx } from '../days';
import About from './About';
import CustomizeView from './CustomizeView';
import NavButton from './NavButton';
import Notice from './Notice';
import Schedule from './Schedule';
import TabbedSchedule from './TabbedSchedule';

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

	const renderNotices = () => {
		const sunday = todayIdx === 0;
		const noData =
			!Object.keys(selectedCharacters).length &&
			!Object.keys(selectedWeapons).length;

		if (!sunday && !noData) return null;

		return (
			<div className="m-auto md:w-max mb-8">
				{noData && (
					<Notice>
						<span>
							You haven't set any characters or weapons yet.{' '}
						</span>
						<span
							className="fake-link"
							onClick={() => {
								setView(Views.customize);
							}}
						>
							Customize your schedule.
						</span>
					</Notice>
				)}
				{sunday && (
					<Notice>
						<span>It's Sunday - domain drops vary.</span>
					</Notice>
				)}
			</div>
		);
	};

	return (
		<div id="app-bg" className="dark">
			<div id="modal-target"></div>
			<div
				id="app-scrollable"
				className="flex flex-col h-screen overflow-y-auto"
			>
				<nav className="flex-grow-0 p-2 flex flex-row">
					{renderNavButtons()}
				</nav>
				<div id="main" className="flex-grow md:py-12">
					{view === 'schedule' && renderNotices()}
					{renderView()}
				</div>
				<footer className="flex-grow-0 p-2 text-xs text-white opacity-30">
					This fansite is not affiliated with or endorsed by miHoYo.
				</footer>
			</div>
		</div>
	);
};

export default App;
