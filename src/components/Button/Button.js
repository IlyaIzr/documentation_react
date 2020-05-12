import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

/**
 * # Button
 * общее описание компонента, 
 * поддерживается разметка .md
 * 
 * Другие свойства:
 * @version 0.9.1
 * @author [Artem Sapegin](https://github.com/sapegin)
 * @author [Andy Krings-Stern](https://github.com/ankri)
 * @since 11.05.2020
 */
export default function Button({ color, size, onClick, disabled, children }) {
	const styles = {
		/** Здесь можно написать, что color принимает тип данных string */
		color,
		fontSize: Button.sizes[size],
	};

	return (
		<button className="button" style={styles} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}
/** Этот метод описывает типы props. Устаревший с 15 верссии Реакта, но с его помощью можно сделать таблицу
 * 	Таблица видна при нажатии кнопки `PROPS & METHODS`
 */
Button.propTypes = {
	/** Название кнопки */
	children: PropTypes.node.isRequired,
	/** Цвет кнопки */
	color: PropTypes.string,
	/** Размер кнопки (из принятых) */
	size: PropTypes.oneOf(['small', 'normal', 'large']),
	/** Отключена ли */
	disabled: PropTypes.bool,
	/** Функция для клика */
	onClick: PropTypes.func,
};
Button.defaultProps = {
	color: '#333',
	size: 'normal',
	onClick: event => {
		// eslint-disable-next-line no-console
		console.log('Кнопка нажата!', event.target);
	},
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};