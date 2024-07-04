import React, { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [displayColor, setDisplayColor] = useState('black'); // Добавлено состояние для цвета текста на дисплее

	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const handleNumClick = (num) => {
		if (operator === '') {
			setOperand1((prevOperand) => prevOperand + num);
		} else {
			setOperand2((prevOperand) => prevOperand + num);
		}
	};

	const handleOperatorClick = (op) => {
		if (op === 'C') {
			setOperand1('');
			setOperator('');
			setOperand2('');
			setDisplayColor('black'); // Возвращаем исходный цвет при сбросе
		} else if (op === '=') {
			setDisplayColor('green'); // Устанавливаем цвет для результата
		} else {
			setOperator(op);
			setDisplayColor('black'); // Возвращаем исходный цвет при начале новой операции
		}
	};

	const calculateResult = () => {
		let result = 0;
		if (operator === '+') {
			result = parseInt(operand1) + parseInt(operand2);
		} else if (operator === '-') {
			result = parseInt(operand1) - parseInt(operand2);
		}
		return result;
	};

	return (
		<div className={styles.calculator}>
			<div className={styles.display} style={{ color: displayColor }}>
				{operand1} {operator} {operand2}
			</div>{' '}
			{/* Применяем цвет к тексту на дисплее */}
			<div className={styles.buttons}>
				{NUMS.map((num) => (
					<button key={num} onClick={() => handleNumClick(num)}>
						{num}
					</button>
				))}
				<button onClick={() => handleOperatorClick('+')}>+</button>
				<button onClick={() => handleOperatorClick('-')}>-</button>
				<button onClick={() => handleOperatorClick('=')}>=</button>
				<button onClick={() => handleOperatorClick('C')}>C</button>
			</div>
			<div className={styles.result}>{calculateResult()}</div>
		</div>
	);
};

export default App;
