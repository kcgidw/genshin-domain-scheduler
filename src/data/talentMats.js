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
		characters: [
			'bennett',
			'diluc',
			'jean',
			'mona',
			'noelle',
			'razor',
			'eula',
		],
	},
	ballad: {
		characters: ['fischl', 'kaeya', 'lisa', 'venti', 'albedo', 'rosaria'],
	},
	prosperity: {
		characters: ['keqing', 'ningguang', 'qiqi', 'xiao'],
	},
	diligence: {
		characters: ['chongyun', 'xiangling', 'ganyu', 'hu tao'],
	},
	gold: {
		characters: ['xingqiu', 'beidou', 'zhongli', 'xinyan', 'yanfei'],
	},
};

Object.keys(data).forEach((key) => {
	data[key].name = key;
});

export default data;
