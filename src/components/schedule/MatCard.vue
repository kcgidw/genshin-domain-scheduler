<template>
	<div class="mat-card">
		<div><img src="" alt="" /></div>
		<div>
			<h2>{{ mat.name }}</h2>
			<div></div>
		</div>
	</div>
</template>

<script>
import Store from '../../store';
export default {
	props: {
		mat,
	},
	data() {
		Store;
	},
	methods: {},
	components: {},
};
</script>

<style lang="scss" scoped></style>
