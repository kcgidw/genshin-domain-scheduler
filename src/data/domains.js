const data = {
	'forsaken rift': {
		location: ['springvale', 'mondstadt'],
		type: 'talent',
		dropSchedule: {
			monthur: 'freedom',
			tuefri: 'resistance',
			wedsat: 'ballad',
		},
	},
	'taishan mansion': {
		location: ['jueyun karst', 'liyue'],
		type: 'talent',
		dropSchedule: {
			monthur: 'prosperity',
			tuefri: 'diligence',
			wedsat: 'gold',
		},
	},
	'cecilia garden': {
		location: ['springvale', 'mondstadt'],
		type: 'weapon',
		dropSchedule: {
			monthur: 'decarabian',
			tuefri: 'boreal',
			wedsat: 'dandelion gladiator',
		},
	},
	'hidden palace of lianshan formula': {
		location: ['mingyun village', 'liyue'],
		type: 'weapon',
		dropSchedule: {
			monthur: 'guyun',
			tuefri: 'elixir',
			wedsat: 'aerosiderite',
		},
	},
};

Object.keys(data).forEach((key) => {
	data[key].name = key;
});

export default data;
