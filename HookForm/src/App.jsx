import React from "react";
import { useForm } from "react-hook-form";


function App() {

const { register, watch, handleSubmit, formState: { errors } } = useForm();
  console.log(errors.username);

  const onSubmit =(data)=>{
    console.log(data);  

  }
  return (
 <form onSubmit={handleSubmit(onSubmit)}>
  <div>
    <label htmlFor="username">Username</label>
  <input className="border-1 px-4 py-2 " type="text" {...register('username',
{ required: 'Username is required' }
  )}  />
  {errors.username && <p className="text-red-500">{errors.username.message}</p>}
  </div>

  <div>
    <label htmlFor="email">Email</label>
    <input className="border-1 px-4 py-2 " type="email" {...register('email', { required: 'Email is required' }, { pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />
    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
  </div>
  <div>
    <label htmlFor="password">Password</label>
    <input className="border-1 px-4 py-2 " type="password" {...register('password', { required: 'Password is required' }, { minLength: { value: 6, message: 'Password must be at least 6 characters' } })} />
    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
  </div>
  <div>
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input className="border-1 px-4 py-2 " type="password" {...register('confirmPassword', { required: 'Please confirm your password' }, { minLength: { value: 6, message: 'Password must be at least 6 characters' } })} />
    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
  </div>
  <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit"> Submit</button>

 </form>
  );
}

export default App;
