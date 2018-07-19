
//
export default (state = [0,0], action) => {
    console.log("进了action了");
    switch (action.type){
        case 'INCREMENT':
        {
            const newState=[...state];
            newState[action.index]++;
            return newState;
        }
        case 'DECREMENT':
        {
            const newState=[...state];
            newState[action.index]--;
            return newState;
        }

        case 'MULTIPlIY':
        {
            const newState=[...state];
            newState[action.index]*=action.multipleNum;
            return newState;
        }
        default:
            return state
    }
}