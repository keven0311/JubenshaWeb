import React, { useState } from 'react'
import Slider from 'react-slider'
import '../styles/Slider.css'

interface PriceRangeProps {
    min:number;
    max:number;
    setCriteria: React.Dispatch<React.SetStateAction<Record<string, [number,number]>>>;
}

const Sorting_Price:React.FC<PriceRangeProps> = ({min,max,setCriteria}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [values, setValues] = useState<[number,number]>([min,max]);

    const handleSliderChange = (values:[number,number]) => {
        setValues(values);
        setCriteria(prevCriteria => ({
            ...prevCriteria,
            price:values
        }));
    }

    function toggleVisible(){
        setIsVisible(!isVisible)
    }
  return (
    <div className='sorting-types'>
        <div className='sorting-fixed'>
            <span>价格</span>
            <button onClick={toggleVisible}>{isVisible ? '-' : '+'}</button>
        </div>
        <div className={`sorting ${isVisible ? '' : 'hidden' }`}>
           <Slider
                className={'slider'}
                onChange={handleSliderChange}
                value={values}
                min={min}
                max={max}
                renderThumb={(props) => {
                    const {key, ...restProps} = props;
                    return <div key={key} {...restProps}/>
                } }
                pearling
                minDistance={1}
           />
            <div className='slider-range-info'>
                <span className='slider-range-min'>${values[0]}</span>
                <span className='slider-range-max'>${values[1]}</span>
            </div>
        </div>

    </div>
  )
}

export default Sorting_Price