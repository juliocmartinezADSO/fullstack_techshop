const initialState = {
    token: null,
    isAuthenticated:false,
    basket: [],
    user: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_TOKEN":
        return { ...state, token: action.payload, isAuthenticated:true  };
      default:
        return state;
    }
  };
  
  export default reducer;
  