import React from 'react'


const NewsItem=(props)=> {
    let {title,description,ImageUrl,NewsUrl,author,date,source}=props;
    // console.log({NewsUrl})
    return (
      <div>
      <div className="card mt-4" style={{width: "18rem"}}>
      <img src={!ImageUrl?"https://imgeng.jagran.com/images/2024/07/06/article/image/iphone-15-pro-price-in-inda-1720272339707.jpg":ImageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{title}...<span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:1}}> 
           {source}
          </span>
        </h5>
      <p className="card-text">{description}...</p>
      <h5><p className="card-text"><small className="text-body-secondary">By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p></h5>
    <a href={NewsUrl} target="_blank"className="btn btn-primary">Read More...</a>
  </div>
</div>
      </div>
    )
  }
export default NewsItem
