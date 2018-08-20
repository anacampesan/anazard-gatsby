import React from 'react';
import Link from 'gatsby-link';

import PostCard from '../components/post-card/post-card';

const IndexPage = () => (
  <div>
    <div className="container-fluid">
      <img src="http://anazard.me/assets/posts/default.jpg"></img>
      {/* <img src="http://anazard.me/assets/ana.png"/> */}
    </div>
    <div className="container">
      <h1>Welcome to anazard.me</h1>
      <div className="row">
        { posts.map((post, i) => {
          return (
            <div className="col-sm-4">
              <PostCard post={post} key={i}></PostCard>
            </div>
          );
        }) }
        </div>
    </div>
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
  }
];

export default IndexPage;