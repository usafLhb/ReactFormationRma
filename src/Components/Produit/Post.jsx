import React ,{useState,useEffect, useContext} from 'react'
import { dataContext } from '../../Context/ContextProvider';
function Post() {
    const {post} = useContext(dataContext )

  return (
    <div>
      <h1>Post</h1> 
      <ul>
        {post.map(post => (
          <li key={post.id}>
            {post.title} ({post.body})
          </li>
        ))}
      </ul>  
    </div>
  )
}

export default Post
