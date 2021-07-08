import { reactive } from '@vue/reactivity';
import { toRaw } from '@vue/runtime-core';
import data from '../data';
const Store = {
	debug: true,

	state: reactive({
		units: localStorage.getItem('units') || [], // list of names
		weapons: localStorage.getItem('weapons') || [],
	}),

	setUnits(x) {
		this.state.units = x;
		localStorage.setItem('units', x);
	},

	setWeapons(x) {
		this.state.weapons = x;
		localStorage.setItem('weapons', x);
	},

	getUnselectedUnits() {
		return data.units.filter((u) => {
			return !this.state.units.includes(u.name);
		});
	},
};
console.log(toRaw(Store.state));
export default Store;
