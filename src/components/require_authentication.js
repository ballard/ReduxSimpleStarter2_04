/**
 * Created by ivanlazarev on 21.10.16.
 */
import React, { Component } from 'react';

export default function (ComposedComponent) {
    class Authentication extends Component {
        render() {
            return <ComposedComponent {...this.props} />
        };
    }

    return Authentication;
}


//