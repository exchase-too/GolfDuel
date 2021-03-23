import React, { Component } from 'react'

export default class GolferCard extends Component {

    render() {
        return (
            <div>
                <img src={this.props.golfer.image_url}></img>
                <h3>{this.props.golfer.name}</h3>
                <h3>Current Odds To Win: {this.props.golfer.odds} / 1</h3>
                <button>Wager Now!</button>
            </div>
        )
    }
}
