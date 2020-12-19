import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Image from './Image';
import { cap } from '../util';
import MatModal from './MatModal';

const MatCard = ({ data, domainData, characters = [], weapons = [] }) => {
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal(true);
	};
	const closeModal = () => {
		setShowModal(false);
	};

	const renderCharacters = () => {
		const inner = characters.map((charaName) => {
			return (
				<span className="h-8 my-0.5 mx-1" key={charaName}>
					<Image name={charaName}></Image>
				</span>
			);
		});
		return <div className="flex flex-row flex-wrap">{inner}</div>;
	};
	const renderWeapons = () => {
		return weapons.map((name) => {
			const inner = (
				<li className="text-xs tracking-wide">{cap(name)}</li>
			);
			return (
				<ul className="ml-4 list-disc font-mont" key={name}>
					{inner}
				</ul>
			);
		});
	};

	const cns = cn({
		'py-5 px-8 flex flex-row cursor-pointer transition-all hover:bg-gray-700': true,
	});

	return (
		<div className={cns} onClick={openModal}>
			<div className="h-16 w-16 mr-4 flex-shrink-0">
				<Image name={data.name} shadow></Image>
			</div>
			<div className="flex flex-col flex-grow">
				<h3 className="mb-1">{data.name.toUpperCase()}</h3>
				{renderCharacters()}
				{renderWeapons()}
			</div>
			<MatModal onClose={closeModal} isOpen={showModal}>
				<div className="text-center uppercase mb-8">
					<h1 className="mb-0">{data.name}</h1>
					<h3 className="text-gray-500">
						{characters.length
							? 'Talent material'
							: 'Weapon ascension material'}
					</h3>
					<div className="m-auto my-6 h-20 w-20 flex justify-center">
						<Image name={data.name} shadow></Image>
					</div>
				</div>
				<div className="mb-8">
					<span className="text-green-200">
						{cap(domainData.name)}
					</span>{' '}
					- {cap(domainData.location.join(', '))}
				</div>
				<div>
					<div className="mb-1">Use for:</div>
					<ul className="space-y-2">
						{characters.map((charaName) => {
							return (
								<li className="h-10" key={charaName}>
									<span className="inline mr-2">
										<Image name={charaName}></Image>
									</span>
									<span>{cap(charaName)}</span>
								</li>
							);
						})}
					</ul>
					<ul className="list-disc list-inside">
						{weapons.map((name) => {
							return (
								<li key={name}>
									<span>{cap(name)}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</MatModal>
		</div>
	);
};
MatCard.propTypes = {
	data: PropTypes.object.isRequired,
	characters: PropTypes.array,
	weapons: PropTypes.array,
};

export default MatCard;
