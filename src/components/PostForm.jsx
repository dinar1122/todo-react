import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

export default function PostForm({create}) {
  const [post, setPost] = useState({title: '', body: ''})

  function addPost(event) {
    event.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form style={{padding: 20}}>
        
        <MyInput
          style={{width: 400}}
          value={post.title}
          onChange={(event) => {
            setPost({...post, title: event.target.value})
          }}
          type="text"
          placeholder="post name"
        />
        <MyInput
          style={{width: 400}}
          value={post.body}
          onChange={(event) => {
            setPost({...post, body: event.target.value})
          }}
          type="text"
          placeholder="text description"
        />
        <MyButton style={{margin:10}} onClick={addPost}>Create post </MyButton>
      </form>
  )
}
