import React from "react";

class Ninjas extends React.Component {
    render() {
        const {name, age, belt} = this.props;
        return (
            <div className="ninja">
                <div>Name: {this.props.name}</div>
                <div>Age: {age}</div>
                <div>Belt: {belt}</div> 
            </div>
        );
    }
}

export default Ninjas;