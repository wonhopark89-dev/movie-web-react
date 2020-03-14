import React from "react";


// function Details(props) {
//     console.log(props);
//     return <span>hello</span>;
// }

class Details extends React.Component {
componentDidMount() {
    const { location, history } = this.props;
    if(location.state === undefined) {
        history.push("/");
    }
}

    render () {
        const { location } = this.props;
        if(location.state) {
            // 존재하면
            return <span>hahahahahaah</span>
        } else {
            return null;
        }
    }
}


export default Details;