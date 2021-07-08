<template>
	<div id="app">
		<nav class="top-nav">
			<button v-for="tab in tabs" :key="tab" @click="clickNav(tab)">
				{{ tab }}
			</button>
		</nav>
		<main>
			<schedule v-show="curTab === 'schedule'" />
			<roster v-show="curTab === 'roster'" />
		</main>
	</div>
</template>

<script>
import './main.css';
import Store from './store';
import Schedule from './components/schedule/Schedule.vue';
import Roster from './components/roster/Roster.vue';
export default {
	data() {
		return {
			Store,
			tabs: ['schedule', 'roster', 'about'],
			curTab: 'schedule',
		};
	},
	methods: {
		clickNav(tab) {
			this.curTab = tab;
		},
	},
	components: { Schedule, Roster },
};
</script>

<style lang="scss" scoped>
#app {
	overflow: hidden;
	display: flex;
	flex-direction: column;
	height: 100vh;
}

nav {
	display: flex;
	flex: 0 0 auto;
	gap: 8px;

	button {
		border: 0;
		background: none;
		text-transform: uppercase;
		cursor: pointer;
		padding: 12px;
	}
}
main {
	flex: 1 1 auto;
}
</style>
