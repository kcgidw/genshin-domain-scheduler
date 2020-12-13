import getDay from 'date-fns/getDay';

const dayTitles = {
	monthur: 'Mon / Thur',
	tuefri: 'Tue / Fri',
	wedsat: 'Wed / Sat',
};

const list = Object.keys(dayTitles);

const getTitle = (day) => {
	return dayTitles[day];
};

const isToday = (day) => {
	return (
		['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'][getDay()] ===
		day.toLowerCase()
	);
};

export { list, getTitle, isToday };
