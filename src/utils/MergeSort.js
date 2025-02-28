import { delay } from "./delayfunction";

export const Ms = async (divs, colors, speed, setdivs, setcolors, setisDisabled) => {
  let arr = [...divs];
  let colorsArr = [...colors];
  let n = arr.length;

  const merge = async (left, mid, right) => {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let leftArr = arr.slice(left, mid + 1);
    let rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
      colorsArr[k] = 'bg-red-500';
      setcolors([...colorsArr]);
      await delay(speed);

      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      setdivs([...arr]);
      colorsArr[k] = 'bg-blue-300';
      setcolors([...colorsArr]);
      await delay(speed);
      k++;
    }

    while (i < n1) {
      colorsArr[k] = 'bg-red-500';
      setcolors([...colorsArr]);
      await delay(speed);

      arr[k] = leftArr[i];
      i++;
      setdivs([...arr]);

      colorsArr[k] = 'bg-blue-300';
      setcolors([...colorsArr]);
      await delay(speed);
      k++;
    }

    while (j < n2) {
      colorsArr[k] = 'bg-red-500';
      setcolors([...colorsArr]);
      await delay(speed);

      arr[k] = rightArr[j];
      j++;
      setdivs([...arr]);

      colorsArr[k] = 'bg-blue-300';
      setcolors([...colorsArr]);
      await delay(speed);
      k++;
    }
  };

  const mergeSort = async (left, right) => {
    if (left >= right) return;

    let mid = Math.floor((left + right) / 2);

    await mergeSort(left, mid);
    await mergeSort(mid + 1, right);
    await merge(left, mid, right);
  };

  await mergeSort(0, n - 1);

  for (let i = 0; i < n; i++) {
    colorsArr[i] = 'bg-green-600';
    setcolors([...colorsArr]);
    await delay(speed);
  }

  setisDisabled(false);
};
