import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../api/PostService'
import useFetching from '../hooks/useFetching'
import Loader from '../components/UI/loader/loader'
export default function PostPage() {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchPostById(id)
  }, [id])

  useEffect(() => {
    fetchCommentsPostById(id)
  }, [id])
  const [fetchPostById, loading, error] = useFetching(async () => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchCommentsPostById, commLoading, commError] = useFetching(
    async () => {
      const response = await PostService.getCommentsById(id)
      console.log(response.data)
      setComments(response.data)
    }
  )
  return (
    <div style={{margin: "0px 20px"}}>
      <h3>PostPage {params.id}</h3>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>title: {post.title}</div>
          <div>description: {post.body}</div>
        </div>
      )}
      <h3>Comments</h3>
      {commLoading ? (
        <Loader />
      ) : (
        comments.map((el, index) => {
          return (
            <div key={el.id} style={{margin: "10px 0px"}}>
              <div>
                <strong>email: {el.email}</strong>
              </div>
              <div>message: {el.body}</div>
            </div>
          )
        })
      )}
    </div>
  )
}
