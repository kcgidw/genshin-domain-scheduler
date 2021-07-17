import getDay from 'date-fns/getDay';

const dayPairs = ['mt', 'tf', 'ws'];

const todayIdx = getDay(new Date());

const isDayPairToday = dayPair => {
	switch (dayPair) {
		case 'mt':
			return todayIdx === 1 || todayIdx === 4;
		case 'tf':
			return todayIdx === 2 || todayIdx === 5;
		case 'ws':
			return todayIdx === 3 || todayIdx === 6;
	}
	return false; // sunday
};

export { dayPairs, todayIdx, isDayPairToday };
