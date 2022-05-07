import React from 'react'
import {InputGroup,FormControl,Form} from 'react-bootstrap'

function CustomInput({label,placeholder,type}) {
  return (
    <div>
                <>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">{label}</InputGroup.Text>
            <FormControl
            placeholder={placeholder}
            aria-label={"Username"}
            aria-describedby="basic-addon1"
            />
        </InputGroup>

        <InputGroup className="mb-3">
            <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>

        <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
            https://example.com/users/
            </InputGroup.Text>
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>

        <InputGroup>
            <InputGroup.Text>With textarea</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
        </>
    </div>
  )
}

export default CustomInput
