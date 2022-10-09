// import {of, from, scan, Observable} from 'rxjs'
//
// const arr$ = from([1,2,3,4,6,7,8,9,10]).pipe(
//     scan((acc, value) => acc.concat(value), [])
// )
//
// arr$.subscribe(val =>{
//     console.log(val)
// })
//
// const stream$ = new Observable(observable => {
//     observable.next('First value')
//     setTimeout(() => {
//         observable.next('After 1000 ms')
//     },1000)
//
//     setTimeout(() => {
//         observable.complete()
//     },3500)
//
//     setTimeout(() => {
//         observable.error('Wrong error 2000 ms')
//     },2000)
//
//     setTimeout(() => {
//         observable.next('After 3000 ms')
//     },3000)
// })
//
//
// stream$.subscribe({
//     next: (v) => console.log(v),
//     error: (e) => console.error(e),
//     complete: () => console.info('complete')
// })



/*
import {fromEvent} from 'rxjs'
import {map} from "rxjs/operators";

fromEvent(
    document.querySelector('canvas'),
    'mousemove'
)
    .pipe(
        map(e => ({
            x: e.offsetX,
            y: e.offsetY,
            cnt: e.target.getContext('2d')
        }))
    ).subscribe(pos => {
        pos.cnt.fillRect(pos.x, pos.y, 2, 2)
})

const clear$ = fromEvent(document.getElementById('clear'), 'click')

clear$.subscribe(() => {
    const canvas = document.querySelector('canvas')
    canvas
        .getContext('2d')
        .clearRect(0,0, canvas.width, canvas.height)
})*/


import {interval, timer, range} from 'rxjs'

const sub = interval(500).subscribe( v => {
    console.log(v)
})

setTimeout(()=>{
    sub.unsubscribe()
},4000)

timer(2500).subscribe(v => console.log('timer: ' + v))

range(42, 10).subscribe(v => console.log(v))