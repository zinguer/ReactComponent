
import './App.css';
import Address from './componets/Profiile/Address';
import FullName from './componets/Profiile/FullName';
import ProfilePicture from './componets/Profiile/ProfilePhoto';
import { Card ,  Title , Body , Text , Button} from 'react-bootstrap'

function App() {
  return (
    <div className="App">




<Card border="dark"  style={{ width: '20rem' }}>
  <ProfilePicture variant = 'top' ></ProfilePicture>
  <Card.Body>
    <Card.Title><FullName></FullName></Card.Title>
    <Card.Text>
      <Address></Address>
    </Card.Text>
   <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  );
}

export default App;
