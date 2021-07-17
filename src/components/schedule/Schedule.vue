<template>
	<div class="schedule-container">
		<div class="schedule">
			<column v-for="dt in dayPairs" :key="dt" :dayPair="dt" />
		</div>
	</div>
</template>

<script>
import Store from '../../store';
import { dayPairs } from '../../days';
import ScheduleHeader from './ScheduleHeader.vue';
import Column from './Column.vue';
export default {
	data() {
		return {
			Store,
			dayPairs,
		};
	},
	methods: {
		clickNav(tab) {
			this.curTab = tab;
		},
	},
	components: { ScheduleHeader, Column },
};
</script>

<style lang="scss" scoped>
.schedule-container {
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.schedule {
	margin: 8px;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: repeat(3, minmax(15rem, 1fr));
	grid-gap: 1rem;
	width: 100%;
	max-width: 60rem;
}
</style>
