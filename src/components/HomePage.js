import React from "react";
import AppMenu from "./AppMenu";
import Link from '@material-ui/core/Link';
import "linkedin.svg";
import "github.svg";
import "instagram.svg";
import "./HomePage.css";

const websites = [
    'linkedin',
    'github',
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
                    <Link href={`/tips/instagram`}>
                        <div className="logo">
                            <img src={`instagram.svg`} alt={`instagram`} width="100px" height="100px"></img>
                        </div>
                    </Link>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
