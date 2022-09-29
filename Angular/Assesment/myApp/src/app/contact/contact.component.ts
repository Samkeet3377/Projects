import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  obj1: any
  normalSubject: Subject<any>
  sub1: any
  constructor(
  ) {

    this.normalSubject = new Subject();

    // const test = new Observable(forloop);
    // test.subscribe({
    //   next(data) { console.log(data); },
    //   complete() { console.log("Completed"); }
    // });
    // function forloop(observer:any) {
    //     for(var i = 1; i <= 10; i++) {
    //       // Calls the next observable notification
    //         observer.next(i);
    //         observer.next("2 * "+ i +" = "+ i*2);
    //   }
    // observer.complete();
    // Unsubscribe after completing the sequence
    //   return {unsubscribe(){}};
    // }

  }

  ngOnInit(): void {

    const observe = new Observable((observe)=> {
      observe.next('Ku6Bhi');
    });

    this.obj1 = observe.subscribe({
      next: (x) => {
        console.log(x);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });


    this.normalSubject.next('First');

    this.sub1 = this.normalSubject.subscribe({
      next: (n) => {
        console.log('noti1 : '+n);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });

    this.normalSubject.next('Second');

  }

}
