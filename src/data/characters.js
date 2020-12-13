const map = {
	amber: {},
	barbara: {},
	beidou: {},
	bennett: {},
	chongyun: {},
	diluc: {},
	fischl: {},
	kaeya: {},
	jean: {},
	keqing: {},
	klee: {},
	lisa: {},
	mona: {},
	ningguang: {},
	noelle: {},
	qiqi: {},
	razor: {},
	sucrose: {},
	venti: {},
	xiangling: {},
	// xiao: {},
	xingqiu: {},
};

Object.keys(map).forEach((key) => {
	map[key].name = key;
});

const list = Object.values(map);

export default { map, list };
export { map, list };
