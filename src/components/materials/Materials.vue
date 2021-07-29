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
	padding: 8px;

	.materials {
		margin: 8px;
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: repeat(3, minmax(15rem, 1fr));
		gap: 1rem;
		width: 100%;
		max-width: 65rem;
	}
}
</style>
