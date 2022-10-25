import React,{useState,useEffect }  from 'react'

const Sieve = () => {

 const [array, setarray] = useState([])

  useEffect(() => {
    // funt();
    FillArray();
  },[]);
  function FillArray(){
    let newarray=[]
    for(let i=0;i<100;i++){
      newarray.push(i+1);
    }
    setarray(newarray);
  }
  function AddDelay(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
  async function sievealgo(){
    
    const numberArray=document.getElementsByClassName("border border-primary m-3 rounded d-flex align-items-center justify-content-center");
    let n=numberArray.length;
    let prime = Array.from({length: n+1}, (_, i) => true);
    //handling case for 1
    // console.log("reached");
    // console.log(numberArray[1]);
    numberArray[0].style.backgroundColor='orange';
    await AddDelay(30);
    numberArray[0].style.backgroundColor='red';
    let lastprime=2;
    for (let p = 2; p * p <= n; p++){
        if (prime[p] === true){
          numberArray[p-1].style.backgroundColor='orange';
          lastprime=p;
            // Update all multiples of p
          for (let i = p * p; i <= n; i += p){
                prime[i] = false;
                numberArray[i-1].style.backgroundColor='yellow';
                await AddDelay(50);
                numberArray[i-1].style.backgroundColor='red';
          }
          await AddDelay(30);
          numberArray[p-1].style.backgroundColor='lime';
          await AddDelay(100);

        }
    }
    for(let i=lastprime;i<n;i++){
      if(prime[i]===true){
        numberArray[i-1].style.backgroundColor='lime';
        await AddDelay(50);
      }
    }
  }


  return (
    <div style={{height:"auto",background:"black"}}>
      <nav className='d-flex justify-content-center'>
      <button className='btn btn-outline-success rounded-0' onClick={() => sievealgo()}>Start</button>
    </nav>
    <div className='container' >
    <div className="row p-5">
    {array.map((value,id)=>{
      return <div className='border border-primary m-3 rounded d-flex align-items-center justify-content-center ' id='numbers' key={id} style={{backgroundColor:'aqua' ,height:'3rem',width:'3rem'}}>
        {value}
      </div>
       })
       }
      </div>
       </div>

       </div>
  )
}

export default Sieve