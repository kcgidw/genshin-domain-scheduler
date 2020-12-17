import React, { useState } from 'react';
import Roster from './Roster';
import WeaponRoster from './WeaponRoster';
import { Tab, Tabs } from './Tabs';

const CustomizeView = ({
	selectedCharacters,
	selectedWeapons,
	onCharacterSelectionChange,
	onWeaponSelectionChange,
}) => {
	const [activeTab, setActiveTab] = useState('characters');

	const renderContent = () => {
		if (activeTab === 'characters') {
			return (
				<Roster
					selection={selectedCharacters}
					onSelectionChange={onCharacterSelectionChange}
				/>
			);
		}
		return (
			<WeaponRoster
				selection={selectedWeapons}
				onSelectionChange={onWeaponSelectionChange}
			/>
		);
	};

	return (
		<div id="customize" className="m-auto max-w-4xl section-card">
			<Tabs className="grid grid-cols-2 mb-4">
				<Tab
					isActive={activeTab === 'characters'}
					onClick={() => {
						setActiveTab('characters');
					}}
				>
					Characters
				</Tab>
				<Tab
					isActive={activeTab === 'weapons'}
					onClick={() => {
						setActiveTab('weapons');
					}}
				>
					Weapons
				</Tab>
			</Tabs>
			{renderContent()}
		</div>
	);
};

export default CustomizeView;
