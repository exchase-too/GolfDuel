import React, { Component } from 'react'

export default class Home extends Component {
    state = {
    golfers: []
    }

    componentDidMount() {
    fetch('http://localhost:3000/golfer')
    .then(resp=>resp.json())
    .then(golfers =>{
        this.setState({
        golfers: golfers
        })
    })
    }
    
    render() {
        return (
            <div id='home'>
                <div style={{'backgroundColor':'white', opacity:0.75}} className='float-container'>
                    <div id='tourney data' className='float-child'>
                        <h1>Current Tourney:</h1>
                        <p><strong>The Honda Classic, PGA Tour</strong><br></br>
                        Tournament details<br></br>
                        Date: Mar 18–21, 2021<br></br>
                        Course: PGA National Resort & Spa - The Champion Course<br></br>
                        Purse: $7,000,000</p>
                    </div>
                    {/* <GolferContainer golfers={this.state.golfers}/>
                    <Wallet/> */}
                </div>
                <div id='scoreboard' className='float-child'>
                    <h1>Leaderboard</h1>
                    <table>
                        <tr>
                        <td>Pos</td><td>Player</td><td>Round</td><td>Thru</td><td>Total</td>
                        </tr>
                        <tr>
                        <td>1</td><td>D. Johnson</td><td>4</td><td>18</td><td>-12</td>
                        </tr>
                        <tr>
                        <td>2</td><td>R. McElroy</td><td>4</td><td>18</td><td>-10</td>
                        </tr>
                        <tr>
                        <td>3</td><td>J. Speith</td><td>4</td><td>18</td><td>-9</td>
                        </tr>
                        <tr>
                        <td>4</td><td>B. Watson</td><td>4</td><td>18</td><td>-7</td>
                        </tr>
                    </table>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
            </div>
        )
    }
}
