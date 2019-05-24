import React, {Component} from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBView } from 'mdbreact';
import Map from "./Map";

class  MapsPage extends React.Component{
    render()
    {
        return (
            <React.Fragment>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard className="mt-5">
                            <MDBView className="gradient-card-header dusty-grass-gradient">
                                <h4 className="h4-responsive text-white">
                                    Using Leaflet.JS
                                </h4>
                            </MDBView>
                            <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
                                <Map url={'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'}/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBCard className="mt-5">
                            <MDBView className="gradient-card-header dusty-grass-gradient">
                                <h4 className="h4-responsive text-white">
                                    Using Leaflet.JS
                                </h4>
                            </MDBView>
                            <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
                                <Map url={'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'}/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard className="mt-5">
                            <MDBView className="gradient-card-header dusty-grass-gradient">
                                <h4 className="h4-responsive text-white">
                                    Using Leaflet.JS
                                </h4>
                            </MDBView>
                            <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
                                <Map url={'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'}/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBCard className="mt-5">
                            <MDBView className="gradient-card-header dusty-grass-gradient">
                                <h4 className="h4-responsive text-white">
                                    Using Leaflet.JS
                                </h4>
                            </MDBView>
                            <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
                                <Map url={'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'}/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

            </React.Fragment>
        )
    }
}

export default MapsPage;