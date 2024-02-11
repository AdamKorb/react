import { useState } from 'react';
const App = () => {

  const [oneUser, setOneUser] = useState({fullName: "", email:"", age:""})
  const [users, setUsers] = useState([])

  const formChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setOneUser({...oneUser, [name]: value })
  }

  const formSubmit = (event) => {
    event.preventDefault()

    if (oneUser.fullName && oneUser.email && oneUser.age){
      if (isNaN(oneUser.age)) {
        return  alert("Prosím vložte číselnú hodnotu pre Vek")
      }

      const newUser = { ...oneUser, id:new Date().getTime()}
      setUsers((users) => {
        return [...users, newUser]
      })

      setOneUser({fullName: "", email:"", age:""})

    } else {
      alert("Údaje neboli kompletne vyplnené");
    }


  }  

  return (
    <article>
      <form onSubmit={formSubmit}>
        <input 
          className="userInfo"
          type="text"
          placeholder="Meno"
          value={oneUser.fullName}
          onChange={formChange}
          name='fullName'
        />

        <input 
          className="userInfo"
          type="text"
          placeholder="Vek"
          value={oneUser.age}
          onChange={formChange}
          name='age'
        />

        <input 
          className="userInfo"
          type="email"
          placeholder="Email"
          value={oneUser.email}
          onChange={formChange}
          name='email'
        />
        <input 
          type="submit" 
        />
      </form>

      {users.map( (oneUser) => {
        const {id, fullName, email, age} = oneUser

        return <div className='item' key={id}>
          <h4>{fullName}</h4>
          <p>{age}</p>
          <p>{email}</p>
        </div>
      })}

    </article>
  )
}

export default App
