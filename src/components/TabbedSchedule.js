import React, { useState } from 'react';
import cn from 'classnames';
import getDay from 'date-fns/getDay';
import * as days from '../days';
import ScheduleColumnContent from './ScheduleColumnContent';
import { getScheduledMatsForDay } from '../data';

const renderDayTitle = (dayTuple, todayIdx) => {
	// const todayCn = (idx) => cn({ 'text-yellow-100': todayIdx === idx });
	const todayCn = () => '';
	switch (dayTuple) {
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
			console.warn(`Invalid day ${dayTuple}`);
	}
};

const ScheduleTab = ({ day, isActive, onClick }) => {
	const cns = cn('p-2 text-center bg-gray-800', {});
	const hCns = cn('mb-0 p-1 text-base rounded', {
		'text-gray-200 bg-gray-600': isActive,
		'text-gray-300': !isActive,
	});
	return (
		<div className={cns} onClick={onClick}>
			<h1 className={hCns}>{renderDayTitle(day, getDay(new Date()))}</h1>
		</div>
	);
};

const Schedule = ({ selectedCharacters, selectedWeapons }) => {
	const [activeTab, setActiveTab] = useState('monthur');

	const renderTabs = () => {
		return days.list.map((day) => {
			return (
				<ScheduleTab
					day={day}
					isActive={activeTab === day}
					key={day}
					onClick={() => setActiveTab(day)}
				/>
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
		<div id="tabbed-schedule" className="">
			<div id="tabbed-schedule-tabs" className="grid grid-cols-3">
				{renderTabs()}
			</div>
			<div className="pt-4 bg-gray-800">
				{renderTabContent(activeTab)}
			</div>
		</div>
	);
};
export default Schedule;
