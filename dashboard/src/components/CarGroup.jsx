import React, { Component } from 'react';
import { CardDeck } from 'reactstrap';
import CarInformation from './CarInformation'

class CarGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carsInfo: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/vehicles')
      .then(response => response.json())
      .then(carsInfo => this.setState({ carsInfo }));
    }

    render() {
        return (
            <CardDeck>
            <div>{console.log(this.state.carsInfo)}</div>
                {/* // this.state.carsInfo.forEach(element => {
                // //    return <CarInformation carInfo={element}/>;
                // }) */}
            </CardDeck>
        );
    }
}

export default CarGroup;