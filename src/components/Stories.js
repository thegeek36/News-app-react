import React, { useEffect, useState } from 'react';
import "./News.css"; // Assuming your CSS file is named "News.css"

function Stories({ category, searchQuery }) {
  const [mynews, setMyNews] = useState([]);
  const [apiUrl, setApiUrl] = useState('');
  const key = '1b72f4ef67b54ce1b25b4b51f08fdbd1'
  useEffect(() => {
    // Construct the API URL based on category and searchQuery 
    if (searchQuery && category) {
        setApiUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${category}?q=${searchQuery}&apiKey=${key}`);
    } 
    else if(searchQuery)
    {
        setApiUrl(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${key}`);
    }
    else if (category) {
      setApiUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${key}`);
    } else {
        setApiUrl(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`);
        //setMyNews([]);
    }
  }, [category, searchQuery]);

  useEffect(() => {
    if (apiUrl) {
      fetchApiData();
    }
  }, [apiUrl]);

  const fetchApiData = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setMyNews(data.articles);
    } catch(error) {
      console.log(error)
    }
  }

  return (

    <>
    {/* <p>{apiUrl}</p>
    <p>{mynews.length}</p> */}
    {category && (
        <h1 className="category-heading">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      )}
      {!category && !searchQuery && (
        <h1 className="category-heading">Top Headlines</h1>
      )}
      {mynews.length === 0 && (
        <p>No news articles found</p>
      )} 
    <div className='mainDiv'>
     
      {mynews.map((ele, index) => (
        <div key={index} className="card">
          <div className="image-container">
            <img 
              src={ele.urlToImage === null ? 'https://regmedia.co.uk/2016/05/09/shutterstock_adverstising_editorial_use_only_pic_by_allen_g.jpg': ele.urlToImage} 
              className="card-img-top" 
              alt=""
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{ele.author}</h5>
            <p className="card-text">{ele.title}</p>
            <a href={ele.url} className="btn btn-primary">Read More..</a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Stories;