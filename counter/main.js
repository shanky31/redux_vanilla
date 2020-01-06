let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');
let h1 = document.querySelector('h1');
let btn5 = document.querySelector('.btn5')
let btn8 = document.querySelector('.btn8')
let btn10 = document.querySelector('.btn10')
let btn12 = document.querySelector('.btn12')
let btn14 = document.querySelector('.btn14')
let btn16 = document.querySelector('.btn16')

let state = Redux.createStore(reducer);

function reducer (state= 0, action) {
    switch(action.type) {
        case "increment":
            if (state>= 100){
                alert('I dare you to go over 100');
                return state;
            } else {
                return state + action.payload;
            }
        case 'decrement' :
            if (state<=0) {
                alert('Zero is cold already, why do you wanna go below that?')
            } else {
                return state - action.payload;
            }
        case 'reset': 
            return 0;
        default:
            return state;
    }
}

var unit = 1;
function a (unit) {
    return state.dispatch({type: 'increment', payload: unit});
}
function b (unit) {
    return state.dispatch({type: 'decrement', payload: unit})
}
increment.addEventListener('click', () => a(unit));

decrement.addEventListener('click', () => b(unit));

reset.addEventListener('click', () => {
    state.dispatch({type: 'reset'})
})
btn5.addEventListener('click', () => {
    unit = 5;
})
btn8.addEventListener('click', () => {
    unit = 8;
})
btn10.addEventListener('click', () => {
    unit = 10;
})
btn12.addEventListener('click', () => {
    unit = 12;
})
btn14.addEventListener('click', () => {
    unit = 14;
})
btn16.addEventListener('click', () => {
    unit = 16;
})

state.subscribe(()=> {
    h1.innerText = state.getState();
})
h1.innerText = state.getState();
