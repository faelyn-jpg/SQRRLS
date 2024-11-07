import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>SQRRL!</h1>
        </div>
        {/* This 'main' div is only for styling (so we can use flexbox) */}
        <div className="main">
          <Outlet />
        </div>
      </div>
      <footer>Zak, Abdi, Kodi, Lance</footer>
    </>
  )
}

export default Layout
