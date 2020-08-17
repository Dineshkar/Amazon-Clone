export const initialState = {
    basket: [], 
    user: null,
     //If you put any object inside the array it will display the length of the basket on the screen
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {

        case "Add_TO_BASKET":
        //Logic for adding item to the basket
        return {
            ...state,
            basket: [...state.basket, action.item],
        };
        case "REMOVE_ITEM_FROM_BASKET":
        //Logic for removing item to the basket
        return ( state );
        
        default:
            return state;
    }
};

export default reducer;