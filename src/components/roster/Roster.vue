<template>
	<div class="roster-container">
		<div class="roster card">
			<div class="roster-tabs">
				<button
					:class="{ 'roster-tab': true, selected: curTab === 'list' }"
					@click="switchRosterTab('list')"
				>
					<list-icon size="1x" />List view
				</button>
				<button
					:class="{ 'roster-tab': true, selected: curTab === 'grid' }"
					@click="switchRosterTab('grid')"
				>
					<grid-icon size="1x" />Grid view (units)
				</button>
				<button
					:class="{
						'roster-tab': true,
						selected: curTab === 'theme',
					}"
					@click="switchRosterTab('theme')"
				>
					<palette-icon />Theme
				</button>
			</div>
			<div class="roster-tab-body">
				<list-view v-show="curTab === 'list'" />
				<grid-view v-show="curTab === 'grid'" />
				<theme-view v-show="curTab === 'theme'" />
			</div>
		</div>
	</div>
</template>

<script>
import Store from '../../store';
import AssetImage from '../AssetImage.vue';
import { VueAutosuggest } from 'vue-autosuggest';
import ListItem from './ListItem.vue';
import ListView from './ListView.vue';
import GridView from './GridView.vue';
import { ListIcon, GridIcon } from 'vue-feather-icons';
import ThemeView from './ThemeView.vue';
import PaletteIcon from '../PaletteIcon.vue';
export default {
	data() {
		return {
			Store,
			curTab: 'list',
		};
	},
	methods: {
		switchRosterTab(t) {
			this.curTab = t;
		},
	},
	components: {
		AssetImage,
		VueAutosuggest,
		ListItem,
		ListView,
		ListIcon,
		GridIcon,
		GridView,
		ThemeView,
		PaletteIcon,
	},
};
</script>

<style lang="scss">
.roster-container {
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 32px 16px;

	@media screen and (max-width: 800px) {
		padding: 8px;
	}
}
.roster {
	flex-grow: 1;
	width: 100%;
	max-width: 50rem;
	display: flex;
	flex-direction: column;
}
.roster-tabs {
	padding: 1rem 2rem 0;
	display: flex;
	flex-direction: row;
	gap: 8px;
	background: var(--p7);

	button.roster-tab {
		padding: 8px 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent;
		border: 0;
		border-radius: 3px 3px 0 0;
		color: var(--p2);
		&.selected {
			color: var(--p0);
			background: var(--p5);
		}
		&:hover:not(.selected),
		&:focus-visible:not(.selected) {
			background: var(--p6);
		}

		svg {
			margin-right: 8px;
		}
	}
}
.roster-tab-body {
	flex-grow: 1;
}
.icon-tabler {
	height: 1rem;
	width: 1rem;
}
</style>
