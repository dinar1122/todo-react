import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

export default function PostItem(props) {
  const router = useNavigate()
  return (
    <div className="post">
    <div className="post__content">
      <strong>{props.id} </strong>
      <strong>{props.post.title}</strong>
      <div>{props.post.body}</div>
    </div>
    <MyButton style={{margin: '0 10px 0 0'}} onClick={()=> router(`/posts/${props.post.id}`)} >Open</MyButton>
    <MyButton onClick={()=> props.delete(props.post)} >Delete</MyButton>
  </div>
  )
}
