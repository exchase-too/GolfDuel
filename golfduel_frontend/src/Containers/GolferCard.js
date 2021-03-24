import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GolferCard extends Component {

    render() {
        return (
            <div>
                <img src={this.props.golfer.image_url} style={{width:"200px", align:"right"}} alt="GolfDuel"></img>
                <h3>{this.props.golfer.name}</h3>
                <h3>Current Odds To Win: {this.props.golfer.odds} / 1</h3>
                <Link to="/wager">
                    <button type="button">
                        Wager Now!
                    </button>
                </Link>            
            </div>
        )
    }
}
