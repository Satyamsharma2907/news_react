import React, { useEffect,useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Loader from './Loader';

const FetchData = () => {
    const [data,setData]=useState([]);
    const[loading,setLoading]= useState(true);
    console.log("process env",process.env.REACT_APP_API_KEY);
    
    const api_key= process.env.REACT_APP_API_KEY;
    const fetchData = async()=>{
        await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`
    
        ).then((res)=>{
            console.log(res.data.articles)
            setData(res.data.articles)
            setLoading(false);
        });
    
    }

    useEffect(()=>{
        fetchData();
        console.log("data",data);
      },[])
  return (

    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className='container my-4'>
        <div className="d-flex justify-content-center">
        <h3>
            <Link to="/" className="text-black">Top HeadLines</Link>
       
        </h3>
        </div>
       
        <div className='container my-2 d-flex justify-content-center align-items-center flex-column'>{data?data.map((item,index)=><>
        <div className='container my-3 py-3' style={{width:"500px",boxShadow:"2px 2px 10px silver",borderRadius:"10px"}}>
        <h5 className="my-1">{item.title}</h5>
        <div className='d-flex justify-content-center align-items-center flex-column'>
        <img
         src ={!item.urlToImage ? "https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png" : item.urlToImage}
    
        alt="/Image-not-found"
        className='img-fluid'
        style={{
            width:"auto",
            height:"300px",
            objectFit:"cover"
        }}
        
        />
        </div>
       
        <p className="my-1">{item.content}</p>
        <a href={item.url} target="blank" className="btn btn-primary bg-dark text-white"> view more</a>
        </div>
       
        
        
        </>):"Loading..."}</div>
        </div>
      )}
    </div>
   
  
  )
}

export default FetchData