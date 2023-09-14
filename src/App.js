import React, { useRef, useState } from "react";
//import ClassCounter from "./components/ClassCounter";
//import Counter from "./components/Counter";
import './styles/App.css'
//import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

	const [posts, setPosts] = useState([
		{ id: 1, title: 'Title', body: 'Description' },
		{ id: 2, title: 'Title 2', body: 'Description' },
		{ id: 3, title: 'Title 2', body: 'Description' },
	]);

	// Получаем post из дочернего компонента 
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			<PostList remove={removePost} posts={posts} title="Посты про JS" />

		</div>
	);
}

export default App;
