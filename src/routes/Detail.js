import React from "react";

// function Details(props) {
//     console.log(props);
//     return <span>hello</span>;
// }

class Details extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      // 존재하면
      return <span>{location.state.title}</span>;
    } else {
      return <span>{`없음`}</span>;
    }
  }
}

export default Details;
