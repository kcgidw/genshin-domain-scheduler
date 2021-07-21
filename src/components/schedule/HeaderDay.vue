<template>
	<span
		:class="{ 'schedule-header-day': true, today: todayIndex === dayIndex }"
	>
		{{ name }}
	</span>
</template>

<script>
import { todayIdx } from '../../days';

const names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default {
	props: { dayIndex: Number },
	computed: {
		todayIndex() {
			return todayIdx;
		},
		name() {
			return names[this.dayIndex];
		},
	},
};
</script>

<style lang="scss" scoped>
.schedule-header-day {
	// border-bottom: 2px solid transparent;
	&.today {
		color: var(--acc2);
		// border-bottom: 2px solid var(--acc2);
		// filter: drop-shadow(0 0 2px var(--acc2));
	}
}
</style>
