import React from 'react';
import Link from 'gatsby-link';

import PostCard from '../components/post-card';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    { posts.map((post, i) => {
      return (
        <PostCard post={post} key={i}></PostCard>
      );
    }) }
  </div>
)
const posts = [
  {
    title: 'First post',
    headline: 'This is my first post',
    content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem'
  },
  {
    title: 'Second post',
    headline: 'This is my second post',
    content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem'
  },
  {
    title: 'Third post',
    headline: 'This is my third post',
    content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem'
  },
  {
    title: 'Fourth post',
    headline: 'This is my fourth post',
    content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem'
  }
];

export default IndexPage;