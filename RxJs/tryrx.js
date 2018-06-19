console.log('Getting started with RxJS!');

//-- [ Ex 1 ] ----------------------------------------------> CREATE
/**
 * The easiest way to create an Observable.
 * While you don't subscibe to an Observable nothing happen.
 * Try this to check if everything work fine
 */

// const observable = Rx.Observable.create( observer => {
//     observer.next('Hello');
//     observer.next('there!');
// });

// observable.subscribe(val => print(val));


//-- [ Ex 2 ] ----------------------------------------------> FROM EVENT
/** 
 * Observable from click event in the DOM
 * Rx.Observable.fromEvent(document, 'click')
 * On each click it log the event.
*/

// let clickObservable = Rx.Observable.fromEvent(document, 'click');
// clickObservable.subscribe(e => console.log(e));


//-- [ Ex 3 ] ----------------------------------------------> FROM PROMISE
/**
 * Rx is used often for promises.
 * Here we simulate a promises with setTimeout.
 * like an API call or any async task.
 */

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resolved dude!');
//     }, 1000);
// });

// const obsPromise = Rx.Observable.fromPromise(promise);
// obsPromise.subscribe(result => print(result));


//-- [ Ex 3' ] ----------------------------------------------> FROM PROMISE REAL LIFE EXAMPLE
//-- https://stackoverflow.com/questions/44877062/how-to-convert-a-fetch-api-response-to-rxjs-observable
const promisePoke = new Promise((resolve, reject) => {
    fetch('https://swapi.co/api/people/1/')
    .then(data => data.json())
    .then(dt => dt)
    .catch(e => console.log(e));
});
const obsPoke = Rx.Observable.fromPromise(fetch('https://swapi.co/api/people/1/'));
obsPoke.subscribe(result => result.json()
                    .then(data => print(data.name)));

//-- [ Ex 4 ] ----------------------------------------------> TIMER
/**
 * We use timer to create a delay before send the stream.
 * timer take one parameter, time in millis.
 */

// const obsTimer = Rx.Observable.timer(1000);
// obsTimer.subscribe(done => print('all done!'));


//-- [ Ex 5 ] ----------------------------------------------> INTERVAL
/**
 * This one is used emit stream based on an interval of time.
 * The parameter is in milllis.
 * Here we print the second value each second (1000);
 */

// const obsInterval = Rx.Observable.interval(1000);
// obsInterval.subscribe(check => print( new Date().getSeconds() ));


//-- [ Ex 6 ] ----------------------------------------------> OF
/**
 * of is used to pass any kind of data (stream).
 */

// const obsOf = Rx.Observable.of('What ever you want', ['toto', 10], true, 123456, 4.23, {name: 'michel', age: 54});
// obsOf.subscribe(stream => print(stream));


//-- HOT AND COLD

//-- [ Ex 7 ] ----------------------------------------------> COLD
/**
 *  A cold observable is a data created inside of the Observable.
 *  Here we create two subscriber, each one will reeve a diferent stream.
 *  /!\
 */

// const obsCold = Rx.Observable.create( observer => {
//     observer.next( Math.random() );
//     observer.next( 'hello is not the same' );
// });

// obsCold.subscribe(a => print(`Subscriber A: ${a}`));
// obsCold.subscribe(b => print(`Subscriber B: ${b}`));


//-- [ Ex 8 ] ----------------------------------------------> HOT
/**
 * the hot version is when the data is produced outside the Observable.
 */


// const randNumber = Math.random(); 
// const welcome = 'this the same hello';
// const obsHot = Rx.Observable.create( observer => {
//     observer.next( randNumber );
//     observer.next( welcome );
// });

// obsHot.subscribe(a => print(`Subscriber A: ${a}`));
// obsHot.subscribe(b => print(`Subscriber B: ${b}`));


//-- [ Ex 9 ] ----------------------------------------------> HOT WITH PUBLISH & CONNECT
/**
 * In this version we transform a cold Observable to Hot with publish(),
 * and the connect method. without connect, nothing will happen.
 * Now the 2 subscriber get the same data/stream!!!
 */

// const obsCold = Rx.Observable.create( observer => {
//     observer.next( Math.random() );
// });

// const hot = cold.publish();

// hot.subscribe(a => print(`Subscriber A: ${a}`));
// hot.subscribe(b => print(`Subscriber B: ${b}`));

// hot.connect();



//-- helper to print values
function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.getElementById('rx').appendChild(el);
}
