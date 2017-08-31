import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginComponent from './login/login';
import * as actions from '../actions/index';
import styles from './index.pcss';

class IndexComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.initializeMessage();
    }

    render = () => {
        return <div>
            <Link to='/path' className="red-font">Go to path</Link>
            <LoginComponent />
            { this.props.message }
        </div>;
    }

}

const mapStateToProps = state => ({
    message: state.index.message
});

export default connect(mapStateToProps, actions)(IndexComponent);
