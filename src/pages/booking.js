import React, {Component} from "react";
import { withRouter } from 'next/router'
import Order from "../containers/order2";
import SignUp from "../containers/signUp";
import Details from "../containers/details";
import Ship from "../containers/ship";
import Pay from "../containers/pay";

import {BOOKING_ORDER, BOOKING_SIGN_UP, BOOKING_DETAILS, BOOKING_SHIP, BOOKING_PAY} from "../constants/pathConstants";

class Booking extends Component {


    render() {
        const {asPath, query} = this.props.router;
        const {tab} = query;
        return (
            <div>
                {asPath === BOOKING_ORDER && <Order/>}
                {asPath === BOOKING_SIGN_UP && <SignUp/>}
                {asPath === BOOKING_DETAILS && <Details/>}
                {asPath === BOOKING_SHIP && <Ship/>}
                {asPath === BOOKING_PAY && <Pay/>}
            </div>
        );
    }
}

export default withRouter(Booking);
