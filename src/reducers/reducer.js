// import {events} from "../App"


//  const initialState = {
// events:  events
//  }

 const reducer = (state =[], action) => {
        // console.log(state);

    switch (action.type) {
        // case "add_event":
        //     const {  data } = action.payLoad;
        //     const { title, start , end } = data;

        //     // console.log(title)
        //     // console.log(start)
        //     // console.log(end)
        //     return {
        //         ...state,
        //         events: [...state.events,
        //         { title:title , start :start , end: end }
        //         ]
                
        //     }
            case "fetch-data":
                return {
                   
 
                }

            default: return state;


}
 }
 export default reducer