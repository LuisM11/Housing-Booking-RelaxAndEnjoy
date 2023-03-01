import { Skeleton } from 'antd'
import React from 'react'

export default function ProductCardSkeleton() {
    return (
        <article className="w-full h-128 tablet:h-64 bg-fourthColor rounded-lg shadow-md grid grid-rows-2 tablet:grid-cols-2 tablet:grid-rows-1  tablet:gap-2">

            <Skeleton.Image
                className='mx-auto my-auto'
                active
                size={200}
            />
            <Skeleton
                className="h-full m-2 tablet:pt-4"
                active
                
                paragraph={{
                    rows: 6,
                }} />
            {/* <div className="Cutom-skeleton text-mainColor" >

                    <i className="uil uil-image-slash "></i>
                    </div> */}

        </article>
    )
}
