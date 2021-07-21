<template>
	<div id="app-bg-wrapper" ref="wrap"></div>
</template>

<script>
export default {
	props: {
		theme: String,
	},
	mounted() {
		const wrap = this.$refs.wrap;
		const newBg = document.createElement('div');
		newBg.classList.add('app-bg');
		newBg.classList.add('bg-' + this.theme);
		wrap.append(newBg);
	},
	watch: {
		theme() {
			const wrap = this.$refs.wrap;
			const newBg = document.createElement('div');
			newBg.classList.add('fade-bg');
			newBg.classList.add('app-bg');
			newBg.classList.add('bg-' + this.theme);
			wrap.append(newBg);

			while (wrap.children.length > 2) {
				wrap.removeChild(wrap.children[0]);
			}
		},
	},
};
</script>

<style lang="scss">
#app-bg-wrapper {
	position: absolute;
}
.app-bg {
	position: absolute;
	height: 100vh;
	width: 100vw;
	z-index: -100;
}
@keyframes fadeIn {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}
.fade-bg {
	animation: fadeIn;
	animation-duration: 0.1s;
}
</style>
