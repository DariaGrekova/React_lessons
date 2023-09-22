import React, { useRef, useState } from "react";
//import ClassCounter from "./components/ClassCounter";
//import Counter from "./components/Counter";
import './styles/App.css'
//import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";


function App() {

	const [posts, setPosts] = useState([
		{ id: 1, title: 'Title', body: 'Description' },
		{ id: 2, title: 'Title 2', body: 'Description' },
		{ id: 3, title: 'Title 2', body: 'Description' },
	]);

	const [selectedSort, setSelectedSort] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	function getSortedPosts() {
		console.log(4545)
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
		}
		return posts;
	}
	const sortedPosts = getSortedPosts();

	// Получаем post из дочернего компонента 
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const sortPosts = (sort) => {
		setSelectedSort(sort);
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{ margin: '20px 0' }} />
			<div>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue="Сортировка по"
					options={[
						{ value: "title", name: "По названию" },
						{ value: "body", name: "По описанию" }
					]} />
			</div>
			<MyInput
				placeholder="Поиск..."
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
			/>
			{posts.length !== 0
				? <PostList remove={removePost} posts={sortedPosts} title="Посты про JS" />
				: <h1 className="title">Посты не найдены!</h1>
			}


		</div>
	);
}

export default App;
