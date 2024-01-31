import React from 'react'

export default function getTotalPages(totalCount, limit) {
  return Math.ceil(totalCount / limit) 
}
