import Alert from './components/Alert';
import ButtonTest from './components/ButtonTest';
import ListGroup from './components/ListGroup';
import Message from './components/Message';
import UserForm from './components/UserForm';
import TestMemo from './components/TestMemo';
import FetchNames from './components/FetchNames';
import {useState, useCallback} from "react";

function App() {
  //let items: string[] = [];
  let items = [
      "Ross",
      "Charlie",
      "Trab"
  ];

  //const nums = [1,3,6,3,5,74,13,34];

  const handleSelectItem = (item: string) => { console.log(item); }
  const [alertVisible, setAlertVisibility] = useState(false);

  const [nameState, setNameState] = useState(items);
  const pushName = useCallback((name: string) => { setNameState(items => [...items, name]) }, []);

  return <div>
      <Message></Message>

      <ListGroup 
        items={nameState}
        heading="Names"
        onSelectItem={ handleSelectItem } />
        <hr/>


        {alertVisible && 
        <Alert
          onClose={ () => setAlertVisibility(false) }>
          <h2>Hello there</h2>
        </Alert>}

        <ButtonTest 
          btnText="YES!"
          color="success"
          onClick={ () => setAlertVisibility(true) } />

          <UserForm onAddName={pushName} />

          {/*<TestMemo nums={nums} />*/}

          <FetchNames />
    </div>
}

export default App;