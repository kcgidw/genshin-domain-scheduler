<template>
	<div class="schedule-container">
		<div class="schedule">
			<div class="col" v-for="dt in dayTuples" :key="dt">
				<div>{{ dt }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import Store from '../../store';
import { dayTuples } from '../../days';
export default {
	data() {
		return {
			Store,
			dayTuples,
		};
	},
	methods: {
		clickNav(tab) {
			this.curTab = tab;
		},
	},
	components: {},
};
</script>

<style lang="scss" scoped>
.schedule-container {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.schedule {
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: repeat(3, 20rem);
	grid-gap: 1rem;

	.col {
		padding: 1rem;
		border: solid 2px;
		border-radius: 4px;
	}
}
</style>
