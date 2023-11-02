// import React from 'react'

import { Form } from "react-bootstrap"
import useState from 'react'
export default function ToggleDarkMode() {
    const [mode, setMode] = useState('white')
    const toggleMode = () => {
        if (mode === 'white') {
            setMode('dark')
            document.body.style.backgroundColor = '#18181b'
            document.body.style.color = 'white'
        }
        else {
            setMode('white')
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        }
    }
    return (
        <>
            <Form>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Check this switch"
                    onClick={toggleMode}
                />
            </Form>
        </>
    )
}
