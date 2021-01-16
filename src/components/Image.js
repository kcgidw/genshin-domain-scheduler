import React from 'react';
import cn from 'classnames';

// Dynamic image import
const images = {};
const importAll = (req) => {
	req.keys().forEach((key) => {
		// "./abc.png" to "abc"
		const imageName = key.substring(2).replace(/\..*$/, '');
		images[imageName] = req(key).default;
	});
};
importAll(require.context('../assets', false, /\.(png|webp)$/));

const CharacterImage = ({ name, shadow }) => {
	const cns = cn('h-full object-contain inline', {
		'filter-shadow': shadow,
	});
	return <img className={cns} src={images[name]}></img>;
};

export default CharacterImage;
