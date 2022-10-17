import React from 'react';

class Homework1 extends React.Component {
    constructor(props) {
        // console.log(props)
        super();
        this.s2 = 201;
        this.state = {
            s1: props.p1
        }
        console.log(props)

    }
    componentDidMount() {
        let newStateS1 = this.state.s1;
        newStateS1+=5;
        this.setState({ s1: newStateS1 });

        this.s2+=5
    }
    buttonHander=()=>{
        this.s2+=50
           let handerStateS1 = this.state.s1;
           handerStateS1+=50;
           this.setState({ s1: handerStateS1 });
    }

    render() {
        return (
            <React.Fragment>
                <div>{this.state.s1}</div>
                <div>{this.s2}</div>
                <button onClick={this.buttonHander}>Press</button>
            </React.Fragment>


        );
    }
}

export default Homework1;
