import React, { Component ,useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=> {
  const[articles,setArticles]=useState([]);
  const[loading,setloading]=useState(true);
  const[page,setPage]=useState(1)
  const[totalResults,settotalresult]=useState(0)
  
  const upadte=async()=>
  {
    props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true) ;
    let data = await fetch(url);
    props.setProgress(30)
    let parseData= await data.json();
    console.log(parseData);
    setArticles(parseData.articles);
    settotalresult(parseData.totalResults);
    setloading(false);
    props.setProgress(100)
  }

  useEffect(()=>{
    document.title=props.category
    upadte();
    setPage(page+1)
  },[]);


  const fetchMoreData = async() => {
    setPage(page+1)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData= await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    settotalresult(parseData.totalResults);
    setPage(page+1);
    // this.setState({articles:this.state.articles.concat(parseData.articles),totalResults: parseData.totalResults,page:this.state.page+1});
  };

    let {header}=props;
    return (
      <>
        <h2 className="text-center" style={{marginTop:'5rem'}}>{header}-top headdlines </h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          { articles.map((element)=>{
            console.log(element)
            return <div className="col md-4" key={element.ImageUrl}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} ImageUrl={element.urlToImage} NewsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })
          }
        </div>
        </div>
        </InfiniteScroll>
        {/* this code for next anf prev buttton 
        <div className="conatiner d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handleprevclick}>&larr; previous</button>
        <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-primary" onClick={this.handlenextclick}>Next &rarr;</button>
        </div> */}
      </>
    )
  }




News.defaultProps = {
  country:'in',
  pageSize:10,
  category:'general',
  header:'News General',
  totalResults:0
};
News.propTypes= 
{
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  header:PropTypes.string,
  totalResults: PropTypes.number
};

export default News
