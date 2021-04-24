import React from "react";

class CheckoutForm extends React.Component {
  state = { firstName: "", lastName: "", email: "", card: "", zipCode: "" };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { firstName, lastName, email, card, zipCode } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Checkout</h2>
        <label>First Name</label>
        <input
          id={"firstName"}
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
          type="text"
        />
        <label>Last Name</label>
        <input
          id={"lastName"}
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
          type="text"
        />
        <label>Email</label>
        <input
          id={"email"}
          name="email"
          value={email}
          onChange={this.handleChange}
          type="text"
        />
        <label>Credit Card</label>
        <input id={"card"} name="card" value={card} onChange={this.handleChange} />
        <label>Zip Code</label>
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
