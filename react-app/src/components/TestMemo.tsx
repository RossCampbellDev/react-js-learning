import { useMemo } from "react";

interface Props {
    nums: number[]
}

function TestMemo({nums}: Props) {
    const total = nums.reduce((t, n) => t + n, 0);
    const totalMemo = useMemo(
        () => nums.reduce((t, n) => t + n, 0),
        [nums]
    );

    return (
        <>
        <ul className="list-group">
            {nums.map((num) => 
                <li 
                    key={num}
                    className="list-group-item"
                >{num}</li>
            )}
        </ul>
        <h3>Total: { totalMemo }</h3>
        </>
    );
}

export default TestMemo;