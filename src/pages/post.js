import React from "react";
import Helmet from "react-helmet";

import './post.css';
import '../assets/css/syntax.css';

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <div className="blog-post-container">
      {/* <Helmet title={`CodeStack - ${post.frontmatter.title}`} /> */}
        <div className="blog-post">
          {/* <h1>{post.frontmatter.title}</h1> */}
          {/* <strong>{post.frontmatter.date} by @{ post.frontmatter.author ? post.frontmatter.author : 'anazard' }</strong> */}
          <hr/>
          <div
            className="blog-post-content"
            // dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;