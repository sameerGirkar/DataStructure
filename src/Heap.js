// Create abd return the heap arr
function Heap(arr){
  arr.unshift(null);
  let n = arr.length-1;
  for(let i = Math.floor(n/2); i > 0; i--){
    Heapify(stones, i);
  }
  return arr;
};

//Top to bottom approch Heapify the given index and make the heap again.
function Heapify(arr, i){
  let l = i*2;
  let r = i*2 +1;
  let maxIndex = i;
  
  if(l < arr.length && arr[l] > arr[maxIndex]) maxIndex = l;
  if(r < arr.length && arr[r] > arr[maxIndex]) maxIndex = r;
  
  if(maxIndex !== i) {
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    Heapify(arr, maxIndex);
  }
  
  return arr;
}

// add given element in given heap
function PushInHeap(arr, item){;
  arr.push(item);
  let n = arr.length -1;
  let i = n;
  while(i > 1 && arr[i] > Math.floor(i/2)){
    let p = Math.floor(i/2);
    [arr[i], arr[p]] = [arr[p], arr[i]];
    i = p;
  }
  return arr;
}

// pop element from the heap (maintain heap of the remining element.)
function PopFromHeap(arr){
  let result = arr[1];
  arr[1] = arr.pop();
  Heapify(arr, 1);
  return result;
}

