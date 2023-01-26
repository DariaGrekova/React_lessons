import React from 'react';

class ClassCounter extends React.Component {

	// создаем конструктор

	constructor(props) {
		super(props);
		// инициализируем состояние
		this.state ={
			count: 0
		}

		// чтобы контекст компонента не терялся, нужно забиндить контекст в функции
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	// функции для изменения состояния, внутри класса не нужно объявление function

	increment() {
		// изменять состояние напрямую нельзя. вызываем setState, в параметры передаем новое состояние с измененными значениями
		this.setState({count: this.state.count + 1})
	}

	decrement () {
		this.setState({count: this.state.count - 1})

		}

	// в классовом компоненте jsx возвращается через render()
	// в классе для обращения к свойству нужно использовать this через состояние
	render() {
		return (
		<div>
			<h1>{this.state.count}</h1>
			<button onClick={this.increment}>Increment</button>
			<button onClick={this.decrement}>Decrement</button>
		</div>
		)
	}
}

export default ClassCounter;