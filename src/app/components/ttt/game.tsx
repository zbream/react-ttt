import * as React from "react";

import { Board } from "../";

interface Snapshot {
    squares: XOList
}

interface GameState {
    snapshots: Snapshot[];
    snapshotNumber: number;
    xIsNext: boolean;
}

export class Game extends React.Component<undefined, GameState> {

    constructor() {
        super();
        this.state = {
            snapshots: [{
                squares: [
                    "", "", "",
                    "", "", "",
                    "", "", ""
                ]
            }],
            snapshotNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i: number) {
        const snapshots = this.state.snapshots.slice(0, this.state.snapshotNumber + 1);
        const current = snapshots[snapshots.length - 1];
        const squares = current.squares.slice();

        if (squares[i] || this.calculateWinner(squares)) {
            return;
        }

        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            snapshots: [...snapshots, {squares}],
            snapshotNumber: snapshots.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(snapshotNumber: number) {
        this.setState({
            snapshots: this.state.snapshots,
            snapshotNumber: snapshotNumber,
            xIsNext: (snapshotNumber % 2) ? false : true
        });
    }

    calculateWinner(squares: XO[]): XO {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0, len = lines.length; i < len; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return "";
    }

    render() {
        const snapshots = this.state.snapshots;
        const current = snapshots[this.state.snapshotNumber];
        const winner = this.calculateWinner(current.squares);

        let status: string;
        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
        }

        const moves = snapshots.map((snapshot, snapshotNumber) => {
            let description = snapshotNumber ? `Move #${snapshotNumber}` : "Game start";
            if (snapshotNumber === this.state.snapshotNumber) {
                description = `>${description}`;
            }

            let style: React.CSSProperties = {
                fontWeight: (snapshotNumber === this.state.snapshotNumber) ? "bold" : "normal"
            };
            return (
                <li key={snapshotNumber}>
                    <a style={style} href="#" onClick={() => this.jumpTo(snapshotNumber)}>{description}</a>
                </li>
            );
        })

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={i => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }

}
