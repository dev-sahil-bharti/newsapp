import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    // capitalize function
    const capitalizeFirstLetter = (str) => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // function to fetch news
    const updateNews = async () => {
        props.setProgress(10);
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true);
            props.setProgress(40);

            let data = await fetch(url);
            let parsedData = await data.json();

            props.setProgress(70);
            setArticles(parsedData.articles || []);
            setTotalResults(parsedData.totalResults || 0);
            setLoading(false);
            props.setProgress(100);
        } catch (error) {
            console.error("Error fetching news:", error);
            setArticles([]);
            setLoading(false);
            props.setProgress(100);
        }
    };

    // run only once when component mounts
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsHonesty `
        updateNews();
        // eslint-disable-next-line
    }, []);

    // load more data for infinite scroll
    const fetchMoreData = async () => {
        const nextPage = page + 1;
        setPage(nextPage);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles((prevArticles) => prevArticles.concat(parsedData.articles || []));
        setTotalResults(parsedData.totalResults || totalResults);
    };

    return (
        <div className="container my-3">
            <h2 className="text-center text-dark" style={{ margin: '35px 0px', marginTop: '83px' }}>
                NewsHonesty - Top {capitalizeFirstLetter(props.category)} Headlines
            </h2>

            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="row my-3">
                    {articles.length > 0 ? (
                        articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 45) : ""}
                                    imageUrl={element.urlToImage}
                                    source={element.source.name}
                                    discription={element.description ? element.description.slice(0, 88) : ""}
                                    newsUrl={element.url}
                                    author={element.author || "Unknown"}
                                    date={element.publishedAt}
                                />
                            </div>
                        ))
                    ) : (
                        !loading && <p className="text-center">No articles available at the moment.</p>
                    )}
                </div>
            </InfiniteScroll>
        </div>
    );
};

// default props
News.defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
    setProgress: PropTypes.func.isRequired,
};

export default News;
