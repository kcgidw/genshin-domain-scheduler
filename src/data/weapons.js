const data = {};

Object.keys(data).forEach((key) => {
	data[key].name = key;
});

export default {
	map: data,
	list: Object.entries(data),
};
