import { connect } from 'react-redux';
import { buyCake } from '../redux';

const BuyCake = ({numOfCakes, buyCake}) => {
  return (
    <div>
      <h1>number of cakes --- {numOfCakes}</h1>
      <button onClick={buyCake}>buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // masuk ke props
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // masuk ke props
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyCake);