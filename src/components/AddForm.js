import React, {useContext, useState} from 'react'
import { Form, Button } from "react-bootstrap"
import {EmployeeContext} from "../contexts/EmployeeContext"

const AddForm = () => {
    const {addEmployee} = useContext(EmployeeContext)
    // const [name, setName]= useState("")
    // const [email, setEmail]= useState("")
    // const [address, setAdress]= useState("")
    // const [phone, setPhone]= useState("")

    const [newEmployee, setNewEmployee] = useState({
        name:"", email:"", address:"", phone:""
    })

    const {name, email, address, phone} = newEmployee;

    const onInputChange = (e) =>{
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        addEmployee(name, email, address, phone)
    }
    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value = {name}
                    onChange= {e => onInputChange(e)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value = {email}
                    onChange= {e => onInputChange(e)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value = {address}
                    onChange= {e => onInputChange(e)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value = {phone}
                    onChange= {e => onInputChange(e)}

                />
            </Form.Group>

            <Button variant="success" type="submit" block >Add New Employee</Button>
        </Form>

    )
}

export default AddForm;
