import React, { useState, useContext, createContext } from "react"
import { AccordionContainer } from "../../containers/Accordion"
import { Container, Inner, Frame, Item, Title, Header, Body } from "./styles/Accordion"
import openButton from "/"

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [ toggleShow, setToggleShow ] = useState(false)

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }} >
            <Item {...restProps}> 
                {children} 
            </Item>
        </ToggleContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
     
    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <img src="https://cdn.iconscout.com/icon/free/png-256/close-1781207-1518581.png" alt="close"/>
            ) : (
                <img src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png" alt="open"/>
            )}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext)

    return toggleShow ? <Body {...restProps}>{children}</Body> : null
}
