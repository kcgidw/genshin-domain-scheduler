<template>
	<div :class="{ 'col card': true, today }">
		<schedule-header :dayPair="dayPair" />
		<mat-card v-for="m in mats" :key="m.name" :mat="m" />
		<div class="no-domains" v-if="!mats.length">
			No domains
		</div>
	</div>
</template>

<script>
import { isDayPairToday } from '../../days';
import Store from '../../store';
import MatCard from './MatCard.vue';
import ScheduleHeader from './ScheduleHeader.vue';
export default {
	components: { ScheduleHeader, MatCard },
	props: {
		dayPair: String,
	},
	data() {
		return { Store };
	},

	computed: {
		today() {
			return isDayPairToday(this.dayPair);
		},
		mats() {
			return Store.getScheduledMatsForDayPair(this.dayPair);
		},
	},
};
</script>

<style lang="scss">
.col {
	padding-bottom: 1rem;
	min-height: 15rem;
	display: flex;
	flex-direction: column;
	border-top: solid 4px transparent;
	&.today {
		border-top: solid 4px var(--acc2);
		position: relative;
		top: -2px;
	}
	&:not(.today) {
		opacity: 0.6;
		box-shadow: none;
	}
	.no-domains {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--p4);
		font-size: 18px;
	}
}
</style>
