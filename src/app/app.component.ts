import { Component, VERSION } from '@angular/core';
import { pipe, from, of } from "rxjs";
import { concatMap, filter, finalize, map, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  one = true;
  two = false;

  makeItHappen() {
    from([1,2,3])
    .pipe(
      this.myPipe(),
      map(val => val * 2)
    )
    .subscribe(val => {
      console.log(val);
    })
  }

  dateMe() {
    let a = [];
    const out = [];
    of(0,1,2,3,4,5,6,7,8,9)
    .pipe(finalize(() => {
      out.push(a);
      console.log(out);
    }))
    .subscribe(val => {
      a.push(val);
      if (a.length === 3) {
        out.push(a);
        a = [];
      }
    })
  }


  myPipe = () => pipe(
    map((val: number) => val * 2),
    map((val: number) => val * 2),
    map((val: number) => val * 2),
  ); 

}
