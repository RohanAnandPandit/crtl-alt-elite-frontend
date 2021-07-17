import React from "react";
import AppMenu from "./AppMenu";
import Link from '@material-ui/core/Link';
import "LinkedIn.svg";
import "GitHub.svg";
import "Instagram.svg";
import "Reddit.svg"
import "./HomePage.css";

const websites = [
    'LinkedIn',
    'GitHub',
]
export default class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AppMenu/>
                <div className="logo-container">
                    {websites.map((site) => (
                        <div>
                            <Link href={`/tips/${site}`}>
                                <div className="logo">
                                    <img src={`${site}.svg`} alt={`${site}`}></img>
                                </div>
                            </Link>
                        </div>
                    ))
                    }

                    <div>
                        <Link href="/tips/Instagram">
                            <div className="logo">
                                <img src="Instagram.svg" alt="Instagram" width="100px" height="100px"></img>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link href="/tips/Reddit">
                            <div className="logo">
                                <img src="Reddit.svg" alt="Reddit" width="100px" height="100px"></img>
                            </div>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
