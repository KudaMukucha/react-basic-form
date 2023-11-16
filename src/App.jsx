
import { useState } from 'react'
import './App.css'

function App() {
  document.body.style = 'background:#76b852'
  const [values,setValues] = useState({
    firstName:'',
    lastName:'',
    email:''
  })

  const [submitted,setSubmitted] = useState(false)
  const [valid,setValid] = useState(false)

  const handleFirstNameInputChange=(event)=>{
    setValues({...values,firstName: event.target.value})
  }
  const handleLastNameInputChange=(event)=>{
    setValues({...values,lastName: event.target.value})
  }
  const handleEmailInputChange=(event)=>{
    setValues({...values,email: event.target.value})
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    if(values.firstName && values.lastName && values.email){
    setValid(true)
    }
    setSubmitted(true)
    /*setValues({
    firstName:'',
    lastName:'',
    email:''
    })
    */
    }
  return (
    <>
     <div className={'min-h-screen flex items-center justify-center'}>
      <form onSubmit={handleSubmit} className={'w-80 bg-white p-5 rounded-md'}>
      {
        submitted && valid ? <div className='bg-[#3f89f8] p-3 rounded-md text-white mb-3'>Success! Thank you for registering.</div>: null
       } 
      <input type="text" value={values.firstName} onChange={handleFirstNameInputChange} placeholder="First Name" className="input input-bordered w-full" />
      {submitted && !values.firstName ? <span className='text-red-600 mb-4'>Please enter your first name!</span> : null}
      <input type="text" value={values.lastName} onChange={handleLastNameInputChange} placeholder="Last Name" className="input input-bordered w-full mt-4 p-4 " />
      {submitted && !values.lastName ? <span className='text-red-600 mb-4'>Please enter your last name!</span> : null}     
      <input type="email" value={values.email} onChange={handleEmailInputChange} placeholder="Email" className="input input-bordered w-full mt-4" />
      {submitted && !values.email ? <span className='text-red-600 mb-4'>Please enter your email!</span> : null}
      <button className="btn btn-accent w-full mt-4">Submit</button>


      </form>
     </div>
    </>
  )
}

export default App
