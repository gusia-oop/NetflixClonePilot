import React from "react"
import accorData from "../fixtures/faqs.json"
import { Accordion, OptForm } from "../components"

export function AccordionContainer() {
    return(
        <Accordion>
            <Accordion.Title>
                Frequently Asked Questions
            </Accordion.Title>
            <Accordion.Frame>
                {accorData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header> {item.header} </Accordion.Header>
                        <Accordion.Body> {item.body} </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame> 

            <OptForm>
                <OptForm.Input placeholder="Email Address" />  
                <OptForm.Button>Try it now</OptForm.Button>     
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart
                your membership.</OptForm.Text>
            </OptForm>   
        </Accordion>
    )
}