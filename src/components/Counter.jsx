import React, { useState } from 'react'

function Counter() {
  const [likes, setLikes] = useState(0)
  const [count, setCount] = useState(0)
  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)
  }
  return (
    <div>
      <button onClick={increment}>Inc</button>
      <div>{likes}</div>
      <button onClick={decrement}>Dec</button>
    </div>
  )
}
export default Counter
