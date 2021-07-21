<template>
	<div :class="{ 'schedule-header': true, today }">
		<h1>
			<header-day :dayIndex="days.a" />
			&nbsp;/&nbsp;
			<header-day :dayIndex="days.b" />
		</h1>
	</div>
</template>

<script>
import { isDayPairToday } from '../../days';
import HeaderDay from './HeaderDay.vue';
export default {
	components: { HeaderDay },
	props: {
		dayPair: String,
	},
	computed: {
		days() {
			switch (this.dayPair) {
				case 'mt':
					return { a: 1, b: 4 };
				case 'tf':
					return { a: 2, b: 5 };
				case 'ws':
					return { a: 3, b: 6 };
			}
		},
		today() {
			return isDayPairToday(this.dayPair);
		},
	},
};
</script>

<style lang="scss">
.schedule-header {
	color: var(--p3);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 0 2rem;

	h1 {
		margin: 0;
		width: max-content;
		display: flex;
	}
}
</style>
