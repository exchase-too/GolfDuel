import React, { Component } from 'react'

export default class Account extends Component {

    // state = {
    //     user: {}
    //   }    

    // componentDidMount() {
    //     fetch('http://localhost:3001/user/5')
    //     .then(resp=>resp.json())
    //     .then(user =>{
    //         this.setState({
    //         user: user
    //         })
    //     })
    //     }    
    
    render() {
        return (
            <div>
                <h2>Account</h2> <br></br>
                <p>User Name: {this.props.userData.name}</p>
                <p>Email: {this.props.userData.email}</p>
                <p>Cash Available: ${this.props.userData.cash}</p>
                <button>Edit</button>  <button>Add Cash</button>
            </div>
        )
    }
}
