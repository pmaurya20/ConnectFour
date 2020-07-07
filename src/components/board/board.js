import React, { Component } from 'react';
import './board.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/col';
import List from '../list/list';
import Icon1 from '../../assets/images/avatar01.png';
import Icon2 from '../../assets/images/avatar02.png';
import Button from '../buttons/button';

// Hole
let Hole = (props) => {
    return <div className="Hole"><div className={props.value}></div></div>
}

// Slat
let Slat = (props) => {
    return <div className="Slat" onClick={() => props.handleClick()}>
        {[...Array(props.holes.length)].map((x, j) =>
            <Hole key={j} value={props.holes[j]}></Hole>)}
    </div>
}

// Connect 4 Board
class Board extends Component {
    constructor() {
        super();
        this.state = {
            playerTurn: 'Player1',
            gameSelected: true,
            boardState: new Array(8).fill(new Array(8).fill(null)),
            winner: ''
        };

        this.playAgainHandler = this.playAgainHandler.bind(this);
    }

    // Make Move
    makeMove(slatID) {
        const boardCopy = this.state.boardState.map(function (arr) {
            return arr.slice();
        });
        if (boardCopy[slatID].indexOf(null) !== -1) {
            let newSlat = boardCopy[slatID].reverse()
            newSlat[newSlat.indexOf(null)] = this.state.playerTurn
            newSlat.reverse()
            this.setState({
                playerTurn: (this.state.playerTurn === 'Player1') ? 'Player2' : 'Player1',
                boardState: boardCopy
            })
        }
    }

    // Only make moves if winner doesn't exist
    handleClick(slatID) {
        if (this.state.winner === '') {
            this.makeMove(slatID)
        }
    }

    // Check the winner and make AI move IF game is in AI mode
    componentDidUpdate() {
        let winner = this.checkWinner(this.state.boardState);
        debugger
        if (this.state.winner !== winner) {
            this.setState({ winner: winner })
        }
    }

    // Checkline
    checkLine(a, b, c, d) {
        return ((a !== null) && (a === b) && (a === c) && (a === d));
    }

    // Check Winner
    checkWinner(bs) {
        for (let c = 0; c < 8; c++)
            for (let r = 0; r < 5; r++)
                if (this.checkLine(bs[c][r], bs[c][r + 1], bs[c][r + 2], bs[c][r + 3]))
                    return bs[c][r] + ', you won tournament'

        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 5; c++)
                if (this.checkLine(bs[c][r], bs[c + 1][r], bs[c + 2][r], bs[c + 3][r]))
                    return bs[c][r] + ', you won tournament'

        for (let r = 0; r < 5; r++)
            for (let c = 0; c < 5; c++)
                if (this.checkLine(bs[c][r], bs[c + 1][r + 1], bs[c + 2][r + 2], bs[c + 3][r + 3]))
                    return bs[c][r] + ', you won tournament'

        for (let r = 0; r < 5; r++)
            for (let c = 3; c < 6; c++)
                if (this.checkLine(bs[c][r], bs[c - 1][r + 1], bs[c - 2][r + 2], bs[c - 3][r + 3]))
                    return bs[c][r] + ', you won tournament'

        return "";
    }

    // Play Again Button Event
    playAgainHandler() {
        this.setState({ boardState: new Array(8).fill(new Array(8).fill(null)) })
    }

    render() {
        let winnerMessageStyle
        if (this.state.winner !== "") {
            winnerMessageStyle = "winnerMessage appear"
        } else {
            winnerMessageStyle = "winnerMessage"
        }

        // Contruct slats allocating column from board
        let slats = [...Array(this.state.boardState.length)].map((x, i) =>
            <Slat
                key={i}
                holes={this.state.boardState[i]}
                handleClick={() => this.handleClick(i)}
            ></Slat>
        )

        return (
            <Row>
                {/* Main Game */}
                <Col md={8} className="boardCol">
                    {this.state.gameSelected &&
                        <div className="Board">
                            {slats}
                        </div>
                    }
                </Col>

                {/* Game Details */}
                <Col md={4} className="gameBoard boardCol">
                    <div className="text-center">
                        <h3>Tournament</h3>
                        <div className={winnerMessageStyle}>
                            <h4 className="congrats">Congratulation!</h4>
                            <p>{this.state.winner}</p>
                        </div>
                    </div>

                    {/* List */}
                    <ul>
                        <List
                            status="green-list"
                            Icon={Icon1}
                            fileType="User1"
                            subText="Player 01"
                            inputName="Player Name"
                            inputValue={this.props.inputValueP1}
                            imagePreview={this.props.imagePreview1}>
                        </List>
                        <List
                            status="orange-list"
                            Icon={Icon2}
                            fileType="User2"
                            subText="Player 02"
                            inputName="Player Name"
                            inputValue={this.props.inputValueP2}
                            imagePreview={this.props.imagePreview2}>
                        </List>
                    </ul>

                    {/* Action Button */}
                    <div className="board-actions">
                        <Button variant="btn-primaryDarkBlue" align="center" click={this.playAgainHandler}>Play Again</Button>
                        <Button variant="btn-whiteRed" align="center" click={this.props.endTourClick}>End Tournament</Button>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Board;