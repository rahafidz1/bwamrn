import React from 'react'
import Button from 'elements/Button'

export default function Header() {
    return (
        <div className="spacing-sr">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    Staycation.
                </nav>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item${getLinkClass("/")}`}>
                            <Button className="nav-link" type="link" href="/">
                                Home
                            </Button>
                        </li>
                        <li className={`nav-item${getLinkClass("/")}`}>
                            <Button className="nav-link" type="link" href="/">
                                Browse By
                            </Button>
                        </li>
                        <li className={`nav-item${getLinkClass("/")}`}>
                            <Button className="nav-link" type="link" href="/">
                                Home
                            </Button>
                        </li>
                        <li className={`nav-item${getLinkClass("/")}`}>
                            <Button className="nav-link" type="link" href="/">
                                Home
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
