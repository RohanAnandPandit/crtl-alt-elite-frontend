import React from "react";
import AppMenu from "./AppMenu";

export default class TipsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            website: "",
        }
    }

    componentDidMount() {
        this.setState({
            website: this.props.match.params.website
        });
    }

    render() {
        return (
            <React.Fragment>
                <AppMenu/>
                {this.state.website}
            </React.Fragment>
        );
    }
}