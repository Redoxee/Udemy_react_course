import {useState} from 'react';

import './AnimalShow.css';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({value}) {
    const [count, setCount] = useState(1);

    return <div className='animal-show' onClick = {()=>setCount(Math.min(count + 1, 25))}>
            <img className='animal' alt={value} src = {svgMap[value]} />
            <img className='heart' alt="heart" src={heart} 
            style= {{
                width: 10 + count * 5 + 'px'
            }}/>
        </div>
}

export default AnimalShow;