import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, Button} from "reactstrap"
import { useNavigate } from "react-router-dom"


// name, age, enjoys, image
// https://thiscatdoesnotexist.com/
const CatNew = ({ createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
    // ... Spread operator makes a copy of our state object
    // e.target.name tells us which key we are updating based on the name attribute on the input
    // e.target.value tells us what value to set to the key
    setNewCat({...newCat, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return (
    <>
      <h1>Create a new cat</h1>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            name="name"
            onChange={handleChange}
            placeholder="What is your name?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            name="age"
            onChange={handleChange}
            placeholder="What is your age?"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Enjoys
          </Label>
          <Input
            name="enjoys"
            onChange={handleChange}
            placeholder="What do you enjoy?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            name="image"
            onChange={handleChange}
            placeholder="Share your image"
            type="url"
          />
        </FormGroup>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CatNew