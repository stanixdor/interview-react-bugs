import React from "react"

export default function Bug2()
{
    const [user, setUser] = React.useState({
        name: "John",
        age: 25,
    })

    // Update property of user state
    const changeName = () => 
    {
        setUser((user) => (user.name = "Mark"))
    }

    // Render UI
    return (
        <div style={{marginTop: '5rem'}}>
            <p>User: {user.name}</p>
            <p>Age: {user.age}</p>

            <button onClick={changeName}>Change name</button>
        </div>
    )
}