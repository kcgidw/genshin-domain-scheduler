<template>
	<div class="schedule-header">{{ name }}</div>
</template>

<script>
const names = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
export default {
	props: { dayIndex: Number },
	methods: {
		name() {
			return names[this.dayIndex];
		},
	},
};
</script>

<style lang="scss" scoped></style>
