import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import AddItems from './Pages/AddItems';
import Checkout from './Pages/Checkout';
import Items from './Pages/Items';
import Error from './Pages/Error';
import UpdateItems from './Pages/UpdateItem';

function App() {
  return (
    <>
     <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/additems" component={AddItems} />
                <Route path="/items" component={Items} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/update/:id" component={UpdateItems} />
                <Route component={Error} />

      </Switch>
    </>
  );
}

export default App;
