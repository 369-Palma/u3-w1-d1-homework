import { Component } from "react";
class ImageComponent extends Component {
  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        style={{ marginTop: this.props.size * 2 + "em" }}
      ></img>
    );
  }
}

export default ImageComponent;
