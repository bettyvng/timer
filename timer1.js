const timers = process.argv.splice(2);
let seconds = 0;

for (let timer of timers) {
  if (timer > 0 && timer !== NaN) {
    seconds = timer * 1000;

    setTimeout(() => {
      process.stdout.write('\r' + '\007')
    }, seconds);
  }
}
// node timer1.js 10 3 5 15 9 
