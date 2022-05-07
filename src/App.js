import './App.css';
import CustomCard from './Components/card';
import CustomNavbar from './Components/NavBar';
import { data } from './Components/Data';
import {Form, Row} from "react-bootstrap"
import CustomInput from './Components/Input';
function App() {
  return (
    <div className="App">
      <CustomNavbar/>
        <Row xs={1} md={2} className="g-4">
          {data.map(el =><CustomCard mydata={el}/>)}
        </Row>
      <CustomInput type="password" placeholder="Username" label="USER" />
    </div>
  );
}

export default App;
