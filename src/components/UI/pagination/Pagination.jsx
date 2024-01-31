import React from 'react'
import MyButton from '../button/MyButton'
import usePageCount from '../../../hooks/usePage'
import '../../../styles/styles.css'

export default function Pagination({totalPages, selectPage, page}) {
  const pageCountArray = usePageCount(totalPages)
  return (
    <div className='pagination-wrapper'>{pageCountArray.map((el, index) => {
      return <span className={(page === el) ? 'defaultPagItem selected' : 'defaultPagItem'} onClick={()=> {selectPage(index + 1)}} key={index}>{el}</span>
    })}</div>
  )
}
