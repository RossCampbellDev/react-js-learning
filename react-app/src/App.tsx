import Alert from './components/Alert';
import ButtonTest from './components/ButtonTest';
import ListGroup from './components/ListGroup';
import Message from './components/Message';
import {useState} from "react";

function App() {
  let items = [
      "Ross",
      "Charlie",
      "Trab"
  ];

  const handleSelectItem = (item: string) => { console.log(item); }
  const [alertVisible, setAlertVisibility] = useState(false);

  return <div>
      <Message></Message>

      <ListGroup 
        items={items}
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
    </div>
}

export default App;