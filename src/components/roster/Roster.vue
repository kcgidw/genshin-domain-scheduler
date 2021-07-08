<template>
	<div class="roster-container">
		<div class="roster">
			<div class="units">
				<AutoComplete
					v-model="selected"
					:suggestions="suggestions"
					@complete="search($event)"
					@item-select="select"
				>
					<template #item="{ item }"
						><div class="suggestion">
							<character-image :name="item.name" />
							{{ item.name }}
						</div></template
					>
				</AutoComplete>
			</div>
			<div class="weapons"></div>
		</div>
	</div>
</template>

<script>
import Store from '../../store';
import { dayTuples } from '../../days';
import CharacterImage from '../CharacterImage.vue';
import AutoComplete from 'primevue/autocomplete';
export default {
	data() {
		return {
			Store,
			dayTuples,
			selected: null,
			suggestions: null,
		};
	},
	methods: {
		search(e) {
			this.suggestions = Store.getUnselectedUnits()
				.filter((u) => u.name.includes(e.query))
				.slice(0, 3);
		},
		select() {
			this.selected = null;
		},
	},
	components: { AutoComplete, CharacterImage },
};
</script>

<style lang="scss">
.schedule-container {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.p-autocomplete {
	&-input {
		padding: 8px;
	}
	&-panel {
		border: solid 1px;
	}
	&-item {
		padding: 8px;
		&:hover {
			background: red;
		}
	}
}
</style>
