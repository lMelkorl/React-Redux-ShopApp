import { Route, Switch } from 'react-router-dom';
import { Col, Container } from 'reactstrap';
import CartDetail from '../cart/CartDetail';
import NotFound from '../common/NotFound';
import Navi from '../navi/Navi';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import Dashboard from '../root/Dashboard';

function App() {
  return (
    <>
      <Navi />
      <Container>
        <Col>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/product" exact component={Dashboard} />
            <Route path="/cart" exact component={CartDetail} />
            <Route path="/saveproduct/:productId" exact component={AddOrUpdateProduct} />
            <Route path="/saveproduct/" exact component={AddOrUpdateProduct} />
            <Route exact component={NotFound} />
          </Switch>
        </Col>
      </Container>
    </>

  );
}

export default App;
