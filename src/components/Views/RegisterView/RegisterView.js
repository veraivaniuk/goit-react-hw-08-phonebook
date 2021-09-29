import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {register} from '../../../redux/auth/operations';
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "../../Container/Container";

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
    
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
    
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (name.length === 0 || email.length === 0 || password.length === 0) {
      const notify = () => toast.warn(`Please fill the form`);
      return notify();
    }
    dispatch(register({name, email, password}));
    setName("");
    setEmail("");
    setPassword("");
      
  };

  return (
    <>
     <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Floating className="mb-3">
                <Form.Control
                id="floatingTextarea"
                type="text"
                placeholder="name"
                value={name}
                onChange={handleChangeName}
                />
                <label htmlFor="floatingTextarea">Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={handleChangeEmail}
                />
                <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating>
                <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
                />
                <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <Button variant="primary" type="submit" >Submit</Button>
        </Form>       
      </Container>
    </>
  );
}
