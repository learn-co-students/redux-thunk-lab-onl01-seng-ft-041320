// write and export your action creator function here
// export const fetchCats = () => {
//     return (dispatch) => {
//         dispatch({ type: 'START_ADDING_CATS_REQUEST' });
//         fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
//             .then(res => res.json())
//             .then(cats => dispatch({ type: 'ADD_CATS', cats }));
//     };
// }

export const fetchCats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CATS'})
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
        return response.json()
    }).then(responseJSON => {
        dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
    })
}
}   