<template>
	<div id="app" class="light">
		<nav class="top-nav">
			<button
				:class="{ selected: curTab === 'schedule' }"
				@click="clickNav('schedule')"
			>
				<calendar-icon size="1.5x" />schedule
			</button>
			<button
				:class="{ selected: curTab === 'roster' }"
				@click="clickNav('roster')"
			>
				<users-icon size="1.5x" />customize
			</button>
			<button
				:class="{ selected: curTab === 'about' }"
				@click="clickNav('about')"
			>
				<info-icon size="1.5x" />about
			</button>
		</nav>
		<main>
			<schedule v-show="curTab === 'schedule'" />
			<roster v-show="curTab === 'roster'" />
			<about v-show="curTab === 'about'" />
		</main>
	</div>
</template>

<script>
import Store from './store';
import Schedule from './components/schedule/Schedule.vue';
import Roster from './components/roster/Roster.vue';
import { CalendarIcon, UsersIcon, InfoIcon } from 'vue-feather-icons';
import About from './components/About.vue';
export default {
	data() {
		return {
			Store,
			curTab: 'schedule',
		};
	},
	methods: {
		clickNav(tab) {
			this.curTab = tab;
		},
	},
	computed: {},
	components: { Schedule, Roster, CalendarIcon, UsersIcon, InfoIcon, About },
};
</script>

<style lang="scss" scoped>
#app {
	overflow-y: auto;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	height: 100vh;
}

nav {
	display: flex;
	flex: 0 0 auto;
	// background: var(--p8);

	button {
		margin: 8px;
		padding: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0;
		background: none;
		text-transform: uppercase;
		cursor: pointer;
		color: var(--p3);
		border-bottom: 2px solid transparent;
		font-size: 12px;

		&.selected {
			color: var(--p0);
			border-bottom: 2px solid var(--p3);
		}

		&:hover:not(.selected),
		&:focus-visible:not(.selected) {
			color: var(--p1);
		}

		svg {
			margin-right: 4px;
		}
	}
}
main {
	flex: 1 1 auto;
	overflow-x: auto;
}
</style>
