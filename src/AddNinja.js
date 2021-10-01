import React from "react";

class AddNinja extends React.Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    submitHandler = (e) => {
        e.preventDefault();
        // console.log("Current State", this.state);
        this.props.addNinja(this.state);

    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.changeHandler}/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.changeHandler}/>
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.changeHandler}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;