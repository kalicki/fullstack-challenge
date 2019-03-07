import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Logo extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Media>
                <Media left href="#" >
                    <Media object src='/foto.png' alt="ayga" />
                </Media>
                <Media body>
                   <Media heading>
                        AYGA Dashboard
                    </Media>
                        by Bruna Prauchner
                </Media>
            </Media>
        );
    }
}

export default Logo;