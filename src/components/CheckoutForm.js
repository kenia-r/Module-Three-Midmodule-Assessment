import React from "react";
import "./CheckoutForm.css"

const numInputs = (str) => {
  const nums = "0123456789";
  for (const char of str) {
    if (!nums.includes(char)) return false;
  }
  return true;
};

class CheckoutForm extends React.Component {
  state = { firstName: "", lastName: "", email: "", card: "", zipCode: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const { totalPrice } = this.props;
    const { firstName, lastName, email, card, zipCode } = this.state;
    if (!firstName || !lastName || !email || !card || !zipCode) {
        window.alert("Input is not valid")
    } else if (card.length !== 16 || !numInputs(card)) {
        window.alert("Credit card number is not valid")
    } else if (zipCode.length !== 5 || !numInputs(zipCode)) {
        window.alert("Zip code is not valid")
    } else {
        window.alert(`Purchase complete! You will be charged ${totalPrice}`)
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { firstName, lastName, email, card, zipCode } = this.state;
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <h2>Checkout</h2>
        <label htmlFor={"firstName"}>First Name</label>
        <input
          id={"firstName"}
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
          type="text"
        />
        <label htmlFor={"lastName"}>Last Name</label>
        <input
          id={"lastName"}
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
          type="text"
        />
        <label htmlFor={"email"}>Email</label>
        <input
          id={"email"}
          name="email"
          value={email}
          onChange={this.handleChange}
          type="text"
        />
        <label htmlFor={"card"}>Credit Card</label>
        <input
          id={"card"}
          name="card"
          value={card}
          onChange={this.handleChange}
        />
        <label htmlFor={"zipCode"}>Zip Code</label>
        <input
          id={"zipCode"}
          name="zipCode"
          value={zipCode}
          onChange={this.handleChange}
        />
        <button type="submit">Buy Now</button>
      </form>
    );
  }
}

export default CheckoutForm;
