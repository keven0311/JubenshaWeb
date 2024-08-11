import '../styles/SingleJuben.css'
import Carousel from '../components/Carousel'

function SingleJuben() {

    const testImages = [
        "/infinity-space-logo.jpg",
        "/infinity-space-logo.jpg",
        "/infinity-space-logo.jpg"
    ]

  return (
    <div className="singlejuben-wrapper">
        <div className='singlejuben-div'>
            <div className="carousel-div">
                <Carousel>
                    {testImages.map((img,index )=> (
                        <div key={index}>
                            <img src={img} alt={`Carousel item ${index}`} />
                        </div>
                    ))}
                </Carousel>
            </div>

            <div className='content-div'>
                <h2>老骗子俱乐部</h2>
                <h3>$50.00</h3>
                <h3>现代/欢乐/机制/本格/还原/开放/进阶/盒装</h3>
                <p>
                    3男3女
                    <br/>
                    【？？？】女。
                    “优秀的猎人往往都会以猎物的方式出现”
                    <br/>
                    【？？？】女。
                    “放长线才能钓大鱼~”
                    <br/>
                    【？？？】女。
                    “越漂亮的女人越会骗人，但是......”
                    <br/>
                    【？？？】男。
                    “什么都没有，就是有钱”
                    <br/>
                    【？？？】男。
                    “我们不生产钱，我们只是钱的搬运工”
                    <br/>
                    【？？？】男。
                    “真相往往隐藏在层层的‘马赛克’之下”
                </p>
            </div>

            <div className='description-div'>
            故事简介：
            <br/>  
            在很久很久以前，有一个神秘的组织出现在人间，他们以一切18禁为荣，历朝历代的统治者身后都有他们的影子。
            <br/>
            现如今他们重现江湖，寻找新的“老骗子俱乐部”继承人。
            <br/>
            作为神秘菁英的你们，此时不出手，更待何时？？？
            </div>
        </div>
    </div>
  )
}

export default SingleJuben