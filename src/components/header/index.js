import React, { useState } from "react" 
import { Link as ReachRouterLink } from "react-router-dom"
import {
    Background, 
    Container, 
    Logo, 
    ButtonLink, 
    Group, 
    Link, 
    Text, 
    PlayButton, 
    Feature, 
    FeatureCallOut,
    Search,
    SearchIcon,
    SearchInput, 
    Profile,
    Picture,
    Dropdown
} from "./styles/Header"

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}> {children} </Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}> {children} </Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}> {children} </Text>
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}> {children} </Link>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}> {children} </ButtonLink>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}> {children} </Group>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}> {children} </Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}> {children} </FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}> {children} </PlayButton>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [ searchActive, setSearchActive ] = useState(false)

    return (
        <Search {...restProps}>
            <SearchIcon onCilck={() => setSearchActive (!searchActive)}>
                <img src="https://www.flaticon.com/svg/static/icons/svg/54/54481.svg" alt="Search" />
            </SearchIcon>

            <SearchInput 
                value={SearchInput}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search folms and series"
                active={searchActive}
            />
        </Search>
    )
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}> {children} </Profile>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}> {children} </Dropdown>
}

Header.Picture = function HedaerPicture({ src, ...restProps }) {
    return <Picture {...restProps} />
}