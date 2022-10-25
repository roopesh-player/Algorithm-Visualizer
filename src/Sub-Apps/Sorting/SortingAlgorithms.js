   function AddDelay(milisec) { 
        return new Promise(resolve => { 
            setTimeout(() => { resolve('') }, milisec); 
        }) 
    }
    async function merge(arrayBars,l,m,r){
        console.log("merge");
        let n1=m-l+1;
        let n2=r-m;
        console.log(n2);
        let left=new Array(n1);
        let right= new Array(n2);
        console.log("after array");
        for(let i=0;i<n1;i++){
          // await AddDelay(30);
          arrayBars[l+i].style.backgroundColor='orange';
          left[i]=arrayBars[l+i].style.height;
        }
        // await AddDelay(100);
        for(let i=0;i<n2;i++){
          // await AddDelay(30);
          arrayBars[m+1+i].style.backgroundColor='yellow';
          right[i]=arrayBars[m+i+1].style.height;
        }
        await AddDelay(300);
        
        let i=0,j=0,k=l;
        while(i<n1 && j<n2){
          // await AddDelay(30);
          if(parseInt(left[i])<=parseInt(right[j])){
            if(n1+n2 === arrayBars.length){
              arrayBars[k].style.backgroundColor='lime';
            }
          else{
            arrayBars[k].style.backgroundColor='gray';
          }
          arrayBars[k].style.height=left[i];
          i++;k++;
        }
        else{
          if(n1+n2 === arrayBars.length){
            arrayBars[k].style.backgroundColor='lime';
          }
        else{
          arrayBars[k].style.backgroundColor='gray';
        }
        arrayBars[k].style.height=right[j];
        j++;k++;
        }
      }
      while(i<n1){
        // await AddDelay(30);
        if(n1+n2 === arrayBars.length){
            arrayBars[k].style.backgroundColor='lime';
          }
        else{
          arrayBars[k].style.backgroundColor='gray';
        }
        arrayBars[k].style.height=left[i];
        i++;k++;
      }
      while(j<n2){
        if(n1+n2 === arrayBars.length){
          arrayBars[k].style.backgroundColor='lime';
        }
      else{
        arrayBars[k].style.backgroundColor='gray';
      }
      arrayBars[k].style.height=right[j];
      j++;k++;
      }
      await AddDelay(300);
      }
      async function mergeSortfun(arrayBars,l,r){
        if(l>=r)return;
        let m=Math.floor((l+r)/2);
        await mergeSortfun(arrayBars,l,m);
        await mergeSortfun(arrayBars,m+1,r);
        await merge(arrayBars,l,m,r);
    
      }
      export function mergeSort(){
        
        const arrayBars=document.getElementsByClassName("array-item");
        let n=arrayBars.length;
        mergeSortfun(arrayBars,0,n-1);
      }

    async function partition(arrayBars,l,r){
      let i=l-1;
      arrayBars[r].style.background='red';
      for(let j=l;j<=r-1;j++){   
          if(parseInt(arrayBars[j].style.height) < parseInt(arrayBars[r].style.height)){
              i++;
              // swap(arrayBars[i], arrayBars[j]);
              let t1=arrayBars[i].style.height;
              arrayBars[i].style.height=arrayBars[j].style.height;
              arrayBars[j].style.height=t1;
              // color 
              arrayBars[i].style.background = 'orange';
              if(i!==j) arrayBars[j].style.background = 'purple';
              // pauseChamp
              await AddDelay(30);
          }
          else{
            arrayBars[j].style.background = 'purple';
            await AddDelay(30);
          }
      }
      i++; 
      // pauseChamp
      await AddDelay(30);
      let t=arrayBars[i].style.height;
      arrayBars[i].style.height=arrayBars[r].style.height;
      arrayBars[r].style.height=t;
      // swap(arrayBars[i], arrayBars[r]);
      
      // pivot height one
      // console.log(`i = ${i}`, typeof(i));
      // color
      arrayBars[r].style.background = 'pink';
      arrayBars[i].style.background = 'lime';
    
      // pauseChamp
      await AddDelay(30);
      
      // color
      for(let k = 0; k < arrayBars.length; k++){
          if(arrayBars[k].style.background !== 'lime')
              arrayBars[k].style.background = 'aqua';
      }
    
      return i;
    }
    async function quickSortfun(arrayBars,l,r){
      if(l<r){
        let pivot= await partition(arrayBars,l,r);
        await quickSortfun(arrayBars,l,pivot-1);
        await quickSortfun(arrayBars,pivot+1,r);
      }
      else{
        if(l>=0 && r>=0 && l<arrayBars.length && r<arrayBars.length){
          arrayBars[r].style.background = 'lime';
          arrayBars[l].style.background = 'lime';
        }
      }
    }
    export function quickSort(){
      const arrayBars=document.getElementsByClassName("array-item");
      let n=arrayBars.length;
      quickSortfun(arrayBars,0,n-1);
    }
    export async function bubbleSort(){
        const arrayBars=document.getElementsByClassName("array-item");
        let n=arrayBars.length;
        // console.log(arrayBars);
        for(let i=0;i<n;i++){
          // console.log(i);
          for(let j=0;j<n-i-1;j++){
            // console.log(j);
            arrayBars[j].style.backgroundColor='orange';
            arrayBars[j+1].style.backgroundColor='orange';
            // await AddDelay(1000);
            if(parseInt(arrayBars[j].style.height) > parseInt(arrayBars[j+1].style.height)){
              // console.log("compare");
              await AddDelay(50);
              // console.log(arrayBars[j].style.height);
              // console.log(arrayBars[j+1].style.height);
              // console.log(arrayBars[j].style.height);
              let temp=arrayBars[j].style.height;
              arrayBars[j].style.height=arrayBars[j+1].style.height;
              // console.log(j+1);
              // console.log(n);
              arrayBars[j+1].style.height=temp;
              // console.log("hii");
            }
            arrayBars[j].style.backgroundColor='aqua';
            arrayBars[j+1].style.backgroundColor='aqua';
            }
            arrayBars[n-i-1].style.backgroundColor='lime';
        }
    
      }
    
