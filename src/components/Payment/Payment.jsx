import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../Payment/Payment.css";                             
import { createBrowserHistory } from "history";


export default class Payment extends React.Component {
    state = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };
    paynow = () => {
        localStorage.clear()
        const { history } = this.props;
        history.push("/");
    };

    render() {
        return (
            <div id="PaymentForm">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                    style={{ backgroundColor: "blue" }}
                />
                <form className="inp__form">
                    <input
                        className="inp-input"
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        className="inp-input"
                        type="tel"
                        name="name"
                        placeholder="Card Name"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        className="inp-input"
                        type="tel"
                        name="cvc"
                        placeholder="CVC"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        className="inp-input"
                        type="tel"
                        name="expiry"
                        placeholder="expiry"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />

                    <button className="pay_now" onClick={this.paynow}>
                        Pay now
                    </button>
                </form>
            </div>
        );
    }
}