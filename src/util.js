import capitalize from 'lodash/capitalize';

// Mimics _.startCase but keeps punctuation (i.e. apostrophes)
const cap = (str) => {
	return str
		.split(' ')
		.map((substr) => {
			if (['of', 'to', 'the'].includes(substr)) {
				return substr;
			}
			return capitalize(substr);
		})
		.join(' ');
};
export { cap };
