import { delay } from "./delayfunction";

export const Is = async (divs, colors, speed, setdivs, setcolors, setisDisabled) => {

  let arr = [...divs];
  let colorsArr = [...colors];
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    colorsArr[j] = 'bg-red-600';
    colorsArr[j - 1] = 'bg-red-600';
    setcolors([...colorsArr])
    await delay(speed);

    let hasSwapped = false;
    while (j > 0 && (arr[j] < arr[j - 1])) {

      hasSwapped = true;
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      setdivs([...arr]);

      colorsArr[j] = 'bg-blue-300';
      colorsArr[j - 1] = 'bg-blue-300';
      setcolors([...colorsArr]);
      await delay(speed);
      j--;
    }

    if(hasSwapped){
      colorsArr[j]  = 'bg-green-600';
    }
    else{
      colorsArr[i] = 'bg-green-600';
    }
    setcolors([...colorsArr])
  }

  for (let k = 0; k < arr.length; k++) {
    colorsArr[k] = 'bg-green-600';
  }
  setcolors([...colorsArr]);
  setisDisabled(false)
}