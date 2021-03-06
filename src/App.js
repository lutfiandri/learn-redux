import './App.css';
import BuyCake from './components/BuyCake';
import HooksBuyCake from './components/HooksBuyCake';
import BuyIceCream from './components/BuyIceCream';
import BuyPizza from './components/BuyPizza';
import NewBuyCake from './components/NewBuyCake';
import Users from './components/Users';

// setup redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <BuyCake />
        <HooksBuyCake />
        <BuyIceCream />
        <BuyPizza />
        <NewBuyCake /> */}
        <Users />
      </div>
    </Provider>
  );
}

export default App;
