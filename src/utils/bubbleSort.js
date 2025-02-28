import { delay } from "./delayfunction";

export const bs = async(divs, colors, speed, setdivs, setcolors , setisDisabled)=> {

  let arr = [...divs];
  let colorsArr = [...colors];
  let n = arr.length;

  
  for(let i = 0 ; i<n-1 ; i++){
    for(let j = 0 ; j<n-i-1 ; j++){
      colorsArr[j] = 'bg-red-500';
      colorsArr[j+1] = 'bg-red-500';
      setcolors([...colorsArr])
      await delay(speed);

      if(arr[j] > arr[j+1]){
        [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]];
        setdivs([...arr]);
      }

      colorsArr[j] = 'bg-blue-300';
      colorsArr[j+1] = 'bg-blue-300';
      setcolors([...colorsArr]);

      await delay(speed)
    }

    colorsArr[n-i-1] = 'bg-green-600';
    setcolors(colorsArr);
    
  }

  colorsArr[0] = 'bg-green-600';
  setcolors(colorsArr);
  setisDisabled(false)
}