import '../styles/List.css'
import { useEffect, useState } from 'react'
import Card from "../components/Card"
import Sorting from '../components/Sorting'
import Sorting_Price from '../components/Sorting_Price'
import jubenSort from '../ultis/jubenSort'
import testData from '../ultis/testData'
import { Juben } from '../ultis/jubenSort'


function List() {
    const [sortedList, setSortedList] = useState<Juben[]>([]);
    const [criteria, setCriteria] = useState({})
    
    useEffect(() => {
        // console.log(criteria)
        const updatedJuben = jubenSort(testData,criteria)
        setSortedList(updatedJuben);
        localStorage.setItem('sortedList',JSON.stringify(updatedJuben))
        
    },[criteria])

  return (
    <div className="list-div">
        <div className="list-left">
            <h2 className='sorting-tag'>类型/人数</h2>
            
            <Sorting    typeNameCN='人数' 
                        typeName='num_players'
                        types={[
                                {name:'All',value:'0'},
                                {name:'5人及以下',value:'5'},
                                {name:'6人',value:'6'},
                                {name:'7人',value:'7'},
                                {name:'8人',value:'8'}
                            ]}
                        setCriteria={setCriteria}
            />
            <Sorting_Price
                        min={40.00}
                        max={300.00}
                        setCriteria={setCriteria}
                        />
            <Sorting    typeNameCN='类型' 
                        typeName='category'
                        types={[
                            {name:'还原',value:'还原'},
                            {name:'开放',value:'开放'},
                            {name:'本格',value:'本格'},
                            {name:'半封闭',value:'半封闭'},
                            {name:'变格',value:'变格'}
                        ]}
                        setCriteria={setCriteria}
            />
            <Sorting    typeNameCN='题材'
                        typeName='theme'
                        types={[
                            {name:'机制',value:'机制'},
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
                        types={[
                            {name:'现代',value:'现代'},
                            {name:'日式',value:'日式'},
                            {name:'古风',value:'古风'},
                            {name:'港风',value:'港风'},
                            {name:'架空',value:'架空'},
                        ]}
                        setCriteria={setCriteria}
                        />
            <Sorting typeNameCN='难度'
                        typeName='difficulty'
                        types={[
                            {name:'进阶',value:'进阶'},
                            {name:'新手',value:'新手'},
                            {name:'硬核',value:'硬核'}
                        ]}
                        setCriteria={setCriteria}
                        />
            <Sorting typeNameCN='形式'
                        typeName='mod'
                        types={[
                            {name:'盒装',value:'盒装'},
                            {name:'城限/独家',value:'城限/独家'}
                        ]}
                        setCriteria={setCriteria}
                        />
            {
                Object.entries(criteria).length > 0 
                ?
                <button className='clear-filter-button' onClick={()=> setCriteria({})}>Clear Filter x</button>
                :
                <div></div>
            }
        </div>

        
        <div className="list-right">
            {
                sortedList.map((juben,index) => (
                    <Card
                        key={index}
                        title={juben.title}
                        thumbnail={juben.thumbnail}
                        price={juben.price}
                        />
                ))
            }
        </div>
    </div>
  )
}

export default List