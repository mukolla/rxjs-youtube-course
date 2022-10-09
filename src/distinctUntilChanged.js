import { of, distinctUntilChanged } from 'rxjs';
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
    debounceTime(500),

    distinctUntilChanged((prev, curr) => {
        return (prev.type === 'click') &&
            (prev.offsetX === curr.offsetX && prev.offsetY === curr.offsetY);

    })

).subscribe(x => console.log(x.x))