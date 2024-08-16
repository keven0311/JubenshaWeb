import '../styles/SingleJuben.css'
import Carousel from '../components/Carousel'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Juben } from '../ultis/jubenSort';

function SingleJuben() {
    const { title } = useParams();
    const [currentJuben, setCurrentJuben] = useState<Juben | null>(null);

    
    useEffect(() => {
        const storedSortedList = localStorage.getItem('sortedList');
        
        if(storedSortedList){
            const sortedList: Juben[] = JSON.parse(storedSortedList);
            const foundJuben = sortedList.find(juben => juben.title === title);
            setCurrentJuben(foundJuben || null);
        }
    },[title])

    const splitStringByNextLine = (string:string) => {
        return string.split('\n');
    }

    const testImages = [
        "/infinity-space-logo.jpg",
        "/infinity-space-logo.jpg",
        "/infinity-space-logo.jpg"
    ]

  return (
    <div className="singlejuben-wrapper">
        <div className='singlejuben-div'>
            <div className='singlejuben-navigation'>
                <div className='singlejuben-navigation-left'>
                    <Link to={'/'} className='singlejuben-link singlejuben-link-home'>Home</Link>
                    <span className='singlejuben-navigation-slash'>/</span>
                    <Link to={'/list'} className='singlejuben-link'>剧本列表</Link>
                    <span className='singlejuben-navigation-slash'>/</span>
                    <span className='singlejuben-navigation-title'>{title}</span>
                </div>
                {/* !need pointer to prev and next juben*/}
                <div className='singlejuben-navigation-right'>
                    <Link to={``} className='singlejuben-link'>{"< Prev"}</Link>
                    <span className='singlejuben-navigation-slash'>/</span>
                    <Link to={''} className='singlejuben-link'>{"Next >"}</Link>
                </div>
            </div>
            <div className="carousel-div">
                <Carousel>
                    {currentJuben && currentJuben.thumbnail && currentJuben.thumbnail.length > 0 ? (

                        currentJuben.thumbnail?.map((img,index )=> (
                            <div key={index}>
                                <img src={img} alt={`Carousel item ${index}`} />
                            </div>
                        ))
                    ) : (
                        testImages.map((img,index) => (
                            <div key={index}>
                                <img src={img} alt={`Carousel item ${index}`}/>
                            </div>
                        ))
                    )}
                </Carousel>
            </div>

            <div className='content-div'>
                <h2 className="content-title">{currentJuben?.title}</h2>
                <div className='content-category'>
                    <span>{currentJuben?.background}/</span>
                    <span>/{currentJuben?.category}</span>
                    {currentJuben && currentJuben.theme.map((theme, index) => (
                        <span key={index}>/{theme}</span>
                    ))}
                </div>
                <div className='content-description'>
                    {  
                        currentJuben ? (
                            splitStringByNextLine(currentJuben?.description).map((line,index) => (
                                <p key={index} className='content-description-text'>{line}</p>
                            ))
                        ):(
                            <p>description not found</p>
                        )
                    }
                </div>
            </div>

            <div className='summary-div'>
            {  
                currentJuben ? (
                    splitStringByNextLine(currentJuben?.summary).map((line,index) => (
                        <p key={index} className='content-summary-text'>{line}</p>
                    ))
                    ):(
                        <p>summary not found</p>
                    )
            }
            </div>
        </div>
    </div>
  )
}

export default SingleJuben