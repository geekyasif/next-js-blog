import Head from "next/head";
import Articles from "../components/Articles";
import { Tabs } from "../components/Tabs";
import { fetchCategories , fetchArticles} from "../http";
import qs from 'qs';
import Pagination from "../components/Pagination";
import { useRouter } from "next/router";
import { debounce } from "../utils/DateFormatter";
import { useEffect } from "react";

export default function Home({categories, articles}) {
  const router = useRouter();

  const {page, pageCount} = articles.pagination

  const handleSearch  = (query) => {

    router.push(`/?search=${query}`)
  }

  return (
    <div>

      <Head>
        <title>Geeky Blog Home</title>
      </Head>

      <Tabs categories={categories.items} handleOnSearch={debounce(handleSearch,500)}/>
      
      {/* Articles */}
      <Articles articles={articles.items}/>

      <Pagination page={page} pageCount={pageCount}/>


    </div>
  )
}



export const getServerSideProps = async ({query}) => {


  const options = {
    populate : ['author.avatar'],
    sort: ['id:desc'],
    pagination: {
      page: query.page ? query.page : 1,
      pageSize: 3,
    }
  }


  if(query.search){
    options.filters = {
        Title: {
          $containsi: query.search
        }
    }
  }


  const queryString = qs.stringify(options)

  const {data: categories} = await fetchCategories()
  const {data: articles} = await fetchArticles(queryString)

  return {
    props: {
      categories: {
        items : categories.data
      },
      articles: {
        items : articles.data,
        pagination: articles.meta.pagination
      },
  }
}
}