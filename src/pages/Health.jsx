
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Loader from '../components/Loader';
import './Categories.css'

const Health = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const articlesPerPage = 6;

    useEffect(() => {
        const fetchArticles = async () => {
            
            await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8a46ade9d1994d958f4624f9c6dc9100`
    
            ).then((res)=>{
                console.log("category health")
                console.log("article",res.data.articles)
                setArticles(res.data.articles);
                setLoading(false);
                
            }).catch((error)=>{
                console.error('Error fetching the news articles:', error);
            });
        
                
            
        };

        fetchArticles();
    }, []);

     // Calculate the articles to display on the current page
     const indexOfLastArticle = currentPage * articlesPerPage;
     const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
     const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
 
     // Logic for next and previous buttons
     const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
    {loading ? (
      <Loader />
    ) : (
      <div>
         <Container className='my-4'>
            <Row>
                {currentArticles.map((article, index) => (
                    <Col key={index} md={4} className="mb-4 d-flex align-items-stretch">
                        <Card className="h-100" style={{boxShadow:"2px 2px 10px silver",borderRadius:"10px"}}>
                            <Card.Img variant="top" src={article.urlToImage || "https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"} alt={article.title} />
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.description}</Card.Text>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary bg-dark text-white">
                                    Read More
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="d-flex justify-content-between">
                <Button
                    variant="primary"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <Button
                    variant="primary"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={indexOfLastArticle >= articles.length}
                >
                    Next
                </Button>
            </div>
        </Container>

      </div>
    )}
  </div>
 
  )
}

export default Health;