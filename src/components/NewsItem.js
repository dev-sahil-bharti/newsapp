import React from 'react'

const NewsItem = (props) => {
  let { title, discription, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className='my-4'>
      <div className="card" style={{ margin: '10px 20px' }}>
        <span
          className="position-absolute top-0 end-0 badge rounded-pill bg-success"
          style={{ zIndex: 1 }}>
          {source}
        </span>
        <img src={!imageUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/0c97/live/50940040-9224-11f0-8fd6-f3e5d0b160a2.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{discription}...</p>
          <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
