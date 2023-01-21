import React from 'react'
import { Tabs } from '../../components/Tabs'
import { fetchArticles, fetchCategories } from '../../http'
import qs from 'qs';
import Head from 'next/head';
import { debounce } from '../../utils/DateFormatter';
import { useRouter } from 'next/router';

const category = ({ categories, articles, slug }) => {

  const router = useRouter()

  const formattedCategory = () => slug


  const handleSearch  = (query) => {

    router.push(`/category/${slug}?search=${query}`)
    

  }

  return (
    <div>
      <Head>
        <title>Geeky Blog {formattedCategory()}</title>
      </Head>
      <Tabs categories={categories.items} handleOnSearch={debounce(handleSearch,500)}/>
      <Articles articles={articles.items} />
    </div>
  )
}

export default category



export const getServerSideProps = async ({ query }) => {


  const options = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    filters: {
      category: {
        slug: query.category,
      }
    }
  }


  const queryString = qs.stringify(options)

  const { data: categories } = await fetchCategories()
  const { data: articles } = await fetchArticles(queryString)

  return {
    props: {
      categories: {
        items: categories.data
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination
      },
      slug: {
        slug: query.category
      }
    }
  }
}