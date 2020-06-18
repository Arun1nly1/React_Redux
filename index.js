
// import redux from 'redux';
const redux = require("redux")
const reduxLogger = require("redux-logger")

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_iceCream = 'BUY_iceCream'


function buyCake(){
    return(
        {
            type: BUY_CAKE,
            info: 'first redux action'
        }
         )

}

function buyiceCream(){
    return(
        {
            type: BUY_iceCream,
          
        }
         )

}
// (previousState, action) => newState
// const initialState = {
//     numOfCakes : 10,
//     numberOfIceCream : 20
// }

const initialCakeState = {
    numOfCakes : 10
}

const initialIceCreamState = {
    numberOfIceCream :20
}

// const reducer = (state = initialState, action)=>{
//     switch (action.type){
//         case BUY_CAKE :return {
//             ...state,
//             numOfCakes : state.numOfCakes - 1
//         }
//         case BUY_iceCream :return {
//             ...state,
//             numberOfIceCream : state.numberOfIceCream - 1
//         }
//         default: return state
//     }
// }
const cakeReducer = (state = initialCakeState, action)=>{
    switch (action.type){
        case BUY_CAKE :return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }
        
        default: return state
    }
}
 
const iceCreamReducer = (state = initialIceCreamState, action)=>{
    switch (action.type){
        case BUY_iceCream :return {
            ...state,
            numberOfIceCream : state.numberOfIceCream - 1
        }
        
        default: return state
    }
}
 
 const rootReducer = combineReducers({
     cake: cakeReducer,
     iceCream : iceCreamReducer
 })

 const store = createStore(rootReducer,applyMiddleware(logger))
// const store = createStore(reducer)

console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyiceCream())
store.dispatch(buyiceCream())
unsubscribe()
