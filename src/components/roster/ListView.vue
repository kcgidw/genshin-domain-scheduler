<template>
	<div class="list-view">
		<div class="units">
			<chevron-down-icon class="dropdown" size="1.25x" />
			<vue-autosuggest
				id="search-units"
				class="search"
				:suggestions="uSuggestions"
				:get-suggestion-value="getSuggestionValue"
				:input-props="{
					id: 'units-input',
					placeholder: 'Add unit',
				}"
				@input="uInput"
				@selected="uSelect"
				:limit="5"
			>
				<template v-slot="{ suggestion }"
					><button class="suggestion">
						<asset-image :name="suggestion.item.name" />
						<span class="name">{{
							cap(suggestion.item.name)
						}}</span>
					</button>
				</template>
			</vue-autosuggest>
			<list-item
				v-for="uname in Store.state.units"
				:key="uname"
				:name="uname"
				@remove="uRemove(uname)"
			>
			</list-item>
		</div>
		<div class="weapons">
			<chevron-down-icon class="dropdown" size="1.25x" />
			<vue-autosuggest
				id="search-weapons"
				class="search"
				:suggestions="wSuggestions"
				:get-suggestion-value="getSuggestionValue"
				:input-props="{
					id: 'weapons-input',
					placeholder: 'Add weapon',
				}"
				@input="wInput"
				@selected="wSelect"
				:limit="5"
			>
				<template v-slot="{ suggestion }"
					><button class="suggestion">
						<span class="name">{{
							cap(suggestion.item.name)
						}}</span>
					</button>
				</template>
			</vue-autosuggest>
			<list-item
				v-for="wname in Store.state.weapons"
				:key="wname"
				:name="wname"
				@remove="wRemove(wname)"
			>
			</list-item>
		</div>
	</div>
</template>

<script>
import Store from '../../store';
import AssetImage from '../AssetImage.vue';
import { VueAutosuggest } from 'vue-autosuggest';
import ListItem from './ListItem.vue';
import { ChevronDownIcon } from 'vue-feather-icons';
import { cap } from '../../util';

function genSuggestions(list, qry = '') {
	const filtered = list.filter(item => item.name.startsWith(qry));
	return [{ data: filtered }];
}

export default {
	data() {
		return {
			Store,
			uQuery: '',
			wQuery: '',
			uSuggestions: genSuggestions(Store.getUnselectedUnits()),
			wSuggestions: genSuggestions(Store.getUnselectedWeapons()),
		};
	},
	watch: {
		'Store.state.units'() {
			this.uSuggestions = genSuggestions(Store.getUnselectedUnits());
		},
		'Store.state.weapons'() {
			this.wSuggestions = genSuggestions(Store.getUnselectedWeapons());
		},
	},
	methods: {
		uInput(qry) {
			this.uQuery = qry;
			this.uSuggestions = genSuggestions(Store.getUnselectedUnits(), qry);
		},
		wInput(qry) {
			this.wSuggestions = genSuggestions(
				Store.getUnselectedWeapons(),
				qry
			);
		},
		uSelect(sel) {
			Store.addUnit(sel.item.name);
			this.uSuggestions = genSuggestions(Store.getUnselectedUnits());
			const input = document.getElementById('units-input');
			input.value = '';
			input._value = '';
			input.dispatchEvent(new Event('input'));
		},
		wSelect(sel) {
			Store.addWeapon(sel.item.name);
			this.wSuggestions = genSuggestions(Store.getUnselectedWeapons());
			const input = document.getElementById('weapons-input');
			input.value = '';
			input._value = '';
			input.dispatchEvent(new Event('input'));
		},
		uRemove(name) {
			Store.removeUnit(name);
		},
		wRemove(name) {
			Store.removeWeapon(name);
		},
		cap(x) {
			return cap(x);
		},
		getSuggestionValue(sugg) {
			return cap(sugg.item.name);
		},
	},
	components: { AssetImage, VueAutosuggest, ListItem, ChevronDownIcon },
};
</script>

<style lang="scss">
.list-view {
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	padding: 1rem 2rem;
	gap: 3rem;

	> div {
		position: relative;
	}
}
.search {
	input {
		width: 100%;
		padding: 8px;
		border-radius: 3px;
		// border: solid 2px var(--p3);
		border: 0;
		color: var(--p6);
		background: var(--p1);

		&::placeholder {
			color: var(--p5);
		}
		&:focus {
			outline: 0;
			background: var(--p0);
		}
	}
}
.autosuggest__results-container {
	width: 100%;
	position: relative;
}
.autosuggest__results {
	position: absolute;
	top: -1px;
	width: 100%;
	border: solid 1px;
	border-radius: 3px;
	background: var(--p1);
	box-shadow: var(--shadow);
	z-index: 100;

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin: 0;
	}
}
.suggestion {
	width: 100%;
	height: 100%;
	padding: 8px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	border: 0;
	outline: 0;
	background-color: transparent;
	color: var(--p6);

	img {
		height: 2.5rem;
		object-fit: contain;
		image-rendering: -webkit-optimize-contrast;
	}
}
.autosuggest__results-item--highlighted {
	background-color: var(--acc0);
	.suggestion {
		background-color: var(--acc0);
	}
}
.dropdown {
	position: absolute;
	pointer-events: none;
	color: var(--p3);
	right: 4px;
	top: 8px;
}
</style>