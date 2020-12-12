import talentMats from './data/talentMats';
import weaponMats from './data/weaponMats';
import memoize from 'lodash/memoize';
import domains from './data/domains';

const getDomain = memoize((matName) => {
	return Object.keys(domains).find((domainName) => {
		const domainData = domains[domainName];
		return Object.values(domainData.dropSchedule).includes(matName);
	});
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

const doesMatApplyToCharacters = (matData, characters) => {
	return matData.characters.some((charaName) => characters[charaName]);
};

/**
 *
 * @param {string} day
 * @param {Object} characters - set of chara names
 * @returns {Array} - arr of matDatas
 */
const getScheduledMatsForDay = (day, characters) => {
	return Object.keys(matsByDay[day])
		.filter((matName) => {
			const matData = getMatData(matName);
			if (matData) {
				return doesMatApplyToCharacters(matData, characters);
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

const filterCharactersByMat = (charaSelectionSet, matName) => {
	return Object.keys(charaSelectionSet).filter((charaName) => {
		return getMatData(matName).characters.includes(charaName);
	});
};

export { getScheduledMatsForDay, filterCharactersByMat };
