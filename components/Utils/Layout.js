import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:items-center'>
        <main>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
