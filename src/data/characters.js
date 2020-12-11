const map = {
	amber: {},
	fischl: {},
	chongyun: {},
	barbara: {},
	beidou: {},
	bennett: {},
	diluc: {},
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
	xiao: {},
	xingqiu: {},
};

Object.keys(map).forEach((key) => {
	map[key].name = key;
});

const list = Object.values(map);

export default { map, list };
export { map, list };
