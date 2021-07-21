<template>
	<button
		:class="{
			'toggle-btn': true,
			'disable-off': disableToggleOff,
			selected,
		}"
		@click="click"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		selected: Boolean,
		disableToggleOff: Boolean, // Don't show hover styles for 'on' state
	},
	methods: {
		click(e) {
			this.$emit('click', e);
		},
	},
};
</script>

<style lang="scss">
.toggle-btn {
	background: transparent;
	color: var(--text);
	border: solid 2px var(--btn-border);
	border-radius: 6px;

	&.selected {
		color: var(--btn-on-text);
		background: var(--btn-on-bg);
		border-color: var(--btn-on-border);

		&:not(.disable-off) {
			&:hover,
			&:focus-visible {
				opacity: 0.7;
			}
		}
	}

	&:not(.selected) {
		&:hover,
		&:focus-visible {
			background: var(--btn-hover-bg);
		}
	}
}
</style>
