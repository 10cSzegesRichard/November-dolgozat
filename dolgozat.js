function crap(x, bags, cap){
    var yard = x.reduce( (a, b) => a.concat(b) );
    return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
  }
  
  
  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }
  
  
  function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
  }


  function findDifference(a, b) {
    return Math.abs(a.reduce((a,b)=>a*b) - b.reduce((a,b)=> a*b))
  }

