import React, { useState } from 'react';
import cn from 'classnames';
import getDay from 'date-fns/getDay';
import * as days from '../days';
import ScheduleColumnContent from './ScheduleColumnContent';
import { getScheduledMatsForDay } from '../data';
import { Tab, Tabs } from './Tabs';

const renderDayTitle = (dayPair, todayIdx) => {
	const todayCn = (idx) => cn({ 'text-yellow-100': todayIdx === idx });
	switch (dayPair) {
		case 'monthur':
			return (
				<>
					<span className={todayCn(1)}>Mon</span>/
					<span className={todayCn(4)}>Thu</span>
				</>
			);
		case 'tuefri':
			return (
				<>
					<span className={todayCn(2)}>Tue</span>/
					<span className={todayCn(5)}>Fri</span>
				</>
			);
		case 'wedsat':
			return (
				<>
					<span className={todayCn(3)}>Wed</span>/
					<span className={todayCn(6)}>Sat</span>
				</>
			);
		default:
			console.warn(`Invalid day ${dayPair}`);
	}
};

const Schedule = ({ selectedCharacters, selectedWeapons }) => {
	const [activeTab, setActiveTab] = useState('monthur');

	const renderTabs = () => {
		return days.list.map((d) => {
			return (
				<Tab
					isActive={activeTab === d}
					onClick={() => {
						setActiveTab(d);
					}}
					key={d}
				>
					{renderDayTitle(d, getDay(new Date()))}
				</Tab>
			);
		});
	};

	const renderTabContent = () => {
		return (
			<div id="tabbed-schedule-content">
				<ScheduleColumnContent
					selectedCharacters={selectedCharacters}
					selectedWeapons={selectedWeapons}
					mats={getScheduledMatsForDay(
						activeTab,
						selectedCharacters,
						selectedWeapons
					)}
				></ScheduleColumnContent>
			</div>
		);
	};

	return (
		<div id="tabbed-schedule" className="bg-cardbase">
			<Tabs className="grid grid-cols-3">{renderTabs()}</Tabs>
			<div>{renderTabContent(activeTab)}</div>
		</div>
	);
};
export default Schedule;
