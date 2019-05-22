import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
      this.state={
        countDown:'',
        iftar: ''
      }

  }

 /*
// --------------------------------------------------------------------------- 5 kyu

                |     |
                 \   /
                  \_/
             __   /^\   __
            '  `. \_/ ,'  `
                 \/ \/
            _,--./| |\.--._
         _,'   _.-\_/-._  `._
              |   / \   |
              |  /   \  |
             /   |   |   \
           -'    \___/    `-



 */

//comeback to you someday
 //https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript


convertFrac = (e) => {
  let final = [],arr = [],y = 2,a = 0,c = 0,d = 0,count=1

  for(let i = 0; i < e.length; i++){
    a = e[i][1]
    while(a >= y){
     let k = a%y==0 ? (arr.push(y),a = a/y,y = 2) : y++
    }
  }
  c = arr.reduce((a,b)=> a * b,1)



  for(let j = 0; j < e.length; j++){
    d = (c/parseInt(e[j][1]))
    e[j][0] = parseInt(e[j][0]) * d
    e[j][1] = parseInt(e[j][1]) * d

  }
  let f = e.reduce((a,b) => final.push(b[0]),0)

  final.push(c)

  for(let k = 0; k < final.length;k++){
    for(let l = 0; l < final.length;l++){
      if(final[l]%k==0){
      }else{
        count = k-1
      }
    }
  }

  for(let m = 0; m < e.length;m++){
    e[m][0] = parseInt(e[m][0]) / count
    e[m][1] = parseInt(e[m][1]) / count
  }

  return e
}








  /*

  // ------------------------------------------------------------------------- 6 KYU

              _________                  .    .
             (..          \_   .,       | \  / |
              \       *    \  /  |      \  \/ /
               \______      \/   |       \   /
                  vvvv\      \   |     ./   |
                  \^^^^  ==     \_ _- /     |
                   `\_   ===    \.         |
                   / /\_   \   /           /'
                   |/   \_  \.| ________/'

  */


/*



function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

*/


//https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

comp = (array1, array2) =>{
  if(array1 == null || array2 == null) {
    return false
  }
  for(let i in array2) {
    array2[i] = Math.sqrt(array2[i])
  }
  let k = array1.sort().join("")
  let j = array2.sort().join("")
   return k == j ? true : false
}




 //https://www.codewars.com/kata/persistent-bugger/train/javascript
/*

BEST ANSWER

const persistence = num => {

  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0;
}

*/

  persistence = (e) => {
    let count = 0,k = 0
      while(e.toString().length != 1){
      let arr = e.toString().split('')
      k = arr.reduce((a,b)=>{
          return a * b
      },1)
      e = k
      count++
    }
    return count

  }


  //https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
  /*
  BEST ANSWER

  function tribonacci(signature,n){
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
*/

  tribonacci = (signature,n) => {
    let j = n
    let a = signature[0]
    let b = signature[1]
    let c = signature[2]
    let d = ''
    let arr = []

    while(j-3 > 0){
      d = a + b + c
      a = b
      b = c
      c = d
      signature.push(d)
      j--
    }

    return n > 0  ? n == 1 ? [a]  : n == 2 ? [a,b] : signature  : []
  }

  //https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
  digPow = (n,p) => {
    let splitN = n.toString().split("")
    let k  = splitN.reduce((a,b,i)=>{return parseInt(a)+ Math.pow(parseInt(b),p+(i))},0)
    while(n*p <= k){
    if(n*p == k) return p
    p++
    }
    return -1
  }

  //https://www.codewars.com/kata/iq-test/train/javascript
  iqTest = (numbers) => {
    let odd,even,output,yess = 0
    let k = numbers.split(' ')
    for(let i in k){
      k[i]%2==0? odd++: even++
    }
    if(odd>even){
      for(let i in k){
        k[i]%2==0?  output = parseInt(i) + 1  : yess += 0
      }
    }else{
      for(let i in k){
        k[i]%2!=0 ?  output = parseInt(i) + 1 : yess += 0
      }
    }
    return output
  }


  //https://www.codewars.com/kata/your-order-please/train/javascript
  // needs to be optimize!
  orderWords  = (e) => {
  let stringSplit = e.split(' ')
  let newArr = []

   while(newArr.length < stringSplit.length){
     let j,i = 0;
      for( i in stringSplit){
          for( j in stringSplit[i]){
            if(stringSplit[i][j] == newArr.length+1){
              newArr.push(stringSplit[i])
            }
        }
      }
    }
    let combineString = ''
    for(let i = 0 ; i < newArr.length;i++){
        i+1 < newArr.length ?   combineString = combineString + newArr[i] + " "  :  combineString = combineString + newArr[i]
    }
    return  combineString
  }

  reverseOrRotate = (str,sz)  => {
    //123456 987654
    const strArray = []
    //ans: 234561 876549
    if(str === "0" || sz === "0"  || sz > str.length){
      return ""
    }else{
      if(str.length%sz == 0){
        for(let i = 0; i < sz;i++){
          if(i*sz == str.length){
            for(let j = 0; j < i; j++){
              let res = str.substring(sz*j,(j+1)*sz);
              // console.log(sz*j, ' ',(j+1)*sz)
              strArray.push(res)
            }
          }
        }
      }
      console.log("chunk: ",strArray)
      for(let k = 0; k < strArray.length; k++){
        const totalSum = 0
        const chunkLLength = 0
        for(let l = 0; l < strArray[k].length; l++){
         totalSum  = totalSum + parseInt(strArray[k][l])
        }
        if(totalSum%2 === 0){
          console.log(strArray[k])
        }else{
          if(strArray[k][strArray[k].length] < sz){
            console.log(strArray[k][strArray[k].length-1] , "yes")
          }else{
            console.log(strArray[k][strArray[k].length-1], "no")

          }
        }
      }


      return true
    }
  }

  dubstep = (e) => {
    const str = e.split("WUB")
    let strArrayNoSpace = []

    for(let i = 0; i < str.length; i++){
      if(str[i] !== ""){
        strArrayNoSpace.push(str[i])
      }
    }
    let strTotal = strArrayNoSpace[0];
    for(let j = 1; j < strArrayNoSpace.length; j++){
      strTotal = strTotal + " " + strArrayNoSpace[j]
    }
      return strTotal
  }


  numberInExpandedForm = (e) => {
    let numberToString = e.toString()
    let arrayToString = []
    let getNonZero = ''
      for(let i = 0; i < numberToString.length ; i++){
        if(numberToString[i] !== "0"){
          getNonZero = numberToString[i];
          for(let j = i+1; j < numberToString.length ; j++){
            getNonZero += '0';
          }
          arrayToString.push(getNonZero)
        }
    }
    let getTotal = arrayToString[0]
    for(let k = 1; k < arrayToString.length; k++){
        getTotal = getTotal + ' + ' +  arrayToString[k]
      // console.log(arrayToString[k])
    }
    return getTotal
  }


  // -------------------------------------------------------------------------------- 7 Kyu

  /*

                          _____
                        ,-"     "-.
                      /  o       o \
                     /    \     /   \
                    /      )-"-(     \
                   /      ( 6 6 )     \
                  /        \ " /       \
                 /          )=(         \
                /    o   .--"-"--.   o   \
               /     I  /  -   -  \  I    \
            .--(    (_}y/\       /\y{_)    )--.
            (    ".___l\/__\_____/__\/l___,"    )
             \                                 /
               "-._      o O o O o O o      _,-"
                  `--Y--.___________.--Y--'
                    |==.___________.==|
                    `==.___________.==' `
  */


  //https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
  sumTwoSmallestNumbers = (e) => {
    return  e.sort((function(a, b){return a - b}))[0] + e.sort((function(a, b){return a - b}))[1]
  }

  //https://www.codewars.com/kata/ones-and-zeros/train/javascript
  //best answer
  //const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

  binaryArrayToNumber = (arr) => {
    let j  = 0
    for(let i in arr.reverse() ){
     arr[i] == '1' ? j = j + Math.pow(2, i) : j += 0
    }
    return j
  }

  //https://www.codewars.com/kata/simple-fun-number-176-reverse-letter/train/javascript
  reverseLetter = (str) => {
    return str.match(/[a-z]/g).reverse().join("");
  }

  pallindromeStr = (str) => {
    let res = str.split("").reverse().join("");
    return res == str ? true : false
  }




  //https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
  isTriangle = (a,b,c) => {
    return a + b > c && b + c > a && a + c > b ? true : false
  }


   /*
   function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }
  https://www.codewars.com/kata/odd-or-even/train/javascript
   */
  oddOrEven(arr){
    let j=0;
    for(let i in arr){
      j = j + arr[i]
    }
    return j%2==0 ? 'even' : 'odd'
  }


  //https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

  /*
  shortest equation
  function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }
  */
  perfectSquareFuck = (x) => {
    let count = 0
    while(count < x){
      if(count*count == x){
        return (count+1)*(count+1)
      }else{
        if(count*count > x){
          return -1
        }
      }
      count++
    }


  }


  //https://www.codewars.com/kata/break-camelcase/train/javascript
  breakCamelCasel = (x) =>{
    // let pattern = /[A-Z]\S[a-z0-9A-Z]*\S/
    let pattern = /[A-Z]/, stringShit = ''
    for(let i in x ){
      pattern.test(x[i]) ? stringShit = stringShit + " " + x[i] : stringShit = stringShit + x[i]
      i++;
    }
    return stringShit
  }


  // RANDOM MADER FUCKER

 /*

       o
        \_/\o
       ( Oo)                    \|/
       (_=-)  .===O-  ~~Z~A~P~~ -O-
       /   \_/U'                /|\
       ||  |_/
       \\  |
       {K ||
        | PP
        | ||
        (__\\

 */

  fibonacciFuck = (x) =>{
    //return fib by numb4r
    let a = 1, b = 0,c;

    while(x > 0){
      c = a;
      a = a + b;
      b = c
      x--;

      console.log(b)
    }
  }

  getFactors = (e) => {
    let possibleFactor = [],y = 2
    while(e >= y){
     let k = e%y==0 ? (possibleFactor.push(y),e = e/y,y = 2) : y++
    }
    return possibleFactor
  }




  ramadanCountDownAndIftar = (e) => {
    let countDateStart = new Date("June 4, 2019").getTime()


    let x = setInterval(() => {
      let now = new Date().getTime()

      let distance = countDateStart - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        countDown:days + " days :" +  hours + " hours: " +  minutes + " mins: " + seconds + " secs "
      })

      if(distance < 0){
        clearInterval(x)
      }

    }, 1000)

    return true
  }

  ramadanIftarCountdown = () => {


    let countDateStart = new Date("May 22, 2019 18:17:00").getTime()

    let y = setInterval(() => {
      let now = new Date().getTime()

      let distance = countDateStart - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        iftar:hours + " hours: " +  minutes + " mins: " + seconds + " secs "
      })


      if(distance < 0){
        clearInterval(y)
        alert('TIME TO EAT!!!! : DUWAA : اللَّهُمَّ اِنِّى لَكَ صُمْتُ وَبِكَ امنْتُ وَعَليْكَ تَوَكّلتُ وَ عَلى رِزْقِكَ اَفْطَرْتُ Allahumma inni laka sumtu wa bika aamantu wa alayka tawakkaltu wa ala rizq-ika-aftartu')
      }

    }, 1000)

  }


  componentDidMount(){

    console.log(this.comp([121, 144, 19, 161, 19, 144, 19, 11] , [121, 14641, 20736, 361, 25921, 361, 20736, 361] ))
    //- ---------------------
    this.ramadanIftarCountdown()
    this.ramadanCountDownAndIftar()

  }

  render() {
    return (
      <div className="App">

        <div>
           <marquee behavior="alternate">
          <img style={{height:"180px"}} src="https://media2.giphy.com/media/1zi1aRBBaVvcbIrPe0/source.gif" />
             <h1>RAMADAN <span style={{color:"red"}}>16TH</span> DAY!</h1>

            </marquee>
          <div><strong>Ramadan end: </strong>{this.state.countDown}</div>
          <div><strong>Iftar end: </strong>{this.state.iftar}</div>

        </div>
      </div>
    );
  }
}

export default App;
