import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUserAction } from '../../actions/authentication.action';
import { } from 'react-router';

class LoginComponent extends Component {


    onSubmitAction = event => {
        // event.preventDefault();
        console.log(event);
        console.log(this.props);
        this.props.history.push('/path');
    };

    render = () => {
        const { handleSubmit } = this.props;

        return <form onSubmit={handleSubmit(this.onSubmitAction.bind(this))}>
            <div>
                <label htmlFor="username">Username</label>
                <Field name="username" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="password">Username</label>
                <Field name="password" component="input" type="password" />
            </div>
            <button type="submit">Sign In</button>
        </form>
    };


    ;

}

const mapDispatchToProps = (dispatch) => bindActionCreators({ loginUserAction }, dispatch);

export default reduxForm({
    form: 'LoginForm'
})(withRouter(connect(null, mapDispatchToProps)(LoginComponent)));