import { useState, useEffect } from "react";

function FetchName() {
    const [ names, setNames ] = useState([]);
    const [ selectedName, setSelectedName ] = useState(null);
    const [ selectedPerson, setSelectedPerson ] = useState(null);

    useEffect(() => {
        fetch('./names.json')
        .then(response => response.json())
        .then(data => setNames(data));
    }, [])

    /*useEffect(() => {
        if(selectedName) {
            fetch(`./${selectedName}.json`)
            .then(response => response.json())
            .then(data => setSelectedPerson(data));
        }
    }, [selectedName]);*/

    const onSelectedNameChange = (name) => {
        fetch(`./${name}.json`)
        .then(response => response.json())
        .then(data => setSelectedPerson(data));
    }

    return (
        <div>
            {names.map((name) => <button
                onClick={() => onSelectedNameChange(name)}
            >{name}</button>)}
            <p>{JSON.stringify(selectedPerson)}</p>
        </div>
    )
}

export default FetchName;