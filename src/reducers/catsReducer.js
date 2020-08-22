// add the catsReducer
const catsReducer = (
    state = { cats: [], 
        loading: false }, 
        action) => {
    switch(action.type) {
      case 'LOADING_CATS':
        return {
          ...state,
          cats: [...state.cats],
          loading: true
        }
      case 'ADD_CATS':
        return {
          ...state,
          cats: action.cats,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default catsReducer;
  //we built the catsReducer to look for two action types. 
  //The first, 'LOADING_CATS', should be dispatched before 
  //to the fetch() request is called. The other type, 'ADD_CATS', 
  //should be dispatched along with a payload of the cats JSON collection. 
  //Judging by the case for 'ADD_CATS':