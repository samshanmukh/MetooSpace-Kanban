import dynamic from 'next/dynamic'
import { useState } from 'react'

import ArticleItem from './ArticleItem'

const ModalComponent = dynamic(() => import('../Utils/ModalComponent'))

const ArticleList = ({ articles }) => {
  const [newArticles, setNewArticles] = useState([...articles]);

  const handleChange = (data) => {
    console.log(data)
    setNewArticles(newArticles => ([
      ...newArticles,
      data
    ]))
  }

  return (
    <>
      <div className='grid lg:grid-cols-3 lg:gap-3 sm:grid-cols-1 sm:gap-2 my-5'>
        {newArticles.map((newArticles) => (
          <ArticleItem key={newArticles.id} id={newArticles.id} article={newArticles} />
        ))}
      </div>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <ModalComponent childToParent={handleChange} articles={newArticles} name='+ Add Card' />
        </div>
      </div>
    </>
  )
}

export default ArticleList
