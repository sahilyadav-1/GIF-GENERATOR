import React, { useState } from 'react'
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';

const Tag = () => {

    const [tag, setTag] = useState('');
    const {gif, loading, fetchData} = UseGif(tag);


  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border-green-700
    flex flex-col items-center gap-y-10 mt-4'>
        <h1 className='text-2xl underline uppercase font-semibold mt-2'>Random {tag} Gif</h1>
        
        {
          loading ? (<Spinner/>):(<img src={gif} width="450" alt='GIF' />)
        }

        <input
          className='w-9/12 bg-slate-300 text-xl rounded-lg py-2 font-medium mb-[-28px] text-center'
          onChange={ (event) => setTag(event.target.value)}
          value={tag}
        />
        
        <button
        onClick={ () => fetchData(tag) }
        className='w-9/12 bg-slate-300 text-xl rounded-lg py-2 font-medium mb-6'
        >
            Generate
        </button>
        
    </div>
  )
}

export default Tag