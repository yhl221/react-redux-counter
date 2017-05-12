import {connect} from 'react-redux'
import Counter from '../component/count'


//将state.counter绑定到props的counter
const mapStateToProps = (state)=> {
    console.log(state);
    return {
        counter: state
    }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: ()=> {
            dispatch({type: "INCREMENT_COUNTER"});
        },
        onCut: ()=> {
            dispatch({type: "DECREMENT_COUNTER"});
        }
    };
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)