import React, {Component} from 'react';

class Counter extends Component{
    state = {count:0, greeting: "Hello"};
    componentDidMount(){
        //this.setState({count: this.state.count+1, greeting:"Loaded now"});
        //setInterval(() => {this.setState({count: this.state.count+1, greeting:"Loaded now"})}, 500);
    }

    increment = () => {this.setState({count: this.state.count+1, greeting:"Loaded now"});}
changeOutput = (e) => {
    e.preventDefault();
    this.setState({greeting: e.target.value})};
    render() {
        return (
            <div>
                <p>
                    <input onChange = {this.changeOutput}></input>
                </p>
                <p>
                    {this.state.greeting}
                </p>
             </div>
             )
    }
}

export default Counter;