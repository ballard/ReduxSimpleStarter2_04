/**
 * Created by ivanlazarev on 21.10.16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function (ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = { // "static" make Authentication.contextTypes instance
            router: React.PropTypes.object
        }

        render() {
            console.log(this.context); //wired with contextTypes
            // console.log(this.props.authenticated);
            return <ComposedComponent {...this.props} />
        };
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated}
    }

    return connect(mapStateToProps)(Authentication);
}