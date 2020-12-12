import React from 'react';
import amber from '../assets/amber.png';
import barbara from '../assets/barbara.png';
import beidou from '../assets/beidou.png';
import bennett from '../assets/bennett.png';
import chongyun from '../assets/chongyun.png';
import diluc from '../assets/diluc.png';
import fischl from '../assets/fischl.png';
import kaeya from '../assets/kaeya.png';
import jean from '../assets/jean.png';
import keqing from '../assets/keqing.png';
import klee from '../assets/klee.png';
import lisa from '../assets/lisa.png';
import mona from '../assets/mona.png';
import ningguang from '../assets/ningguang.png';
import noelle from '../assets/noelle.png';
import razor from '../assets/razor.png';
import qiqi from '../assets/qiqi.png';
import sucrose from '../assets/sucrose.png';
import venti from '../assets/venti.png';
import xiangling from '../assets/xiangling.png';
import xiao from '../assets/xiao.png';
import xingqiu from '../assets/xingqiu.png';

const images = {
	amber,
	barbara,
	beidou,
	bennett,
	chongyun,
	diluc,
	fischl,
	kaeya,
	jean,
	keqing,
	klee,
	lisa,
	mona,
	ningguang,
	noelle,
	qiqi,
	razor,
	sucrose,
	venti,
	xiangling,
	xiao,
	xingqiu,
};

const CharacterImage = ({ name }) => {
	return <img className="h-full" src={images[name]}></img>;
};

export default CharacterImage;
