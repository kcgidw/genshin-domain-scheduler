import getDay from 'date-fns/getDay';

const days = {
	monthur: 'monthur',
	tuefri: 'tuefri',
	wedsat: 'wedsat',
};

const list = Object.keys(days);

const todayIdx = getDay(new Date());

const isDayPairToday = (dayPair) => {
	switch (dayPair) {
		case 'monthur':
			return todayIdx === 1 || todayIdx === 4;
		case 'tuefri':
			return todayIdx === 2 || todayIdx === 5;
		case 'wedsat':
			return todayIdx === 3 || todayIdx === 6;
	}
	return false; // sunday
};

export { list, days, todayIdx, isDayPairToday };
