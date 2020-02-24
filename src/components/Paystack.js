import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PaystackButton from "react-paystack";

import "./styles/signup.css";
import { bindActionCreators } from "redux";
import { Pay } from "./../actions/userActions";
import { connect } from "react-redux";
import dotenv from "dotenv";

dotenv.config();

class Paystack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: process.env.REACT_APP_PAYSTACK_KEY,
      email: this.props.email,
      amount: "",
      disable: true,
      error: null
    };
  }

  handleOnChange = e => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      this.setState(() => ({
        ...this.state,
        amount: value,
        disable: false,
        error: null
      }));
    } else {
      this.setState(() => ({
        ...this.state,
        amount: "",
        error: null
      }));
    }
  };

  callback = response => {
    this.props.Pay(this.props.token, this.state.amount, response);
    this.props.history.push("/todos");
  };

  close = () => {
    this.props.history.push("/todos");
  };

  HandleOnClick = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.history.push("/todos");
  };

  componentDidUpdate() {
    if (this.state.amount < 100 && !this.state.disable) {
      this.setState(() => ({
        ...this.state,
        disable: true,
        error: `Amount Less than minimum required amount`
      }));
    }
  }

  getReference = () => {};

  render() {
    return (
      <div className="CreateTodo_modal">
        <div className="CreateTodo_modalContent">
          <button className="Create_todo_close" onClick={this.HandleOnClick}>
            X
          </button>
          <p>
            Hey, sorry due to insufficient fund you can't create or update your
            Todo. so please fund your account with atleast &#8358;100
          </p>
          <form onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="amount" className="show_hide">
                Amount
              </label>
              <input
                placeholder="input Amount eg. 200"
                type="number"
                value={this.state.amount}
                onChange={this.handleOnChange}
              />
            </div>
            <PaystackButton
              text="Fund Account"
              class="payButton"
              callback={this.callback}
              close={this.close}
              disabled={this.state.disable}
              reference={this.getReference()}
              email={this.state.email}
              amount={this.state.amount * 100}
              paystackkey={this.state.key}
              tag="button"
            />
          </form>
          {this.state.error && (
            <p className="signup_error">{this.state.error}</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.User.user.email,
  token: state.User.user.token.token
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ Pay }, dispatch);
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Paystack)
);
