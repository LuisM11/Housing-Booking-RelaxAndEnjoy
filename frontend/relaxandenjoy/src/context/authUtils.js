import axios from "axios"

export const  registerFetch = async (formData)=>{
        const dataFetch = {
          name: formData.firstName,
          surname: formData.lastName,
          email: formData.email,
          password: formData.password,
          city: parseInt( formData.city)      
        }
        return await axios 
        .post('http://3.139.250.124:8080/auth/signup', //18.188.13.141
          dataFetch
        ,{
          withCredentials: false,
          headers:{
            'Content-Type': 'application/json',
          },
          mode: 'cors'
        }
        ).then(res => {
          console.log(res.data)
          return res
        }).catch(e => {
          return e.response
        })
      }

export const logInFetch = async (email,password) =>{

  return await axios.
  post('http://3.139.250.124:8080/auth/login', //18.188.13.141
  {
    email,
    password
  },{
    withCredentials: false,
    headers:{
      'Content-Type': 'application/json',
    },
    mode: 'cors'
  }).then(res => {
    return res
  })
  .catch(e => {
    /* console.log(e.message) */
    return e.response})
 }

 export const captureToken = (token) =>{
  const cleanToken = token.split(' ')[1]
  return cleanToken
 }
 
     

  
