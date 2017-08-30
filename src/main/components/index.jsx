import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class IndexComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.initializeMessage();
    }

    render = () => {
        return <div>
            { this.props.message }
        </div>;
    }

}

const mapStateToProps = state => ({
    message: state.index.message
});

export default connect(mapStateToProps, actions)(IndexComponent);
