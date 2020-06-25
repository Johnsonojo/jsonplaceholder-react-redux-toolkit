import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { addWebsite } from "../../actions";
import WebsiteForm from "../WebsiteForm/WebsiteForm";

class WebsiteCreate extends Component {
  onSubmit = (formValues) => {
    this.props.addWebsite(formValues);
  };
  render() {
    return (
      <Container>
        <h3>Add a Website</h3>
        <WebsiteForm onSubmit={this.onSubmit} />
      </Container>
    );
  }
}

export default connect(null, { addWebsite })(WebsiteCreate);
