import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/Firebase"
import { HeaderContainer } from "../containers/Header"
import { FooterContainer } from "../containers/Footer"
import { Form } from "../components"
import * as ROUTES from "../constants/routes"

export default function SignUp() {
    const history = useHistory()
    const { firebase } =useContext(FirebaseContext)

    const [ firstName, setFirstName ] = useState('')
    const [ emailAddress, setEmailAddress ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')

    const isInvalid = password === '' || emailAddress === '' || firstName === ''

    const handleSignUp = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoUrl: Math.floor(Math.random() * 5) + 1
                })
                .then(() => {
                    setEmailAddress('');
                    setPassword('');
                    setError('');
                    history.push(ROUTES.BROWSE);
                }) .catch((error) => setError(error.message))
            )
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onClick={handleSignUp} method="POST">
                        <Form.Input 
                            placeholder = "First Name"
                            value = {firstName}
                            onChange = {({ target }) => setFirstName(target.value)}
                        />

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
                            Sign Up
                        </Form.Submit>

                        <Form.Text>
                            Already a User? <Form.Link to="./signin">Sign In Now.</Form.Link>
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