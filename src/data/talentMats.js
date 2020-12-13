const data = {
	freedom: {
		characters: [
			'amber',
			'barbara',
			'sucrose',
			'klee',
			'diona',
			'tartaglia',
		],
	},
	resistance: {
		characters: ['bennet', 'diluc', 'jean', 'mona', 'noelle', 'razor'],
	},
	ballad: {
		characters: ['fischl', 'kaeya', 'lisa', 'venti'],
	},
	prosperity: {
		characters: ['keqing', 'ningguang', 'qiqi'],
	},
	diligence: {
		characters: ['chongyun', 'xiangling'],
	},
	gold: {
		characters: ['xingqiu', 'beidou', 'zhongli', 'xinyan'],
	},
};

Object.keys(data).forEach((key) => {
	data[key].name = key;
});

export default data;
