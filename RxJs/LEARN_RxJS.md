# LEARN RXJS

RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

## Links
[RxJS main website](https://rxjs-dev.firebaseapp.com)
[ReactiveX website](http://reactivex.io)
[An overview in a video (15 min)](https://www.youtube.com/watch?v=2LCo926NFLI)
[Nice introduction in french](https://www.julienpradet.fr/tutoriels/introduction-a-rxjs/)
[How it's work with Andre Staltz](https://www.youtube.com/watch?v=uQ1zhJHclvs)

## First step

For try purpose use a cdn [cloudfare](https://cdnjs.com/libraries/rxjs)
Or a unpkg like in this example.
````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://unpkg.com/@reactivex/rxjs@5.0.0/dist/global/Rx.js"></script>
    <title>Test RxJS</title>
</head>
<body>
    <h1>RxJS</h1>
    <div id="rx"></div>
    
    <script src="tryrx.js"></script>
</body>
</html>
````

````js

const observable = Rx.Observable.create( observer => {
    observer.next('Hello');
    observer.next('there!');
});

observable.subscribe(val => print(val));

//-- helper to print values
function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.getElementById('rx').appendChild(el);
}
````

## How it works

reactive programming use the observer pattern [link about this pattern](#).  
This systeme could take 3 params (1 at least : next):     
+ next : for the data stream
+ error : in case of error
+ completed : to prevent when it's done


It Have always an Observable : the stream of data & an Observer who subscribe to the Observable.      

### Basics
Ex 1 -> 6 use basic Observable to test.     
+ create
+ fromEvent
+ fromPromise
+ timer
+ interval
+ of

example of use (create the Observable and then subscibe to it):
````js
const obsInterval = Rx.Observable.interval(1000);
obsInterval.subscribe(check => print( new Date().getSeconds() ));
````

## COLD vs HOT
Ex 7 -> 9
+ cold method : 1 Observable 2 subscribers = 2 differents stream 
+ hot method_1 : 1 Observable 2 subscribers = 1 same stream
+ hot method_2 w/ publish & connect: 1 Observable 2 subscribers = 1 same stream

