import React ,{useState,useEffect, useContext} from 'react'
import { dataContext } from '../../Context/ContextProvider';
 
function User(props) {
    const {name}=useContext(dataContext )
    const [user, setuser] = useState({});
    const {users} = useContext(dataContext )
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //       .then(response => response.json()) 
    //       .then(response=>{setUsers(response) 
    //         console.log(response.data)})
    //         }, []);


    
  return (
    <div>
     <h1>{props.users}</h1>


     <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>

<h1>{name}</h1>

    </div>
  )
}

export default User
