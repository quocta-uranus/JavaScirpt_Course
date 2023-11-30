// import {createStore} from 'https://cdn.skypack.dev/redux';

///////////////////////////// MY REDUX////////////////////////////////////

function createStore ( reducer) {
     let state = reducer(undefined, {});
     const subscribers = [];

     return {
         getState() {

            return state;
         },
         dispatch(action) {
            state = reducer(state, action);

            subscribers.forEach(subscriber => subscriber());
         },
         subscribe(subscriber) {
            subscribers.push(subscriber);

         }
}
}

//////////////////////////////// MY APP////////////////////////////////////////
const initState = 0;
// Reducer
function bankReducer(state = initState, action ) {
    switch (action.type) {
        case 'SEND':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state;
    }

}
//Store
const store = window.store = createStore(bankReducer);

//Actions
function actionDeposit(payload) {
    return {
        type: 'SEND',
        payload
    }
}

function actionWithDraw(payload) {
    return {
        type: 'WITHDRAW',
        payload
    }
}

//DOM event 
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');
//Event handlers
deposit.onclick = function () {
    store.dispatch(actionDeposit(10));
    
}
withdraw.onclick = function () {
    store.dispatch(actionWithDraw(10));
    
}
// :istener
store.subscribe(() => {
    render();
}
)


// Render
function render() {
    const output = document.querySelector('#output');
    output.innerText = store.getState();   
}


render();
