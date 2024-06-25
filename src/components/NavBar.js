import React,{useState} from 'react'
import img1 from './static/Logo.png'
  function NavBar({ onCategoryChange, onSearch }) {
    const [query, setQuery] = useState('');
  
    const handleCategoryChange = (category) => {
      onCategoryChange(category);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(query);
    };
  
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src = {img1} width="120" height="80" className="d-inline-block align-top" alt = "Logo"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#" onClick={() => handleCategoryChange('')}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleCategoryChange('technology')}>Tech</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleCategoryChange('business')}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleCategoryChange('sports')}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleCategoryChange('health')}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => handleCategoryChange('entertainment')}>Entertainment</a>
        </li>
      </ul>
      <form className="d-flex" onSubmit={handleSearch}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)}></input>
              <button className="btn btn-success" type="submit">Search</button>
            </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar