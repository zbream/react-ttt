import * as React from "react";

interface SquareProps {
    value: string,
    onClick: () => void
}

export class Square extends React.Component<SquareProps, undefined> {

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
    
}

// export function SquareSFC (props: SquareProps) {
//     return (
//         <button className="square" onClick={() => props.onClick()}>
//             {props.value}
//         </button>
//     );
// }
