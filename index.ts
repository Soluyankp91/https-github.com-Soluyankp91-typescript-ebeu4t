import { combineLatest, forkJoin, fromEvent } from 'rxjs';
import { combineAll, map, mergeMap, withLatestFrom, zip } from 'rxjs/operators';
// Build a Mortgage Claculator using Rxjs and calculateMortgage method
import { calculateMortgage } from './calculate';

combineLatest(
  fromEvent(document.getElementById('loanAmount'), 'input').pipe(
    map(e => {
      let arg: number = parseInt((e.target as HTMLInputElement).value);
      return parseInt((e.target as HTMLInputElement).value);
    })
  ),
  fromEvent(document.getElementById('loanInterest'), 'input').pipe(
    map(e => {
      let arg: number = parseInt((e.target as HTMLInputElement).value);
      return arg;
    })
  ),
  fromEvent(document.getElementById('loanLength'), 'input').pipe(
    map(e => {
      let arg: number = parseInt((e.target as HTMLInputElement).value);
      return arg;
    })
  )
).subscribe({
  next: args => {
    let result = calculateMortgage(...args);
    console.log(result);
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
  }
});
