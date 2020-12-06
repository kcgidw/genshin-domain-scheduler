const mondstadtDomain = ['mondstadt', 'springvale', 'forsaken rift'];
const liyueDomain = ['liyue', 'jueyun karst', 'taishan mansion'];

const map = {
	freedom: {
		days: 'monthur',
		domain: mondstadtDomain,
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
		days: 'tuefri',
		domain: mondstadtDomain,
		characters: ['bennet', 'dliuc', 'jean', 'mona', 'noelle', 'razor'],
	},
	ballad: {
		days: 'wedsat',
		domain: mondstadtDomain,
		characters: ['fischl', 'kaeya', 'lisa', 'venti'],
	},
	prosperity: {
		days: 'monthur',
		domain: liyueDomain,
		characters: ['keqing', 'ningguang', 'qiqi'],
	},
	diligence: {
		days: 'tuefri',
		domain: liyueDomain,
		characters: ['chongyun', 'xiangling'],
	},
	gold: {
		days: 'wedsat',
		domain: liyueDomain,
		characters: ['xingqiu', 'beidou', 'zhongli', 'xinyan'],
	},
};

Object.keys(map).forEach((key) => {
	map[key].name = key;
});

const byDay = {
	monthur: {},
	tuefri: {},
	wedsat: {},
};
Object.keys(map).forEach((key) => {
	const data = map[key];
	const day = data.days;
	byDay[day][key] = data;
});

const list = Object.entries(map);

export default {
	map,
	list,
	byDay,
};
export { map, list, byDay };
