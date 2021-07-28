<template
	><div class="materials-container">
		<div class="materials">
			<mat-table
				v-for="type in order"
				:key="type"
				:field="type"
				:name="typeLabels[type]"
			/>
		</div>
	</div>
</template>

<script>
import MatTable from './MatTable.vue';
const typeLabels = {
	common: 'Mob drops',
	elite: 'Elite mobs',
	talentBook: 'Talent books',
	asctMat: 'Weapon ascension',
	specialty: 'Local specialties',
	boss: 'Boss drops',
	weekly: 'Weekly drops',
};
export default {
	components: { MatTable },
	data() {
		return {
			order: ['common', 'elite', 'specialty'],
			typeLabels,
		};
	},
};
</script>

<style lang="scss">
.materials-container {
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem 1rem;

	@media screen and (max-width: 800px) {
		padding: 8px;
	}

	.materials {
		display: flex;
		gap: 2rem;
	}
}
</style>
