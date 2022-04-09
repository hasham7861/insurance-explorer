import { useState } from "react";
import { Alert, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "./reusable/ActionButton";

export const BuyForm = (): JSX.Element => {

    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const navigate = useNavigate();

    const isFormFilled = () =>{
        return email && gender && age;
    }

    const onBuyHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        
        if(isFormFilled()){
            setTimeout(function(){
                navigate("/")
            }, 5000);
        }
    }

    const onInputChange = (e: any) =>{
    
        const {id, value} = e.target;
    
        switch(id){
          case 'email':
            setEmail(value)
            return
          case 'gender':
            setGender(value)
            return
          case 'age':
            setAge(value)
            return
          default:
            return
        }
      }
    

    return (
        <>
            <hr />
            <Alert variant="success" style={{display: !isFormFilled() ? "none" : "block"}}>
                Successfuly Bought the Insurance. Please wait for 5 seconds to be rerouted to home
            </Alert>
            <h4>Please enter the info inorder to buy insurance!</h4>    
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>What is your email?</Form.Label>
                            <Form.Control type="email" id="email" placeholder="name@example.com" value={email} onChange={onInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>How old are you?</Form.Label>
                            <Form.Control type="age" id="age" value={age} onChange={onInputChange} placeholder="19" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>What is your gender?</Form.Label>
                            <Form.Control type="gender" id="gender" value={gender} onChange={onInputChange} placeholder="female" required/>
                        </Form.Group>
                        <ActionButton variant="primary" onClickHandler={onBuyHandler} message="Buy Insurance"></ActionButton>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}