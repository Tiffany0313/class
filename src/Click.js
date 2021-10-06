import React, { useState, useEffect } from "react";

export default function Click() {
    // const [count, setCount] = useState(0);
    console.log('hey')
    const [list, setList] = useState([]);

    const handleClick = () => {
        // setCount(count + 1);
        let value = Math.floor(Math.random() * 11);
        setList((...old) => [old, value + ","]);
    };

    // const showCount = function () {
    //   console.log(count);
    // };

    // useEffect(showCount);

    const showList = () => {
        console.log(list);
    };

    useEffect(showList);

    return (
        <>
            <button onClick={handleClick}>Click me</button>
            <p>內容: {list}</p>
        </>
    );
}
