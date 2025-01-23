import React from 'react';

// Sample blog data to replace Jekyll's site.categories.blog
const blogPosts = [
  {
    date: '2023-01-15',
    excerpt: 'Sample blog post excerpt about government financial transparency...',
    url: '/blog/2023-01-15-sample-post'
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p>Blog posts on government financial transparency</p>

      <table>
        <tbody>
          {blogPosts.map((post, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</td>
                <td>{post.excerpt}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <a href={post.url}>go to details</a>
                </td>
              </tr>
              <tr>
                <td colSpan={2}><hr /></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogPage; 