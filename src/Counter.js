//created for lesson from scratch

//first thing:
import React, { Component } from 'react';

//second thing

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { count:100 }
    }
    //this was the third step
    componentDidMount() {
        window.setInterval(
            () => {
                this.setState({ count: (this.state.count -1)}) //here we are setting state to a prop
            },
            1000
        )
    }


    render() {
        return(
            <section>
                The Value: {this.state.count}
            </section>
        )
    }
}
//third step we want to write a function that counts each second
export default Counter;