import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

class CarInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicleInfo: props.vehicleInfo,
            securityStatus: props.secutiryStatus,
            energyStatus: props.energyStatus,
            locationStatus: props.locationStatus
        }
    }

    render() {
        return (
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.state.vehicleInfo.id}</CardTitle>
                <CardText>
                    {this.state.vehicleInfo}
                    {this.state.securityStatus}
                    {this.state.energyStatus}
                    {this.state.locationStatus}
                </CardText>
              </CardBody>
            </Card>
        );
    }
}

export default CarInformation;