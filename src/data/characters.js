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
	xinyan: {},
	zhongli: {},
};

Object.keys(map).forEach((key) => {
	map[key].name = key;
});

export default map;
