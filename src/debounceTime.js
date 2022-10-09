import {fromEvent, debounceTime, tap} from 'rxjs'

let formEvent$ = fromEvent(
    document,
    'click'
)

formEvent$.pipe(
    tap( e => ({
        x: e.offsetX,
        y: e.offsetY
    })),
    debounceTime(100),
).subscribe(x => console.log(x.x))
