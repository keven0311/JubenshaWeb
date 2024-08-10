import '../styles/List.css'
import Card from "../components/Card"

function List() {
  return (
    <div className="list-div">
        <div className="list-left">
            <p>类型/人数</p>
            
        </div>
        <div className="list-right">
            <Card 
                title="juben1"
                image="/infinity-space-logo.jpg"
                price="$45.00"
            />
        </div>
    </div>
  )
}

export default List