import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
n: any;
a: any;
  constructor() { }

  ngOnInit() {
  this.a = new Array(100);
  for (let j = 0; j < this.a.length; j++) {
    this.a[j] = 1 + j;
    setTimeout(() => {
    document.write(this.a[j] + '<br/>');
}, j * 2000);
  }
  
  //   for (let i = 0; i < this.a.length; i++) {
  //     setTimeout(()=> console.log(this.a[i]), 2000);
  //    }
  // }
  const printNumbersForEvery2Sec = (n) => {
    for (let i = 1; i <= n; i++) {
        setTimeout( () => {
          console.log(i)
        }, i * 2000);
      }
  }
  printNumbersForEvery2Sec(100);

}
}
