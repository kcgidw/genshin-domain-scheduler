<template>
	<div class="roster-item">
		<asset-image :name="name" />
		<span class="roster-item-label">{{ cap(name) }}</span>
		<button class="roster-item-delete" @click="remove">
			<x-icon />
		</button>
	</div>
</template>

<script>
import { cap } from '../../util';
import AssetImage from '../AssetImage.vue';
import { XIcon } from 'vue-feather-icons';
export default {
	components: { AssetImage, XIcon },
	props: { name: String },
	methods: {
		remove() {
			this.$emit('remove');
		},
		cap(x) {
			return cap(x);
		},
	},
};
</script>

<style lang="scss">
.roster-item {
	margin-top: 4px;
	padding: 8px;
	padding-right: 0;
	display: flex;
	align-items: center;

	img {
		height: 2rem;
		margin-right: 8px;
		image-rendering: -webkit-optimize-contrast;
	}
	&-label {
		flex-grow: 1;
		text-align: left;
	}
	button {
		border: 0;
		background: transparent;
		color: var(--x);
		&:hover,
		&:focus-visible {
			color: var(--red1);
		}
	}
}
</style>
