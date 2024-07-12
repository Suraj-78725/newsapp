import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  
  static defaultProps = {
    country:'in',
    pageSize:10,
    category:'general',
    header:'News General',
    totalResults:0
  };
  static propTypes= 
  {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    header:PropTypes.string,
    totalResults: PropTypes.number
  };
  //  capitalizeFirstLetter =(string)= {
  //   return (string.charAt(0).toUpperCase() + string.slice(1))
  //     }
  constructor(props)
  {
    super(props);
    console.log("hi i am constu=ructor");
    this.state=
    {
        articles:[],
        loading:true,
        page:1
    }
    document.title=this.props.category
  };
  async upadte()
  {
    this.props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true}) ;
    let data = await fetch(url);
    this.props.setProgress(30)
    let parseData= await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles,totalResults: parseData.totalResults,loading:false});
    this.props.setProgress(100)
  }
  async componentDidMount()
  {
    this.upadte();
    this.setState({page:this.state.page});
  }

  // handlenextclick=async()=>
  // {
  //   this.upadte();
  //   this.setState({page:this.state.page+1});
  
  // }
  // handleprevclick=async()=>
  // {
  //   this.upadte();
  //   this.setState({page:this.state.page-1});
  // }
  fetchMoreData = async() => {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData= await data.json();
    console.log(parseData);
    this.setState({articles:this.state.articles.concat(parseData.articles),totalResults: parseData.totalResults,page:this.state.page+1});
  };
  render() {
    let {header}=this.props;
    return (
      <>
        <h2 className="text-center">{header}-top headdlines </h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          { this.state.articles.map((element)=>{
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
        <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handlenextclick}>Next &rarr;</button>
        </div> */}
        
      </>
    )
  }
}

export default News
