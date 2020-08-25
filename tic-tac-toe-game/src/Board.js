import React from 'react';
import * as utils from './functions.js';
import './index.css';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}
	
	renderSquare(i) {
		return <utils.square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
	}
	
	handleClick(i) {
		const squares = this.state.squares.slice();
		if (utils.findWinner(squares) || squares[i]) {
			return;
		}
    
		if(utils.isAllSquareClicked(squares) === true) {
			return;
		}
		
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext
		});
	}

	render() {
		const winner = utils.findWinner(this.state.squares);
		const isFilled = utils.isAllSquareClicked(this.state.squares);
		let status;
		if (winner) {
			status = 'Winner: ' + winner;
		} else if(!winner && isFilled) {
			status = 'Game drawn';
		} else {
			status = 'Now ' + (this.state.xIsNext ? 'X' : 'O') + '\'s turn';
		}
    
		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
				  {this.renderSquare(0)}
				  {this.renderSquare(1)}
				  {this.renderSquare(2)}
				</div>
				<div className="board-row">
				  {this.renderSquare(3)}
				  {this.renderSquare(4)}
				  {this.renderSquare(5)}
				</div>
				<div className="board-row">
				  {this.renderSquare(6)}
				  {this.renderSquare(7)}
				  {this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

export default Board;