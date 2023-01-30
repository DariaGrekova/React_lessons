import React, { useState } from "react";
//import ClassCounter from "./components/ClassCounter";
//import Counter from "./components/Counter";
import './styles/App.css'
//import PostItem from "./components/PostItem";
import PostList from "./components/PostList";


function App() {

	const [posts, setPosts] = useState([
		{id: 1, title: 'Title', body: 'Description'},
		{id: 2, title: 'Title 2', body: 'Description'},
		{id: 3, title: 'Title 2', body: 'Description'},
	]);

	const [posts2, setPosts2] = useState([
		{id: 1, title: 'Title', body: 'Description 2'},
		{id: 2, title: 'Title 2', body: 'Description 2'},
		{id: 3, title: 'Title 2', body: 'Description 2'},
	])

  return (
    <div className="App">
			<PostList posts={posts} title={'Список постов 1'}/>
			<PostList posts={posts2} title={'Список постов 2'}/>

    </div>
  );
}

export default App;
