import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import {useState} from 'react';

function Accordion({items}) {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const renderedItems = items.map((item, index) => {
        const isExpanded = expandedIndex === index;
        const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>

        return <div key={item.id??index} >
            <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={()=>setExpandedIndex(isExpanded ? -1 : index)}>{item.label} {icon} </div>
            {isExpanded  && <div className='border-b p-5'>{item.content}</div>}
        </div>
    })

    return <div className='border-x border-t rounded'>{renderedItems}</div>;
}

export default Accordion;