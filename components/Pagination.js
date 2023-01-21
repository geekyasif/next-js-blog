import { useRouter } from 'next/router';
import React from 'react'
import qs from 'qs'

const Pagination = ({page, pageCount, redirectUrl = '/'}) => {


    const router = useRouter();


    const isNextDisabled = () => {
        return page >= pageCount;
    }

    const isPrevDisabled = () => {
        return page <= 1;
    }

    const handlePaginate = async (direction) => {

        if (direction === 1 && isNextDisabled()) {
            return;
        }

        if (direction === -1 && isPrevDisabled() ) {
            return;
        }
        
        const queryString = qs.stringify({
            ...router.query,
            page: page + direction,
        })
    
        router.push(`${redirectUrl}?${queryString}`)

    }




    return (
        <div className='flex justify-center mt-24'>  
            <button  onClick={() => handlePaginate(-1)}  className={` ${'bg-primary py-2 px-4 text-white w-24 rounded'} ${isPrevDisabled() ? 'disabled' : ''}`}>Previous</button>
            <button  onClick={() => handlePaginate(1)} className={` ${'bg-primary py-2 px-4 text-white w-24 rounded ml-4'} ${isNextDisabled() ? 'disabled' : ''}`}>Next</button>
        </div>
    )
}

export default Pagination