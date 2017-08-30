import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            <Link to='/'>Go to index page</Link>
        </div>;
    }

}

const mapStateToProps = state => ({
    message: state.index.message
});

export default connect(mapStateToProps, actions)(IndexComponent);
