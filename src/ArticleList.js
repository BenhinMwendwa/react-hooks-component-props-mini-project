import React from 'react'

function ArticleList({posts}){
    const Article=posts.map((post) =>(
      <Article key={post.id}title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
    ))
  return (
  <main>
   {Article}
  </main>
  )
}

export default ArticleList
