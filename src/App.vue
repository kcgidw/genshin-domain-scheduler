<template>
	<div id="app" :class="`theme-${Store.state.theme}`">
		<background :theme="Store.state.theme" />
		<nav class="top-nav">
			<button
				:class="{ selected: curTab === 'schedule' }"
				@click="clickNav('schedule')"
			>
				<calendar-icon size="1.25x" />schedule
			</button>
			<button
				:class="{ selected: curTab === 'materials' }"
				@click="clickNav('materials')"
			>
				<book-icon size="1.25x" />materials
			</button>
			<button
				:class="{ selected: curTab === 'roster' }"
				@click="clickNav('roster')"
			>
				<users-icon size="1.25x" />customize
			</button>
			<button
				:class="{ selected: curTab === 'about' }"
				@click="clickNav('about')"
			>
				<info-icon size="1.25x" />about
			</button>
		</nav>
		<main>
			<schedule v-show="curTab === 'schedule'" />
			<materials v-show="curTab === 'materials'" />
			<roster v-show="curTab === 'roster'" />
			<about v-show="curTab === 'about'" />
		</main>
	</div>
</template>

<script>
import Store from './store';
import Schedule from './components/schedule/Schedule.vue';
import Roster from './components/roster/Roster.vue';
import { CalendarIcon, BookIcon, UsersIcon, InfoIcon } from 'vue-feather-icons';
import About from './components/About.vue';
import Background from './components/Background.vue';
import Materials from './components/materials/Materials.vue';
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
	components: {
		Schedule,
		Roster,
		CalendarIcon,
		BookIcon,
		UsersIcon,
		InfoIcon,
		About,
		Background,
		Materials,
	},
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
		color: var(--nav);
		border-bottom: 2px solid transparent;
		font-size: 14px;

		&.selected {
			color: var(--nav-on);
			border-bottom: 2px solid var(--nav-acc);
		}

		&:hover:not(.selected),
		&:focus-visible:not(.selected) {
			color: var(--nav-on);
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
