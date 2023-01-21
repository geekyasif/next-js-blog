import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DateFormatter } from '../utils/DateFormatter'

export const ArticleCard = ({ article }) => {

    return (
        <div>
            <Link href={`/article/${article.attributes.Slug}`}>
                <h1 className='text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary'>{article.attributes.Title}</h1>
            </Link>

            <div className='flex items-center my-4'>

                <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
                    <Image
                        src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.url}`}
                        alt={article.attributes.author.data.attributes.avatar.data.attributes.name}
                        width={50}
                        height={50}
                    />
                </div>

                <span className='text-sm font-bold text-gray-600'>
                    {article.attributes.author.data.attributes.Firstname} {' '}
                    {article.attributes.author.data.attributes.Lastname} on
                    &nbsp;
                </span>
                <span className='text-gray-400'>{DateFormatter(article.attributes.createdAt)}</span>
            </div>
                <p className='mt-4'>{article.attributes.ShortDescription.slice(0, 255)} {article.attributes.ShortDescription.length >= 255 ? '...' : ""}</p>
        </div>
    )
}
