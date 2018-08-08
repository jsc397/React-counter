//created for lesson from scratch

//we started this after we finished Counter
//after we changed index to Container:

//goal to create a button that on click, starts the counter and not just when the page renders

import React, { Component } from 'react'
import Counter from './Counter'
//this we did fifth
class Container extends Component {
    constructor(props){
        super(props)
        this.state = { buttonExists: false }
        this.toggleButton = this.toggleButton.bind(this)
    }

    //then we did this 7th to create the toggle button to not break the render
    toggleButton() {
        this.setState({buttonExists: !this.state.buttonExists})
    }

    //then we did this 6th to create the toggle button
render(){
    return(
        <section>
            {/* then we added an event listener 8th to start the action..we don't need to bind it here on the toggle button is because we bound it in the constructor....test if we can not bind in the constructor and bind it here */}
            <button onClick={this.toggleButton}>Toggle Counter</button>
            {
                (this.state.buttonExists) ? 
                <Counter></Counter> //this pulls in all of the code of Counter in this one line..as long as you import and export correctly, you can you use it in tags
                : null
            }
        </section>
    )
}

}

//this is a nested component bc we are calling counter in container and container in index
export default Container
