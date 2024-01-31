import React from 'react'
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function PostList(props) {
  if (!props.posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Empty posts</h1>
  }
  return (
    <div>
      <h1 className="list__title">Post {props.title}</h1>
      <TransitionGroup>
        {props.posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={300} classNames="post">
            <PostItem delete={props.delete} number={index + 1} id={post.id} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
