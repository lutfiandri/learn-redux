import './App.css';
import BuyCake from './components/BuyCake';
import HooksBuyCake from './components/HooksBuyCake';
import BuyIceCream from './components/BuyIceCream';
import BuyPizza from './components/BuyPizza';

// setup redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BuyCake />
        <HooksBuyCake />
        <BuyIceCream />
        <BuyPizza />
      </div>
    </Provider>
  );
}

export default App;
