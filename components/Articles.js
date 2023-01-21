import React from 'react'
import { ArticleCard } from './ArticleCard'
import { ArticleCardWithImage } from './ArticleCardWithImage'

function Articles({ articles }) {

    return (
        <div className='grid lg:grid-cols-2 grid-gap gap-16 mt-8'>
            {
                articles.map((article, idx) => (

                    <div key={article.id}>
                        {
                            idx === 1
                                ? <ArticleCardWithImage article={article}  />
                                : <ArticleCard article={article}  />
                        }
                    </div>

                ))
            }
        </div>
    )
}

export default Articles