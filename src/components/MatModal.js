import React from 'react';
import { createPortal } from 'react-dom';

const modalTarget = document.getElementById('modal-target');

const MatModal = ({ children, onClose, isOpen }) => {
	if (!isOpen) {
		return null;
	}
	const handleClick = (e) => {
		e.stopPropagation();
		onClose && onClose();
	};

	const component = (
		<div
			id="dialog-backdrop"
			className="top-0 left-0 h-screen w-screen p-4 fixed grid place-content-center bg-black bg-opacity-50 modal"
			onClick={handleClick}
		>
			<div className="max-w-sm overflow-y-auto rounded bg-gray-700 shadow-md">
				<div className="p-8">{children}</div>
			</div>
		</div>
	);
	return createPortal(component, modalTarget);
};

export default MatModal;
