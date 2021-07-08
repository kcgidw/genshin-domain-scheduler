import getDay from 'date-fns/getDay';

const dayTuples = ['mt', 'tf', 'ws'];

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

export { dayTuples, todayIdx, isDayPairToday };
