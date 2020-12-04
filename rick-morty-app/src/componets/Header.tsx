import { Link } from '@reach/router'
import React from 'react'

type HeaderProps = { length: number }
export default function Header({ length }: HeaderProps): JSX.Element {
    return (
        <div>
            <h1>Rick and Morty App</h1>
            <p>You can add your favourite episodes</p>
            <div>
                <Link to='/'>Home</Link>
                <Link to="/favs">favourite(s) :{length}</Link>
            </div>
        </div>
    )
}
