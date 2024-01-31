import { useMemo } from "react"

export function useSortedPosts(posts, sort) {
  function getSortedPosts() {
    if (sort) {
      return [...posts].sort((a, b) => {
        return a[sort].localeCompare(b[sort])
      })
    } else {
      return posts
    }
  }
  const sortedPost = useMemo(getSortedPosts, [posts, sort])
  return sortedPost
}

export  function usePosts(posts, sort, query) {

  const sortedPosts = useSortedPosts(posts, sort)

  const sortedAndSearchedPosts = useMemo(
    function () {
      return sortedPosts.filter((post) =>
        post.title
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())
      )
    },
    [query, sortedPosts]
  )
  return sortedAndSearchedPosts
}