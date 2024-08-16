import '../styles/Card.css'
import { useNavigate } from 'react-router';

interface CardProps {
    title:string;
    thumbnail?:string[];
    price: string | number;
}

const Card:React.FC<CardProps> = ({title, thumbnail, price}) => {
  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate(`/list/${title}`)
  }
  return (
   
      <div className="card" onClick={handleNavigate}>
            {thumbnail && thumbnail.length >= 1 ? 
                <img src={thumbnail[0]} alt={title} className="card-image"/>
                :
                <img src='/infinity-space-logo.jpg' alt={title} className='card-image'/>
            }
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-price">${price}</p>
            </div>
        </div>
   
  )
}

export default Card