<template>
	<div class="mat-card">
		<div class="mat-card-left">
			<asset-image class="mat-img" :name="mat" />
		</div>
		<div class="mat-card-right">
			<h2>{{ mat }}</h2>
			<div class="mat-card-units">
				<asset-image
					v-for="u in units"
					class="mat-card-unit"
					:name="u"
					:key="u"
				/>
			</div>
			<div class="space" v-if="units.length && weapons.length"></div>
			<ul class="mat-card-weapons" v-if="weapons.length">
				<li class="mat-card-weapon" v-for="w in weapons" :key="w">
					{{ cap(w) }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Store from '../store';
import AssetImage from './AssetImage.vue';
import { cap } from '../util';
export default {
	props: {
		mat: String,
		units: Array,
		weapons: Array,
	},
	data() {
		return {
			Store,
		};
	},
	methods: {
		cap(str) {
			return cap(str);
		},
	},
	components: { AssetImage },
};
</script>

<style lang="scss">
.mat-card {
	display: flex;
	flex-direction: row;
	gap: 16px;
	padding: 1rem;

	.mat-img {
		height: 4rem;
		width: 4rem;
		filter: drop-shadow(0 4px 2px rgba(0, 0, 0, 0.1));
	}
	&-left {
		flex: 0 0 auto;
	}
	&-right {
		flex-grow: 1;
	}
	&-units {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 6px;
		img {
			image-rendering: -webkit-optimize-contrast;
		}
	}
	&-unit {
		height: 2rem;
	}
	&-weapons {
		text-align: left;

		padding: 0 0 0 18px;
		margin: 0;
	}
	&-weapon {
		font-size: 14px;
	}
	h2 {
		font-size: 1rem;
		text-transform: uppercase;
		margin: 0px;
		margin-bottom: 6px;
		text-align: left;
	}
}
.space {
	height: 8px;
}
</style>
