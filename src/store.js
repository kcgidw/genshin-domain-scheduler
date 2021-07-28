import store from 'store2';
import data from '../data';
import {
	doAnyUnitsUseBook,
	doAnyWeaponsUseAscMat,
	getUnitData,
	getWeaponData,
} from './dataUtil';
import themes from './themes';

const Store = {
	debug: true,

	state: {
		units: store('units') || [], // list of names
		weapons: store('weapons') || [],
		theme: store('theme') || themes[0],
	},

	save() {
		store('units', this.state.units);
		store('weapons', this.state.weapons);
		store('theme', this.state.theme);
	},

	validate() {
		for (const n of this.state.units) {
			if (!data.units.some(u => u.name === n)) {
				console.warn('bad unit', n);
				this.state.units = [];
			}
		}
		for (const n of this.state.weapons) {
			if (!data.weapons.some(w => w.name === n)) {
				console.warn('bad weapon', n);
				this.state.weapons = [];
			}
		}
		if (!themes.includes(this.state.theme)) {
			console.warn('bad theme', this.state.theme);
			this.state.theme = themes[0];
		}
	},

	setTheme(x) {
		this.state.theme = x;
		this.save();
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

	isUnitSelected(name) {
		return this.state.units.includes(name);
	},
	toggleUnit(name) {
		this.isUnitSelected(name) ? this.removeUnit(name) : this.addUnit(name);
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
	getSelectedUnitsThatUse(fieldName, matName) {
		return this.state.units.filter(n => {
			return getUnitData(n)[fieldName] === matName;
		});
	},
	getSelectedWeaponsThatUse(fieldName, matName) {
		return this.state.weapons.filter(n => {
			return getWeaponData(n)[fieldName] === matName;
		});
	},

	getMatTableData(matType) {
		const d = {};
		this.state.units.forEach(uName => {
			const mat = getUnitData(uName)[matType];
			if (mat) {
				d[mat] ??= { units: [], weapons: [] };
				d[mat].units.push(uName);
			}
		});
		this.state.weapons.forEach(wName => {
			const mat = getWeaponData(wName)[matType];
			if (mat) {
				d[mat] ??= { units: [], weapons: [] };
				d[mat].weapons.push(wName);
			}
		});
		return d;
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
