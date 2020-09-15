import React from 'react';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import addHero from '../../state/thunk/addHero';
import { connect } from 'react-redux';


function AddHero({addHeroToList, email}) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    data.email = email
    console.log(data)
    addHeroToList(data)
  };

  return (
    <div className="AddHero">
      {JSON.stringify(email)}
     <Form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group >
            <Form.Label>Name</Form.Label>
            <Form.Control type="name"  placeholder="Enter name" name="name" ref={register({ required: true})}/>
            <Form.Text className="text-muted">
            {errors.name?.type==="required" && <span>This field is required</span>}
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="abilityId">
          <Form.Label>Select hero ability:</Form.Label>
          <Form.Control as="select"  type="ability" name="ability" ref={register({ required: true})}>
            <option value='attacker'>attacker</option>
            <option value='defender'>defender</option>       
          </Form.Control>
          <Form.Text className="text-muted">
            {errors.name?.type==="required" && <span>This field is required</span>}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="suitId">
          <Form.Label>Select suit color:</Form.Label>
          <Form.Control as="select" type="suit" name="suit" ref={register({ required: true})}>
            <option value='Red'>Red</option>
            <option value='Blue'>Blue</option>
            <option value='Pink'>Pink</option>
            <option value='Purple'>Purple</option>
            <option value='Brown'>Brown</option>
            <option value='Yellow'>Yellow</option>
            <option value='White'>White</option>
            <option value='Black'>Black</option>
            <option value='Green'>Green</option>         
          </Form.Control>
          <Form.Text className="text-muted">
            {errors.name?.type==="required" && <span>This field is required</span>}
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
    addHeroToList: (data) => dispatch(addHero(data))
  }
}
const mapStateToProps = state =>({
  email: state.signinReducer.email
})


export default connect(mapStateToProps, mapDispatchToProps)(AddHero);
