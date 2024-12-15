import React from 'react'; 


const MoviesNav = (props) => {

  return(
    <div>
      <nav className="fixed top-0 z-10 w-full p-4 text-white bg-gray-800">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-2xl font-bold">{props.nav}</h1>
          <ul className="flex space-x-4">
            <li className="hover:text-yellow-500">
              <a href="#">TV Shows</a>
            </li>
            <li className="hover:text-yellow-500">
              <a href="#">Movies</a>
            </li>
            <li className="hover:text-yellow-500">
              <a href="#">Popular</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}


export default MoviesNav;