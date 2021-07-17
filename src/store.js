import store from 'store2';
import data from '../data';
import {
	doAnyUnitsUseBook,
	doAnyWeaponsUseAscMat,
	getUnitData,
	getWeaponData,
} from './dataUtil';

const Store = {
	debug: true,

	state: {
		units: store('units') || [], // list of names
		weapons: store('weapons') || [],
	},

	save() {
		store('units', this.state.units);
		store('weapons', this.state.weapons);
	},

	validate() {
		for (const n of this.state.units) {
			if (!data.units.some(u => u.name === n)) {
				console.warn('bad unit', n);
			}
		}
		for (const n of this.state.weapons) {
			if (!data.weapons.some(w => w.name === n)) {
				console.warn('bad weapon', n);
			}
		}
	},

	setUnits(x) {
		this.state.units = x;
		this.save();
	},

	setWeapons(x) {
		this.state.weapons = x;
		this.save();
	},

	addUnit(name) {
		if (!this.state.units.includes(name)) {
			this.setUnits([...this.state.units, name].sort());
		}
	},

	addWeapon(name) {
		if (!this.state.weapons.includes(name)) {
			this.setWeapons([...this.state.weapons, name].sort());
		}
	},
	removeUnit(name) {
		this.setUnits(this.state.units.filter(n => n !== name));
	},
	removeWeapon(name) {
		this.setWeapons(this.state.weapons.filter(n => n !== name));
	},
	getUnselectedUnits() {
		return data.units.filter(u => {
			return !this.state.units.includes(u.name);
		});
	},

	getUnselectedWeapons() {
		return data.weapons.filter(w => {
			return !this.state.weapons.includes(w.name);
		});
	},
	getScheduledMatsForDayPair(dp) {
		return Object.values(data.matsByDay[dp]).filter(matName => {
			return (
				doAnyUnitsUseBook(this.state.units, matName) ||
				doAnyWeaponsUseAscMat(this.state.weapons, matName)
			);
		});
	},
	getSelectedUnitsForBook(book) {
		return this.state.units.filter(n => {
			return getUnitData(n).talentBook === book;
		});
	},
	getSelectedWeaponsForMat(matName) {
		return this.state.weapons.filter(n => {
			return getWeaponData(n).ascMat === matName;
		});
	},
};

console.log(Store.state);
console.log(data);
Store.validate();

window.clearStore = () => {
	Store.setUnits([]);
	Store.setWeapons([]);
};
export default Store;
