import {interval, takeLast, takeWhile, fromEvent} from 'rxjs'
import {filter, map, take, tap, scan, reduce, switchMap} from 'rxjs/operators'


fromEvent(document, 'click')
    .pipe(
        switchMap(
            event => {
                return interval(1000)
                    .pipe(
                        tap( v => console.log('Tap: ', v)),
                        take(5),
                        reduce((acc, v) => acc + v, 0)
                    )
            }
        )
    )
    .subscribe({
        next: v => console.log('Next: ', v),
        complete: () => console.log('Completed')
    })

// const stream$ = interval(1000)
//     .pipe(
//         //tap( v => console.log('Tap: ', v)),
//         //map((v)=> v * 3),
//         //filter(v => v % 2 === 0),
//         take(5),
//         //takeLast(3),
//         //takeWhile(v => v < 7 )
//         reduce((acc, value) => acc + value, 0 )
//     )
//
// stream$.subscribe({
//     next: v => console.log('Next: ', v),
//     complete: () => console.log('Completed')
// })