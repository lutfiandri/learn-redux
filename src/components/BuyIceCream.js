import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

const BuyIceCream = () => {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>hook number of iceCream --- {numOfIceCreams}</h1>
      <button onClick={() => dispatch(buyIceCream())}>buy ice cream</button>
    </div>
  );
}
 
export default BuyIceCream;