import React from "react"
import { Container, List, Title, Picture, Name, Item } from "./styles/Profiles"

export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}> {children} </Container>
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}> {children} </Title>
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}> {children} </List>
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={src ? 'https://studentedgeapplication.azureedge.net/articles/d1b7c3ae-d915-424f-a0a6-2290bdecec87.jpg' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTp7-Q9OD5LuYcFZ7JwPkb-ihgB5CIawfWbqw&usqp=CAU'}/>
}

Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}> {children} </Name>
}