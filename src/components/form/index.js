import React from "react"
import { Container, Input, Submit, Error, Base, Text, SmallText, Title, Link } from "./styles/Form"

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}> {children} </Container>
} 

Form.Input = function FormInput({ ...restProps }) {
    return <Input {...restProps} />
}

Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}> {children} </Link>
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}> {children} </Submit>
}

Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}> {children} </Base>
}

Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}> {children} </Title>
}

Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}> {children} </Text>
}

Form.SmallText = function FormSmallText({ children, ...restProps }) {
    return <SmallText {...restProps}> {children} </SmallText>
}

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}> {children} </Error>
}


