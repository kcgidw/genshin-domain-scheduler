import { memoize } from 'lodash';
import data from '../data';

const getUnitData = memoize(name => {
	return data.units.find(u => u.name === name);
});

const getWeaponData = memoize(name => {
	return data.weapons.find(u => u.name === name);
});

function doesUnitUseBook(name, talentBook) {
	return getUnitData(name).talentBook === talentBook;
}
function doesWeaponUseMat(name, matName) {
	return getWeaponData(name).ascMat === matName;
}
function doAnyUnitsUseBook(names, book) {
	return names.some(n => doesUnitUseBook(n, book));
}
function doAnyWeaponsUseAscMat(names, matName) {
	return names.some(n => doesWeaponUseMat(n, matName));
}
export {
	doesUnitUseBook,
	getUnitData,
	getWeaponData,
	doAnyUnitsUseBook,
	doAnyWeaponsUseAscMat,
};
