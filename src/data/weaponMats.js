const data = {
	decarabian: {
		characters: [],
	},
	boreal: {
		characters: [],
	},
	'dandelion gladiator': {
		characters: [],
	},
	guyun: {
		characters: [],
	},
	elixir: {
		characters: [],
	},
	aerosiderite: {
		characters: [],
	},
};

Object.keys(data).forEach((key) => {
	data[key].name = key;
});

export default data;
