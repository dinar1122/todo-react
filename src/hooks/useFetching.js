import React, { useState } from 'react'

export default function useFetching(callback) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetching() {
    try {
      setLoading(true)
      await callback()
    } catch(e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  return [fetching, loading, error]
}
