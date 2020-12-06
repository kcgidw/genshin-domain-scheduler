const map = {
	amber: {},
	fischl: {},
	chongyun: {},
	xingqiu: {},
};

Object.keys(map).forEach((key) => {
	map[key].name = key;
});

const list = Object.values(map);

export default { map, list };
export { map, list };
