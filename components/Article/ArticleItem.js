import Link from 'next/link'
import moment from 'moment'
import { ClockIcon } from '@heroicons/react/outline'

const ArticleItem = ({ article }) => {
  
  return (
    <>
      <Link href={`/article/${article.id}`}>
        <div className="cursor-pointer my-5 py-3 rounded overflow-hidden h-auto lg:h-32 border shadow">
          <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4">
            <div className="font-bold mb-4">{article.title}</div>
            <p className="text-slate-400 h-6 grid">
              <ClockIcon height={20} />
              <span>{moment(article.date, "MM-DD-YYYY").format('MMMM D')}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ArticleItem
