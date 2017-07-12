import * as React from "react";

import { Square } from "../";

interface BoardProps {
    squares: XOList;
    onClick: (i: number) => void;
}

export class Board extends React.Component<BoardProps, undefined> {

    render() {
        return (
            <div>
                {this.renderRow(0)}
                {this.renderRow(1)}
                {this.renderRow(2)}
            </div>
        );
    }

    renderRow(i: number) {
        return (
            <div className="board-row">
                {this.renderSquare(3 * i + 0)}
                {this.renderSquare(3 * i + 1)}
                {this.renderSquare(3 * i + 2)}
            </div>
        );
    }

    renderSquare(i: number) {
        return (
            <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
        );
    }

}
