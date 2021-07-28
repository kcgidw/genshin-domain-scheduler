<template
	><div class="mat-table-container card mat-col">
		<h1>{{ name }}</h1>
		<div class="mat-table">
			<mat-card
				v-for="m in mats"
				:key="m"
				:mat="m"
				:units="getUnits(m)"
				:weapons="getWeapons(m)"
			/>
		</div>
		<div class="no-data" v-if="!mats.length">No data</div>
	</div>
</template>

<script>
import Store from '../../store';
import MatCard from '../MatCard.vue';
import MatData from './MatData.vue';
export default {
	components: { MatData, MatCard },
	props: { name: String, field: String },
	computed: {
		mats() {
			const d = Store.getMatTableData(this.field);
			return Object.keys(d).sort();
		},
	},
	methods: {
		getUnits(matName) {
			return Store.getSelectedUnitsThatUse(this.field, matName);
		},
		getWeapons(matName) {
			return Store.getSelectedWeaponsThatUse(this.field, matName);
		},
	},
};
</script>

<style lang="scss">
.mat-col {
	padding-bottom: 1rem;
	.no-data {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 1rem;
		font-size: 18px;
		opacity: 0.6;
	}
}

.mat-table-container {
	max-width: 50rem;
	min-width: 25rem;
	text-align: left;

	h1 {
		text-align: center;
		padding: 2rem 0 2rem;
	}

	.mat-card {
		border-top: solid 1px var(--separator);
		padding: 24px 20px;
	}
}
</style>
