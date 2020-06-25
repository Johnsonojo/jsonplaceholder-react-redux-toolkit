import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllWebsite } from "../../actions";

class WebsiteList extends Component {
  async componentDidMount() {
    await this.props.getAllWebsite();
  }

  renderWebsite = () => {
    const { allWebsites } = this.props.websites;

    return allWebsites.map((website) => (
      <Container key={website.id}>
        <div>
          <h3>{website.siteName}</h3>
          <h6>{website.category}</h6>
          <Button size="sm" variant="primary">
            visit
          </Button>{" "}
          <Button size="sm" variant="success">
            Edit
          </Button>{" "}
          <Button size="sm" variant="danger">
            Delete
          </Button>{" "}
        </div>
        <br></br>
        {/* <hr /> */}
      </Container>
    ));
  };
  render() {
    return <div>{this.renderWebsite()}</div>;
  }
}

const mapStateToProps = (state) => ({
  websites: state.websites,
});

export default connect(mapStateToProps, { getAllWebsite })(WebsiteList);
