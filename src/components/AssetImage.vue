<template>
	<img class="asset-img" :src="images[name]" v-if="images[name]" :alt="name"/>
</template>

<script>
// Dynamic image import
const images = {};
const importAll = req => {
	req.keys().forEach(key => {
		// "./abc.png" to "abc"
		const imageName = key.substring(2).replace(/\..*$/, '');
		images[imageName] = req(key).default;
	});
};
importAll(require.context('../assets', false, /\.(png|webp)$/));

export default {
	props: {
		name: String,
	},
	data() {
		return { images };
	},
};
</script>

<style lang="scss" scoped>
.asset-img{
	object-fit: contain;
}
</style>></style>
