import React from 'react';

const NewsItem = (props) =>{


  

    let { title, description, imageUrl, newsUrl } = props;

    return (
      <div className="card my-3">

      <img
  src={
    imageUrl ||
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c"
  }
  className="card-img-top"
  alt="news"
  onError={(e) => {
    e.target.src =
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c";
  }}
/>

        <div className="card-body">

          <h5 className="card-title">
            {title}
          </h5>

          <p className="card-text">
            {description}
          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>

        </div>
      </div>
    );
  }


export default NewsItem;
