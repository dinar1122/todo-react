import React, { forwardRef } from 'react'
import classes from './MyInput.module.css'
function MyInput(props, ref) {
  return (
    <div>
      
      <input ref={ref} className={classes.myInput} {...props} />
    </div>
  )
}
export default forwardRef(MyInput);