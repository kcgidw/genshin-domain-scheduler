import memoize from 'lodash/memoize';
import domains from './data/domains';
import units from './data/units.json';
import weapons from './data/weapons.json';

const getDomainData = memoize((matName) => {
	const domainName = Object.keys(domains).find((domainName) => {
		const domainData = domains[domainName];
		return Object.values(domainData.dropSchedule).includes(matName);
	});
	return domains[domainName];
});

const matsByDay = {
	monthur: {},
	tuefri: {},
	wedsat: {},
};
Object.values(domains).forEach((domData) => {
	matsByDay.monthur[domData.dropSchedule.monthur] = true;
	matsByDay.tuefri[domData.dropSchedule.tuefri] = true;
	matsByDay.wedsat[domData.dropSchedule.wedsat] = true;
});

function getTalentMatFor(unitName) {
	return units.find((u) => u.name === unitName).talentMat;
}
function getAscMatFor(weaponName) {
	return weapons.find((w) => w.name === weaponName).ascMat;
}

const doesUnitUseMat = (unitName, talentMat) => {
	return units.find((u) => u.name === unitName).talentMat === talentMat;
};

// Returns true when mat is applicable for any chara in selection
const doesTalentMatApply = (matName, selection) => {
	return Object.keys(selection).some((unitName) =>
		doesUnitUseMat(unitName, matName)
	);
};

const doesWeaponUseMat = (weaponName, matName) => {
	return weapons.find((w) => w.name === weaponName).ascMat === matName;
};

const doesWeaponMatApply = (matName, selection) => {
	return Object.keys(selection).some((weaponName) =>
		doesWeaponUseMat(weaponName, matName)
	);
};

const getScheduledMatsForDay = (day, characters, weapons) => {
	return Object.keys(matsByDay[day]).filter((matName) => {
		return (
			doesTalentMatApply(matName, characters) ||
			doesWeaponMatApply(matName, weapons)
		);
	});
};

const getSelectedCharactersForMat = (charaSelectionSet, matId) => {
	return Object.keys(charaSelectionSet)
		.filter((u) => getTalentMatFor(u) === matId)
		.sort();
};

const getSelectedWeaponsForMat = (weaponSelectionSet, matId) => {
	return Object.keys(weaponSelectionSet)
		.filter((w) => getAscMatFor(w) === matId)
		.sort();
};

const allWeapons = Object.keys(weapons)
	.sort()
	.map((wKey) => weapons[wKey]);
const getAllWeapons = () => {
	return allWeapons;
};

export {
	getAllWeapons,
	getDomainData,
	getScheduledMatsForDay,
	getSelectedCharactersForMat,
	getSelectedWeaponsForMat,
};
