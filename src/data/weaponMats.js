const data = {
	decarabian: {
		weapons: {
			"apprentice's notes": true,
			'aquila favonia': true,
			'cool steel': true,
			'dull blade': true,
			'favonius codex': true,
			'favonius sword': true,
			'ferrous shadow': true,
			'magic guide': true,
			'pocket grimoire': true,
			'raven bow': true,
			'royal grimoire': true,
			'royal longsword': true,
			'silver sword': true,
			'the bell': true,
			'the stringless': true,
			'the viridescent hunt': true,
			'snow-tombed starsilver': true,
			'the alley flash': true,
		},
	},
	'boreal wolf': {
		weapons: {
			'alley hunter': true,
			'bloodtainted greatsword': true,
			deathmatch: true,
			'harbinger of dawn': true,
			"hunter's bow": true,
			"old merc's pal": true,
			'sacrificial bow': true,
			'sacrificial greatsword': true,
			"seasoned hunter's bow": true,
			"sharpshooter's oath": true,
			'skyward atlas': true,
			'skyward blade': true,
			'skyward harp': true,
			'skyward pride': true,
			'sword of descension': true,
			'the black sword': true,
			'the flute': true,
			'the widsith': true,
			'thrilling tales of dragon slayers': true,
			'waster greatsword': true,
			'wine and song': true,
			'dragonspine spear': true,
			'elegy for the end': true,
		},
	},
	'dandelion gladiator': {
		weapons: {
			"amos' bow": true,
			"beginner's protector": true,
			'favonius greatsword': true,
			'favonius lance': true,
			'favonius warbow': true,
			'iron point': true,
			'lost prayer to the sacred winds': true,
			'otherworldly story': true,
			'recurve bow': true,
			'royal bow': true,
			'royal greatsword': true,
			'sacrificial fragments': true,
			'sacrificial sword': true,
			'skyward spine': true,
			"traveler's handy sword": true,
			'white iron greatsword': true,
			"wolf's gravestone": true,
			'festering desire': true,
			frostbearer: true,
			'windblume ode': true,
		},
	},
	guyun: {
		weapons: {
			'blackcliff agate': true,
			'blackcliff longsword': true,
			'blackcliff warbow': true,
			'crescent pike': true,
			'dark iron sword': true,
			'emerald orb': true,
			"lion's roar": true,
			'primordial jade winged-spear': true,
			rust: true,
			slingshot: true,
			'solar pearl': true,
			'white tassel': true,
			whiteblind: true,
			'summit shaper': true,
			'lithic blade': true,
		},
	},
	elixir: {
		weapons: {
			'blackcliff slasher': true,
			'debate club': true,
			"dragon's bane": true,
			'eye of perception': true,
			'fillet blade': true,
			halberd: true,
			messenger: true,
			'prototype crescent': true,
			'prototype amber': true,
			'prototype rancour': true,
			rainslasher: true,
			'royal spear': true,
			'the unforged': true,
			'twin nephrite': true,
			'primordial jade cutter': true,
		},
	},
	aerosiderite: {
		weapons: {
			'black tassel': true,
			'compound bow': true,
			'iron sting': true,
			'mappa mare': true,
			'memory of dust': true,
			'prototype archaic': true,
			'prototype starglitter': true,
			'serpent spine': true,
			'skyrider greatsword': true,
			'skyrider sword': true,
			'vortex vanquisher': true,
			'lithic spear': true,
			'staff of homa': true,
		},
	},
};

Object.keys(data).forEach((key) => {
	data[key].name = key;
});

export default data;
