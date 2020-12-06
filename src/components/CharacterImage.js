import React from 'react';
import amber from '../assets/amber.png';
import chongyun from '../assets/chongyun.png';
import xingqiu from '../assets/xingqiu.png';
import fischl from '../assets/fischl.png';

const images = { amber, chongyun, xingqiu, fischl };

const CharacterImage = ({ id }) => {
	return <img src={images[id]}></img>;
};

export default CharacterImage;
