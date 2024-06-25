import logo from './logo.svg';
import './App.css';
import Stories from './components/Stories';
import Pagination from './components/Pagination';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchQuery(''); // Reset search query when category changes
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCategory(''); // Reset category when search query is set
  };

  return (
    <div>
      <NavBar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
      <Stories category={category} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
