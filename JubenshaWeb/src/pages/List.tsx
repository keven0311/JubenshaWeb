import '../styles/List.css'
import { useEffect, useState } from 'react'
import Card from "../components/Card"
import Sorting from '../components/Sorting'
import Sorting_Price from '../components/Sorting_Price'
import jubenSort from '../ultis/jubenSort'


function List() {
    // const [sortedList, setSortedList] = useState([]);
    const [criteria, setCriteria] = useState({})

    // const jubenData = [
    //     { title: 'Juben1', image: '/image1.jpg', price: 45, type: 'type1', theme: 'Fantasy', members: 5, background: 'Space', difficulty: 'Medium', mod: 'Official' },
    //     { title: 'Juben2', image: '/image2.jpg', price: 60, type: 'type2', theme: 'Sci-Fi', members: 4, background: 'Desert', difficulty: 'Hard', mod: 'Fan-made' },
    //     { title: 'Juben3', image: '/image3.jpg', price: 75, type: 'type1', theme: 'Fantasy', members: 6, background: 'Jungle', difficulty: 'Easy', mod: 'Official' },
    //     { title: 'Juben4', image: '/image4.jpg', price: 85, type: 'type1', theme: 'Fantasy', members: 5, background: 'Ocean', difficulty: 'Medium', mod: 'Official' },
    // ]

    // const criteria = {price:[45,80], type:['type2']};

    // const filteredData = jubenSort(jubenData,criteria);

    // console.log(filteredData)
    
    // useEffect(() => {
    //     console.log(criteria)
    // },[criteria])

  return (
    <div className="list-div">
        <div className="list-left">
            <h2 className='sorting-tag'>类型/人数</h2>
            
            <Sorting    typeNameCN='人数' 
                        typeName='members'
                        types={[
                                            {name:'5人及以下',value:'5'},
                                            {name:'6人',value:'6'},
                                            {name:'7人',value:'7'},
                                            {name:'8人',value:'8'}]}
                        setCriteria={setCriteria}
            />
            <Sorting_Price
                        min={40.00}
                        max={70.00}
                        setCriteria={setCriteria}
                        />
            <Sorting    typeNameCN='类型' 
                        typeName='type'
                        types={[{name:'还原',value:'还原'},
                                            {name:'开放',value:'开放'},
                                            {name:'本格',value:'本格'},
                                            {name:'半封闭',value:'半封闭'},
                                            {name:'变格',value:'变格'}]}
                        setCriteria={setCriteria}
            />
            <Sorting    typeNameCN='题材'
                        typeName='theme'
                        types={[{name:'机制',value:'机制'},
                            {name:'阵营',value:'阵营'},
                            {name:'情感',value:'情感'},
                            {name:'推理',value:'推理'},
                            {name:'惊悚',value:'惊悚'},
                            {name:'欢乐',value:'欢乐'},
                        ]}
                        setCriteria={setCriteria}
                        />
            <Sorting    typeNameCN='背景'
                        typeName='background'
                        types={[{name:'现代',value:'现代'},
                            {name:'日式',value:'日式'},
                            {name:'古风',value:'古风'},
                            {name:'港风',value:'港风'},
                            {name:'架空',value:'架空'},
                        ]}
                        setCriteria={setCriteria}
                        />
            <Sorting typeNameCN='难度'
                        typeName='difficulty'
                        types={[{name:'进阶',value:'进阶'},
                            {name:'新手',value:'新手'},
                            {name:'硬核',value:'硬核'}
                        ]}
                        setCriteria={setCriteria}
                        />
            <Sorting typeNameCN='形式'
                        typeName='mod'
                        types={[{name:'盒装',value:'盒装'},
                            {name:'城限/独家',value:'城限/独家'}
                        ]}
                        setCriteria={setCriteria}
                        />

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