import React from "react"

export default function Bug1()
{
    const [count, setCount] = React.useState(0)

    // Directly update state
    const update = () => setCount(count + 1)
  
    // Directly update state after 2 sec
    const asyncUpdate = () => {
      setTimeout(() => {
        setCount(count + 1)
      }, 2000)
    }
  
    // Render UI
    return (
      <div>
        <span>Count: {count}</span>
        <button onClick={update}>Add +1</button>
        <button onClick={asyncUpdate}>Add +1 later</button>
      </div>
    )
}