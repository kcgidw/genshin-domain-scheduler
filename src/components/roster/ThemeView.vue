<template>
	<div class="theme-view">
		<toggle-button
			class="theme-btn"
			v-for="t in themes"
			:key="t"
			:selected="Store.state.theme === t"
			@click="selectTheme(t)"
		>
			{{ cap(t) }}
		</toggle-button>
	</div>
</template>

<script>
import Store from '../../store';
import themes from '../../themes';
import { cap } from '../../util';
import ToggleButton from '../ToggleButton.vue';
export default {
	components: { ToggleButton },
	data() {
		return {
			Store,
			themes,
		};
	},
	methods: {
		selectTheme(x) {
			Store.setTheme(x);
		},
		cap(x) {
			return cap(x);
		},
	},
};
</script>

<style lang="scss">
.theme-view {
	padding: 2rem 2rem;
	text-align: left;
}
.theme-btn {
	margin: 0 8px;
	padding: 8px;
}
</style>
