import React, { useEffect, useState } from 'react'
import '../App.css';
import { bs } from '../utils/bubbleSort';
import { Is } from '../utils/InsertionSOrt';
import { Ms } from '../utils/MergeSort';

const minValue = 10;
const maxValue = 100;
const STV = () => {
  const [divs, setdivs] = useState([])
  const [speed, setspeed] = useState(100);
  const [colors, setcolors] = useState([])
  const [isDisabled, setisDisabled] = useState(false);
  const [currAlgo, setcurrAlgo] = useState({Algo:""});



  const genArray = () => {
    let arr = [];
    let colorArr = []
    for (let i = 0; i < 30; i++) {
      arr.push(Math.floor(Math.random() * (100 - 10 + 1) + 10))
      colorArr.push('bg-blue-300');
    }
    setdivs(arr);
    setcolors(colorArr);
  }

  const handleChange = (e) => {

    const value = e.target.value;

    const invertedValue = maxValue - value
    setspeed(invertedValue)
  }

  const handleClick = (val) => {
    console.log(val);
    setisDisabled(true)
    if (val === 'bs') {
      setcurrAlgo({ Algo: "BubbleSort", BestCase: "O(n)", Worstcase: "O(n^2)" })
      bs(divs , colors , speed , setdivs , setcolors , setisDisabled)
    }
    else if(val === 'Is'){
      setcurrAlgo({ Algo: "InsertionSort", BestCase: "O(n^2)", Worstcase: "O(n^2)" })
      Is(divs , colors , speed , setdivs , setcolors , setisDisabled)
    }
    else if(val === 'Ms'){
      setcurrAlgo({ Algo: "MergeSort", BestCase: "O(NlogN)", Worstcase: "O(NlogN)" })
      Ms(divs , colors , speed , setdivs , setcolors , setisDisabled)
    }
  }


  useEffect(() => {
    genArray()
  }, [])
  return (
    <div>
      <h1 className='text-center font-bold text-2xl mt-2 check'>
        Sorting Algorithms Visulaizer
      </h1>
      <div className=' flex justify-center flex-wrap gap-4 mt-6'>
        <button disabled={isDisabled} className='text-white px-4 py-2 rounded-xl bg-[#5783db]'
          onClick={() => handleClick('bs')}>Bubble Sort</button>
        <button disabled={isDisabled} className='text-white px-4 py-2 rounded-xl bg-[#5783db]'
          onClick={() => handleClick('Is')}>Insertion Sort</button>
        <button disabled={isDisabled} className='text-white px-4 py-2 rounded-xl bg-[#5783db]'
          onClick={() => handleClick('Ms')}>Merge Sort</button>
      </div>

      <div className='flex  flex-wrap justify-center items-center gap-4 mt-6'>
        <button disabled={isDisabled} className='text-white px-4 py-2 rounded-xl bg-[#a881af]'
          onClick={genArray}>Generate Array </button>
        <label htmlFor="" className='font-bold text-xl'>Speed:</label>
        <input disabled={isDisabled} type="range" min={minValue} max={maxValue} value={maxValue - speed}
          step={10} className='cursor-pointer appearance-none h-2 bg-red-50' onChange={handleChange} />
      </div>

      <div className='h-[400px]   mt-8 flex justify-center'>
        {divs.map((curr, indx) => (
          <div key={indx} style={{ height: `${curr}%` }} className={`w-4 border-2 border-black ${colors[indx]}`}>

          </div>
        ))}
      </div>

      {currAlgo.Algo!==""&& <div className='mt-5 '>
        <h1 className='text-center font-bold text-2xl'>{currAlgo.Algo} Time Complexity</h1>

        {<div className='flex justify-center gap-10 mt-4'>
          <div>
            <h1 className='font-bold text-lg'>WorstCase:{currAlgo.BestCase}</h1>
          </div>

          <div>
            <h1 className='font-bold text-lg'

            >BestCase: {currAlgo.Worstcase}</h1>
          </div>
        </div>}
      </div>}
    </div>

  )
}

export default STV