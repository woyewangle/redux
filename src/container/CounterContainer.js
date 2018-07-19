import {connect} from 'react-redux'
import Counter from '../components/Counter'
import {decrement, increment, multiplement} from "../action";



const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index]
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onIncrement:(index) => dispatch(increment(index)),
        onDecrement:(index) => dispatch(decrement(index)),
        onMultipliy:(multipleNum,index ) => dispatch(multiplement(multipleNum,index)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)