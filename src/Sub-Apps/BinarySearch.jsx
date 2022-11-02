import React from 'react'

const BinarySearch = () => {
    const array=[];
    for(let i=0;i<30;i++){
      array.push(i+1);
    }
    function AddDelay(milisec) { 
        return new Promise(resolve => { 
            setTimeout(() => { resolve('') }, milisec); 
        }) 
    }
    async function algo(){
        const guiArray=document.getElementsByClassName("border border-primary d-flex align-items-center justify-content-center");
        const numberArray=array;
        let l = 0;
        let r = numberArray.length - 1;
        let mid;
        const val=document.getElementById("newkey").value;
        let x=5;
        if(val!==""){
            x=parseInt(val);
        }
        
        // console.log("here");
        while (r>=l) {
             mid = l + Math.floor((r - l) / 2);
            for(let i=l;i<=r;i++){
             guiArray[i].style.backgroundColor='yellow';
            }
            // await AddDelay(100);
            guiArray[mid].style.backgroundColor='purple';
            await AddDelay(500);
            if (numberArray[mid] === x){
                guiArray[mid].style.backgroundColor='lime';
                await AddDelay(500);
                return mid;
            }
      
            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (numberArray[mid]>x){
            // console.log("need lower");
            for(let i=mid;i<=r;i++){
                guiArray[i].style.backgroundColor='red';
            }
            for(let i=l;i<mid;i++){
                guiArray[i].style.backgroundColor='aqua';
            }
            await AddDelay(1000);
                r = mid - 1;
        }
                 
            // Else the element can only be present
            // in right subarray
            else{
                // console.log("need higher");
                for(let i=l;i<=mid;i++){
                    guiArray[i].style.backgroundColor='red';
                    
                }
                for(let i=mid+1;i<=r;i++){
                    guiArray[i].style.backgroundColor='aqua';
                }
                await AddDelay(1000);
                l = mid + 1;
                
            }
            // console.log("while loop");
        }
      
        // We reach here when element is not
        // present in array
        return -1;
    }
  return (
    <div style={{height:"100vh",background:"black"}}>
      <h1 align="center" className='text-info p-4'>Binary Search</h1>
      <div  className='d-flex justify-content-center p-4'>
      <input type="text" id='newkey' placeholder="5" />
      <button type="sumbit" className="btn btn-info" onClick={()=>algo()}>Search</button>
      </div>
      <div className='row justify-content-center'>
      {array.map((value,id)=>{
      return <div  className='border border-primary d-flex align-items-center justify-content-center ' key={id} style={{backgroundColor:'aqua',height:'40px',width:'40px'}}>{value}
      </div>
    })
       } 
    </div>
    
    </div>
  )
}

export default BinarySearch
