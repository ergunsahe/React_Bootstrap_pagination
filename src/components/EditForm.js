import React, {useContext, useState} from 'react'
import { Form, Button } from "react-bootstrap"
import {EmployeeContext} from "../contexts/EmployeeContext"

const EditForm = ({selectedEmployee}) => {
    const {dispatch} = useContext(EmployeeContext)
    const employee = selectedEmployee;
    const [name, setName]= useState(employee.name)
    const [email, setEmail]= useState(employee.email)
    const [address, setAdress]= useState(employee.address)
    const [phone, setPhone]= useState(employee.phone)
    const id = selectedEmployee.id

    const updatedEmployee = {
        id,
        name,
        email,
        address,
        phone
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //updateEmployee(id, updatedEmployee)
        dispatch({type:'updateEmployee', id, updatedEmployee})
    }
    
    return (
        <Form  onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange={(e) => setAdress(e.target.value)}
                    
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    

                />
            </Form.Group>

            <Button variant="success" type="submit" block >Update Employee</Button>
        </Form>

    )
}

export default EditForm;
