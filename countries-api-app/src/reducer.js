export const initialState = {
    thema: false,
    
  };
  
  
  function reducer(state, action) {
    console.log(action);
  
    switch (action.type) {
      case "DARK_THEMA":
        return {
          ...state,
          thema:true,
        };
        
        case "LIGHT_THEMA":
        return {
            thema:false
        };
     
    }
  }
  
  export default reducer;
  