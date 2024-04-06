import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';

const Random = () => {

    const {gif, loading, fetchData} = UseGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border-green-700
    flex flex-col items-center gap-y-10 mt-4'>
        <h1 className='text-2xl underline uppercase font-semibold mt-2'>A Random Gif</h1>
        
        {
          loading ? (<Spinner/>):(<img src={gif} width="450" alt='GIF' />)
        }
        
        <button
        onClick={ () => fetchData() }
        className='w-9/12 bg-slate-300 text-xl rounded-lg py-2 font-medium mb-6'
        >
            Generate
        </button>
        
    </div>
  )
}

export default Random