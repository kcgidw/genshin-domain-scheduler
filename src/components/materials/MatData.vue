<template>
	<tr class="row">
		<td class="col-img">
			<h2>{{ cap(matName) }}</h2>
			<asset-image class="row-mat-img" :name="matName" />
		</td>
		<td class="col-unit">
			<asset-image
				class="row-unit-img"
				v-for="u in matData.units"
				:key="u"
				:name="u"
			/>
		</td>
		<td class="col-weapons">
			<ul>
				<li v-for="w in matData.weapons" :key="w">{{ cap(w) }}</li>
			</ul>
		</td>
	</tr>
</template>

<script>
import { cap } from '../../util';
import AssetImage from '../AssetImage.vue';
export default {
	components: { AssetImage },
	props: { matName: String, matData: Array },
	methods: {
		cap(s) {
			return cap(s);
		},
	},
};
</script>

<style lang="scss">
.row {
	padding: 1rem;
	// width: min-content;
	// min-width: 12rem;
	// border-radius: 3px;
	// background: var(--mat-data-bg);

	> div {
		display: flex;
	}
	h2 {
		font-size: 1rem;
	}
	td {
		border: solid 1px var(--table-border);
		padding: 8px 1rem;
	}
	.row-mat-img {
		height: 4rem;
	}
	.row-unit-img {
		height: 2rem;
		image-rendering: -webkit-optimize-contrast;
	}
	ul {
		list-style-position: inside;
		padding: 0;
	}
}
</style>
