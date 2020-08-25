// add the catsReducer

const catsReducer = (state={cats: [], loading: false}, action) => {
    switch(action.type) {
        case 'ADD_CATS': 
            return {
                ...state, 
                cats: action.cats, 
                loading: false
            };
        case 'LOADING_CATS': 
            return {
                ...state, 
                cats: [...state.cats], 
                loading: true
            };
        default:
            return state;
    }
}

export default catsReducer;