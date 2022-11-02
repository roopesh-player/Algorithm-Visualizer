import React,{useState,useEffect } from 'react'
import { bubbleSort, mergeSort, quickSort } from './SortingAlgorithms';
import "./SortingApp.css"


const SortingApp = () => {
  const [array, setarray] = useState([]);
  // const [arraySize, setarraySize] = useState(80)
  useEffect(() => {
    // funt();
    resetArray();
  },[]);
  function resetcolor(){
    const arrayBars=document.getElementsByClassName("array-item");
    let n=arrayBars.length;
    for(let i=0;i<n;i++)arrayBars[i].style.backgroundColor='aqua';
    return;
  }
 function resetArray(){
    const newArray=[];
    let min=5;
    let max=500;
    for(let i=0;i<100;i++){
      newArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    setarray(newArray);
    // resetcolor();
  }
  // function funt(){
  //   let val="hii";
  //   if(document.getElementById("speedbar")!=null){
  //   val=document.getElementById("speedbar").value;
  //   }
  //   else val="missing";
  //   // let val="hii";
  //   alert(val);
  // }
  return (
    <div style={{height:"100vh",background:"black"}}>
     <h1 align="center" className='text-info'>Sorting Algorithms</h1>
    <div className='d-flex justify-content-center'>
    <div  >
      {array.map((value,id)=>{
      return <div className='array-item' key={id} style={{ height: `${value}px` ,backgroundColor:'aqua',}}>
      </div>
    })
       }
       {resetcolor()}
    </div>
    </div>
      {/* <div className='array-container'> */}
      < div className="d-flex justify-content-center">
      <button className='btn btn-outline-info rounded-0' onClick={() => resetArray()}>Generate New Array</button>
      <button className='btn btn-outline-info rounded-0' onClick={() => bubbleSort()}>bubble Sort</button>
      <button className='btn btn-outline-info rounded-0' onClick={() => mergeSort()}>Merge Sort</button>
      <button className='btn btn-outline-info rounded-0' onClick={() => quickSort()}>Quick Sort</button>
      
  </div>
  {/* < div className="d-flex justify-content-center">
  <div><span className='text-info'>Speed </span><input type="range" min="30" max="300" id="speedbar"/></div>
      <div><span className='text-info'>Size </span><input type="range" min="10" max="150" step="1" 
    id='sizeSlider' /></div>
  </div> */}

    </div>
  )
}

export default SortingApp
