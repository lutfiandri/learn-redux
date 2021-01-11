import { buyPizza } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

const BuyPizza = () => {
  const numOfPizzas = useSelector(state => state.pizza.numOfPizzas);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>num of pizzas --- {numOfPizzas}</h1>
      <button onClick={() => dispatch(buyPizza())}>buy pizza</button>
    </div>
  )
}

export default BuyPizza;