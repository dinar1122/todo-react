import React, { useEffect, useMemo, useRef, useState } from 'react'
import '../styles/styles.css'
import PostList from '../components/PostList'
import MyButton from '../components/UI/button/MyButton'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/UI/MyModal/MyModal'
import Loader from '../components/UI/loader/loader'
import { usePosts } from '../hooks/usePost'
import PostService from '../api/PostService'
import useFetching from '../hooks/useFetching'
import getTotalPages from '../utils/totalPages'
import Pagination from '../components/UI/pagination/Pagination'
function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'javascript',
      description: `aorem ipsum dolor sit amet consectetur.`,
    },
    {
      id: 2,
      title: 'lavascript1',
      description: `borem ipsum dolor sit amet consectetur.`,
    },
    {
      id: 3,
      title: 'aavascript2',
      description: `Lorem ipsum dolor sit amet consectetur.`,
    },
  ])
  const [filter, setFilter] = useState({ query: '', sort: '' })
  const [modal, setModal] = useState(false)
 
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async function () {
      const response = await PostService.getAll(limit, page)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getTotalPages(totalCount, limit))
      setPosts(response.data)
    }
  )
    

  function createPost(newPost) {
    setPosts([ newPost, ...posts])
    setModal(false)
  }
  function selectPage(pageIndex) {
    setPage(pageIndex)
  }
  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  useEffect(function () {
    fetchPosts()
  }, [page])
  return (
    <div className="App">
      <MyButton
        onClick={() => {
          setModal(true)
        }}
      >
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
        <Pagination page={page} selectPage={selectPage} totalPages={totalPages}></Pagination>
      {postError && <div>Ошибка {postError}</div>}
        
      {isPostsLoading ? (<div style={{ display: 'flex', justifyContent: 'center', margin: '200px' }}>
                          <Loader />
                        </div>) : 
        (<PostList
          delete={removePost}
          posts={sortedAndSearchedPosts}
          title="list1"
        />)}
    </div>
  )
}

export default Posts