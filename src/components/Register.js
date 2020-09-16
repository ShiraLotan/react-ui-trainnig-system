import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import {signUser} from '../state/action';
import '../../src/stylesFolder/register.scss';

function Register({updateUserDetails}) {
    let history = useHistory();

    const { register, handleSubmit, errors } = useForm();
    const [errorMessage, setErrorMessage]= useState(false);

    
    const onSubmit = async data => {
      const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
        
      try {
          const fetchResponse = await fetch(`http://localhost:3001/register`, settings);
          const data = await fetchResponse.json();

          
          //Server side doesnt change login to true
          if(data.message==='Already exist'){
            setErrorMessage(true);
        }else{
          updateUserDetails(data);
          history.push("/dashboard", {name: data.name, email: data.email});
        }
      } catch (e) {
        throw new Error('Could not fetch please try again later');
      } 

    };
  
  return (
    <div className="Register">
           <Form className="register-form" onSubmit={handleSubmit(onSubmit)}>

           <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control type="name"  placeholder="Enter name" name="name" ref={register({ required: true, minLength: 4})}/>
                <Form.Text className="text-muted">
                {errors.name?.type==="required" && <span>This field is required</span>}
                {errors.name?.type==="minLength" && "Please insert at least 4 charachters"}
                </Form.Text>
            </Form.Group>


            <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={()=>setErrorMessage(false)} ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                <Form.Text className="text-muted">
                {errors.email?.type==="required" && <span>This field is required</span>}
                {errors.email?.type==="pattern" && "Please insert a valid email"}
                </Form.Text>
                {errorMessage ? <Form.Text>Email is already taken <span onClick={()=>history.push("/login")}>login</span></Form.Text>: null}
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/})} />
                <Form.Text className="text-muted">
                {errors.password?.type==="required" && <span>This field is required</span>}
                {errors.password?.type==="pattern" && <span>Your password shold contain: at least one digit, at least one lower case, at least one upper case, at least 8 characters </span>}
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form> 
    
    </div>
  );
}

const mapDispatchToProps = dispatch => {
    return {
      updateUserDetails: (data) => dispatch(signUser(data))
    }
  }


export default connect(null, mapDispatchToProps)(Register);
