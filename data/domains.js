const data = {
	'forsaken rift': {
		location: 'springvale, mondstadt',
		type: 'talent',
		dropSchedule: {
			mt: 'freedom',
			tf: 'resistance',
			ws: 'ballad',
		},
	},
	'taishan mansion': {
		location: 'jueyun karst, liyue',
		type: 'talent',
		dropSchedule: {
			mt: 'prosperity',
			tf: 'diligence',
			ws: 'gold',
		},
	},
	'cecilia garden': {
		location: 'springvale, mondstadt',
		type: 'weapon',
		dropSchedule: {
			mt: 'decarabian',
			tf: 'boreal wolf',
			ws: 'dandelion gladiator',
		},
	},
	'hidden palace of lianshan formula': {
		location: 'mingyun village, liyue',
		type: 'weapon',
		dropSchedule: {
			mt: 'guyun',
			tf: 'elixir',
			ws: 'aerosiderite',
		},
	},
	'violet court': {
		location: 'kannazuka, inazuma',
		type: 'talent',
		dropSchedule: {
			mt: 'transience',
			tf: 'elegance',
			ws: 'light',
		},
	},
	'court of flowing sand': {
		location: 'narukami island, inazuma',
		type: 'weapon',
		dropSchedule: {
			mt: 'branch of a distant sea',
			tf: 'narukami',
			ws: 'mask',
		},
	},
};

Object.keys(data).forEach(key => {
	data[key].name = key;
});

export default data;
