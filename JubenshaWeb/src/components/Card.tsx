import '../styles/Card.css'
import { Link } from 'react-router-dom';

interface CardProps {
    title:string;
    image?:string;
    price: string | number;
}

const Card:React.FC<CardProps> = ({title, image, price}) => {


  return (
    <Link to={`/list/${title}`} className="card-link">
      <div className="card">
            {image ? 
                <img src={image} alt={title} className="card-image"/>
                :
                <img src='/infinity-space-logo.jpg' alt={title} className='card-image'/>
            }
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-price">{price}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card