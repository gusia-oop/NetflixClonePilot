import React from "react"
import { Header, OptForm, Feature } from "../components"
import * as ROUTES from "../constants/routes"

export function HeaderContainer({ children }) {
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="https://consequenceofsound.net/wp-content/uploads/2015/09/netflix-expiring-march-2015.png" alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            { children }
        </Header>
    )
}