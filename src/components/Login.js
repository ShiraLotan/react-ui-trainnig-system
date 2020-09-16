import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import loginUser from '../state/thunk/loginUser';
import '../../src/stylesFolder/login.scss';

function Login({handleLoginUser}) {
  let history = useHistory();
  const [logError, setLogError] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async(data) => {
    
    const res = await handleLoginUser(data);
    if(!res){
      setLogError(true)
    }else{
      setLogError(false)
      history.push("/dashboard", {name: res.name, email: res.email });

    }
     
  };

  return (
    <div className="Login">
           <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                  <Form.Text className="text-muted">
                  {errors.email?.type==="required" && <span>This field is required</span>}
                  {errors.email?.type==="pattern" && "Please insert a valid email"}
                  </Form.Text>
              </Form.Group>

              <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/})} />
                  <Form.Text className="text-muted">
                  {errors.password?.type==="required" && <span>This field is required</span>}
                  {errors.password?.type==="pattern" && <span>Wrong password </span>}
                  </Form.Text>
              </Form.Group>
              
              {logError ? <Form.Group>
                <Form.Text className="text-muted">
                One or more of you details was wronge please try again
                </Form.Text>
              </Form.Group>: null}

              <Button variant="primary" type="submit">
                  Login
              </Button>
            </Form> 
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    handleLoginUser: (data) => dispatch(loginUser(data))
  }
}

export default connect(null, mapDispatchToProps)(Login);
