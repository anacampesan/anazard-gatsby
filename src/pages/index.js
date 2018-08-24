import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import PostCard from '../components/post-card/post-card';

import ana from '../assets/images/ana.png';

const IndexPage = ({data}) => (
  <div>
    <div className="jumbotron landing">
      <h4>welcome to</h4>
      <h1>anazard.me</h1>
      <img src={ana}></img>
    </div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <div className="container">
        <div className="row">
          { data.allMarkdownRemark.edges.map((post, i) => {
            return (
              <div className="col-sm-4">
                <PostCard post={post.node} key={i}></PostCard>
              </div>
            );
          }) }
          </div>
      </div>
    </div>
  </div>
)

export default IndexPage;

export const indexPosts = graphql`
  query IndexPosts {
    allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            date
            path
            title
            img
          }
        }
      }
    }
  }
`