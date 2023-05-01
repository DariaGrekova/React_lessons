import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => { //передаем пропс чилдрен для отображения текста внутри кнопки и остальные пропсы
	return (
		// разворачиваем объект пропсов в кнопке, чтобы она получила все пропсы компонента
		<button {...props} className={classes.myBtn}> 
			{children}
		</button>
	);
};

export default MyButton;