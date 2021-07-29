<template>
	<div class="schedule-container">
		<div class="sunday card" v-if="isSunday">
			It's Sunday - domain drops vary.
		</div>
		<div class="schedule">
			<column v-for="dt in dayPairs" :key="dt" :dayPair="dt" />
		</div>
	</div>
</template>

<script>
import Store from '../../store';
import { dayPairs, todayIdx } from '../../days';
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
	computed: {
		isSunday() {
			return todayIdx === 0;
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
	flex-direction: column;
	padding: 8px;
}
.schedule {
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: repeat(3, minmax(15rem, 1fr));
	grid-gap: 1rem;
	width: 100%;
	max-width: 65rem;
}
.sunday {
	padding: 1rem 2rem;
	margin: 2rem;
}
</style>
