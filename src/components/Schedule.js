import React from 'react';
import { byDay } from '../data/talentMats';
import MatCard from './MatCard';

const dayTitle = {
	monthur: 'Mon/Thur',
	tuefri: 'Tue/Fri',
	wedsat: 'Wed/Sat',
};

const ColHeader = ({ day }) => {
	return (
		<div className="h-16 border grid place-content-center">
			<span>{dayTitle[day]}</span>
		</div>
	);
};

const ColContent = ({ mats = [] }) => {
	const renderMats = () => {
		return mats.map((mat) => <MatCard data={mat} key={mat.name}></MatCard>);
	};
	return <div className="min-h-full flex flex-col">{renderMats()}</div>;
};

const Schedule = ({ selection = {} }) => {
	const matHasApplicableCharacters = (mat) => {
		return mat.characters.some((charaName) => selection[charaName]);
	};
	const getApplicableMats = (day) => {
		return Object.values(byDay[day]).filter((mat) =>
			matHasApplicableCharacters(mat)
		);
	};
	const renderCols = () => {
		return Object.keys(byDay).map((day) => {
			return <ColHeader day={day} key={`${day}-header`}></ColHeader>;
		});
	};
	const renderColContent = () => {
		return Object.keys(byDay).map((day) => {
			return (
				<ColContent
					key={`${day}-content`}
					mats={getApplicableMats(day)}
				/>
			);
		});
	};
	return (
		<div
			id="schedule"
			className="place-self-center grid grid-cols-3 h-full w-4/5 max-w-6xl divide-x border"
		>
			{renderCols()}
			{renderColContent()}
		</div>
	);
};
export default Schedule;
