import React from 'react'

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Blog</h1>
      {children}
    </div>
  )
}

export default BlogLayout