import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

export default function PostFilter({filter, setFilter}) {

  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(event) => {
          setFilter({ ...filter, query: event.target.value })
        }}
      ></MyInput>

      <MySelect
        value={filter.sort}
        onChange={sortName => setFilter({ ...filter, sort: sortName })}
        defaultValue="sorted by"
        options={[
          { value: 'title', name: 'by title' },
          { value: 'body', name: 'by description' },
        ]}
      />
    </div>
  )
}
