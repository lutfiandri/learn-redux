import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { buyCake } from '../redux';

const NewBuyCake = () => {
  const [num, setNum] = useState(1);
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>new with payload | number of cake --- {numOfCakes}</h1>
      <form>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      </form>
      <button onClick={() => dispatch(buyCake(num))}>buy {num} cake</button>
    </div>
  );
}
 
export default NewBuyCake;