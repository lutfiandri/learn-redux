import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const HooksBuyCake = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>hook number of cake --- {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
}
 
export default HooksBuyCake;