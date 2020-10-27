import React, { useState, useContext } from "react"
import { useHistory} from "react-router-dom"
import { FirebaseContext } from "../context/Firebase"
import { Form } from "../components"
import { HeaderContainer } from "../containers/Header"
import { FooterContainer } from "../containers/Footer"
import * as ROUTES from "../constants/routes"

export default function SignIn() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [ error, setError ] = useState('')
    const [ emailAddress, setEmailAddress ] = useState('')
    const [ password, setPassword ] = useState('')

    const isInvalid = password === '' | emailAddress === ''

    const handleSignIn = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setEmailAddress('');
                setPassword('');
                setError('');
                history.push(ROUTES.BROWSE)
            }).catch((error) => setError(error.message))
    }

    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error> {error} </Form.Error>}                    

                    <Form.Base onClick={handleSignIn} method="POST">
                        <Form.Input 
                            placeholder = "Email Adress"
                            value = {emailAddress}
                            onChange = {({ target }) => setEmailAddress(target.value)}
                        />

                        <Form.Input 
                            type = "password"
                            placeholder = "Password"
                            value = {password}
                            autoComplete = "off"
                            onChange = {({ target }) => setPassword(target.value)}
                        />

                        <Form.Submit disabled = { isInvalid } type = "submit" >
                            Sign In
                        </Form.Submit>

                        <Form.Text>
                            New to Netflix? <Form.Link to="./signup">Sign Up Now.</Form.Link>
                        </Form.Text>

                        <Form.SmallText>
                            This page is protected by Google reCAPTCHA
                        </Form.SmallText>
                    </Form.Base>
                </Form>
            </HeaderContainer>

            <FooterContainer />
        </>
    )
}