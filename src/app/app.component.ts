import { Component, VERSION } from '@angular/core';
import { pipe, from } from "rxjs";
import { concatMap, filter, finalize, map, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

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
    console.log(new Date('booger').toISOString());
  }


  myPipe = () => pipe(
    map((val: number) => val * 2),
    map((val: number) => val * 2),
    map((val: number) => val * 2),
  ); 

}
