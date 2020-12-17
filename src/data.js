import talentMats from './data/talentMats';
import weaponMats from './data/weaponMats';
import memoize from 'lodash/memoize';
import domains from './data/domains';
import characters from './data/characters';
import weapons from './data/weapons';

const getDomainData = memoize((matName) => {
	const domainName = Object.keys(domains).find((domainName) => {
		const domainData = domains[domainName];
		return Object.values(domainData.dropSchedule).includes(matName);
	});
	return domains[domainName]
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

// Returns true when mat is applicable for any chara in selection
const doesTalentMatApply = (matData, selection) => {
	return (
		matData.characters &&
		matData.characters.some((charaName) => selection[charaName])
	);
};
const doesWeaponMatApply = (matData, selection) => {
	return (
		matData.weapons &&
		Object.keys(matData.weapons).some((charaName) => selection[charaName])
	);
};

const getScheduledMatsForDay = (day, characters, weapons) => {
	return Object.keys(matsByDay[day])
		.filter((matName) => {
			const matData = getMatData(matName);
			if (matData) {
				return (
					doesTalentMatApply(matData, characters) ||
					doesWeaponMatApply(matData, weapons)
				);
			}
			return false;
		})
		.map(getMatData);
};

const getMatData = (name) => {
	const data = talentMats[name] || weaponMats[name];
	if (!data) {
		console.warn(`No matData for ${name}`);
	}
	return data;
};

const getSelectedCharactersForMat = (charaSelectionSet, matData) => {
	return Object.keys(charaSelectionSet)
		.filter((charaName) => {
			return matData.characters && matData.characters.includes(charaName);
		})
		.sort();
};

const getSelectedWeaponsForMat = (weaponSet, matData) => {
	return Object.keys(weaponSet)
		.filter((name) => {
			return matData.weapons && matData.weapons[name];
		})
		.sort();
};

const allCharacters = Object.values(characters);
const getAllCharacters = () => {
	return allCharacters;
};

const allWeapons = Object.keys(weapons)
	.sort()
	.map((wKey) => weapons[wKey]);
const getAllWeapons = () => {
	return allWeapons;
};

export {
	getAllCharacters,
	getAllWeapons,
	getDomainData,
	getScheduledMatsForDay,
	getSelectedCharactersForMat,
	getSelectedWeaponsForMat,
};
