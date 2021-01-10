import './App.css';
import BuyCake from './components/BuyCake';

// setup redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BuyCake />
      </div>
    </Provider>
  );
}

export default App;
