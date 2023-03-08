import React ,{createContext,useState,useEffect}from 'react'

export const dataContext=createContext()
function ContextProvider(props) {
    const name="How Provide Value from Context"
    //Get users
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json()) 
          .then(response=>{setUsers(response) 
            console.log(response.data)})
            }, []);
  //Get Post
            const [post, setpost] = useState([]);
            useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                  .then(response => response.json()) 
                  .then(response=>{setpost(response) 
                    console.log(response.data)})
                    }, []);

  return (
    <div>
      <dataContext.Provider value={{name,users,post}}>
        {props.children}
      </dataContext.Provider>
    </div>
  )
}

export default ContextProvider
