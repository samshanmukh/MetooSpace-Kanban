const Nav = () => {
  return (
    <nav className="m-5 rounded flex sm:justify-center">
      {[
        [1, 'Home', '/'],
        [2, 'About', '/about'],
      ].map(([index, title, url]) => (
        <a key={index} href={url} className="border rounded-lg mr-5 px-5 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
      ))}
    </nav>
  )
}

export default Nav
