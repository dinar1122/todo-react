import React, { useMemo } from 'react'

export default function usePageCount(totalPages) {

  const pagesArrayList = useMemo(() => {
    const pagesArray = []
    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1)
    }
    return pagesArray
  }, [totalPages])

  return pagesArrayList
}
