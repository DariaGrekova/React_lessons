import React, { useRef, useState } from "react";
//import ClassCounter from "./components/ClassCounter";
//import Counter from "./components/Counter";
import './styles/App.css'
//import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {

	const [posts, setPosts] = useState([
		{id: 1, title: 'Title', body: 'Description'},
		{id: 2, title: 'Title 2', body: 'Description'},
		{id: 3, title: 'Title 2', body: 'Description'},
	]);

	const [title, setTitle] = useState('');
	const bodyInputRef = useRef();

	const addNewPost = (e) => {
		e.preventDefault();
		console.log(bodyInputRef.current.value)
	}
  return (
    <div className="App">
			<form>
				{/* управляемый компонент */}
				<MyInput value={title} onChange={event => setTitle(event.target.value)} type="text" placeholder="Название поста" />
				{/* неуправляемый/неконтролируемый компонент */}
				<MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" />
				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>

			<PostList posts={posts} title="Посты про JS" />

    </div>
  );
}

export default App;
