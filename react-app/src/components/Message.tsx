function Message() {
    // JSX: javascript XML
    const name = "Ross";
    if (name)
        return <h1>Hello {name}</h1>;
    else
        return <h1>Hello World</h1>;
}

export default Message;