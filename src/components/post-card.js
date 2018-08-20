import React from 'react';
import Link from 'gatsby-link';

const PostCard = ({ post }) => (
    <div>
        <h1>{post.title}</h1>
        <h3>{post.headline}</h3>
        <p>{post.content}</p>
    </div>
);

export default PostCard;