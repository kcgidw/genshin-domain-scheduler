<template>
	<div class="grid-view">
		<div class="units">
			<toggle-button
				class="roster-btn"
				:selected="isUnitSelected(u.name)"
				v-for="u in units"
				:key="u.name"
				@click="select(u.name)"
			>
				<asset-image :name="u.name" />
				<span>{{ cap(u.name) }}</span>
			</toggle-button>
		</div>
	</div>
</template>

<script>
import data from '../../../data';
import Store from '../../store';
import { cap } from '../../util';
import AssetImage from '../AssetImage.vue';
import ToggleButton from '../ToggleButton.vue';
export default {
	components: { AssetImage, ToggleButton },
	data() {
		return {
			Store,
		};
	},
	computed: {
		units() {
			return data.units;
		},
	},
	methods: {
		cap(x) {
			return cap(x);
		},
		select(name) {
			Store.toggleUnit(name);
		},
		isUnitSelected(name) {
			return Store.isUnitSelected(name);
		},
	},
};
</script>

<style lang="scss">
.grid-view {
	padding: 2rem 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	.units {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		max-width: 43rem;
	}
}
.roster-btn {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 5.5rem;
	padding: 6px;
	// padding: 8px 0 4px 0;
	font-size: 12px;

	img {
		height: 3.5rem;
		margin-bottom: 4px;
	}
}
</style>
