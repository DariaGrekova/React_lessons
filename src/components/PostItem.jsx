import React from 'react';

const PostItem = (props) => {
	return (
		<div>
			<div className="post">
				<div className="post__content">
					<strong>{props.post.id}. {props.post.title}</strong>
					<p>{props.post.body}</p>
				</div>
				<div className="post__btn">
					<button>Удалить</button>
				</div>
			</div>
		</div>
	);
};

export default PostItem;