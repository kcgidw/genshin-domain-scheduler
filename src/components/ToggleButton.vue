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
	background: var(--p5);
	color: var(--p2);
	border: solid 2px var(--p6);
	border-radius: 6px;

	&.selected {
		background: var(--acc1);
		color: var(--acc4);
		border-color: var(--acc3);

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
			background: var(--p4);
		}
	}
}
</style>
