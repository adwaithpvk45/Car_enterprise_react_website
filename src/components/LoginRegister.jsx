import { Formik,ErrorMessage,Field,Form } from "formik";
import * as Yup from 'yup'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginRegister(){
    const navigate=useNavigate()
     
    const [isRegistered,setIsRegistered]=useState(false)

     
    const validateSchema =()=> isRegistered?(Yup.object({
        username:Yup.string().required('Name cannot be empty'),
        email:Yup.string().email('Invalid Email').required('Email cannot be empty'),
        password:Yup.string().required('Password is required'),
        confirmPassword:Yup.string().oneOf(Yup.ref("password"),'Password must match!').required("Confirm Password is required")
    })):(Yup.object({
        email:Yup.string().email('Invalid Email').required('Email cannot be empty'),
        password:Yup.string().required('Password cannot be empty'),
    }))

    const initialValues=isRegistered?({username:'',email:'',password:'',confirmPassword:''}):({email:'',password:''})
    
    const onHandleSubmit=(values,{resetForm})=>{
        console.log(values)
        console.log(isRegistered)
        if(isRegistered){
            const users= JSON.parse(localStorage.getItem('users'))||[]
            const userExist = users.find((user)=>(user.email===values.email))
            if(userExist){
                alert('Email id already exists')
                resetForm()
            }else{
                users.push({email:values.email,password:values.password})
                localStorage.setItem('users',JSON.stringify(users))
                alert("User Registered!")
                resetForm()
                setIsRegistered(false)
            }
        }else{
            const users= JSON.parse(localStorage.getItem('users'))||[]
            const userExist = users.find((user)=>(user.email===values.email)&&(user.password===values.password))
            if(userExist){
                alert("Successfully logged in")
                navigate('/loggedin',{replace:true})
                resetForm()
            }else{
                alert("Incorrect Email or Password")
                resetForm()
            }
        }
    }

    return (
        <div className="Form">
            {console.log(isRegistered)}
        <h1>{isRegistered?'Register':'Login'}</h1>
    <p>{isRegistered?(<>Have an account?<button onClick={(e)=>{e.preventDefault();setIsRegistered(false)}}>Login.</button></>):(<>New Customer?<button onClick={(e)=>{e.preventDefault();setIsRegistered(true)}}>Register.</button></>)}</p>
        <Formik
        initialValues={initialValues}
        validationSchema={validateSchema()}
        onSubmit={onHandleSubmit}>
            <Form className="fields">{isRegistered && ( 
                <div>
                    <label>Username:</label>
                    <Field type="text" name="username"></Field>
                    <ErrorMessage name="username" component='div' className="error"></ErrorMessage>
                </div>
            )}
                <div>
                    <label>Email:</label>
                    <Field type="email" name="email"></Field>
                    <ErrorMessage name="email" component='div' className="error"></ErrorMessage>
                </div>
                <div>
                    <label>Password:</label>
                    <Field type="password" name="password"></Field>
                    <ErrorMessage name="password" component='div' className="error"></ErrorMessage>
                </div>
                {isRegistered && (
                    <div>
                        <label>Confirm Password:</label>
                        <Field name="confirmPassword" type="password"></Field>
                        <ErrorMessage name="confirmPassword" component='div' className="error"></ErrorMessage>
                    </div>
                )}
                <button type="submit">{isRegistered?'Register':'Login'}</button>
            </Form>
        </Formik>
        </div>
    )
}

export default LoginRegister