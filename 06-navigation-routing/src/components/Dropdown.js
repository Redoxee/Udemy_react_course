import {useState, useEffect, useRef} from 'react'
import {GoChevronDown} from "react-icons/go";
import Panel from './Panel';

function DropDown({items, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);

    const onItemClick = (item)=> {
        console.log("hello!");
        onChange(item);
        setIsOpen(false);
    };
    const renderedItems = items.map((item)=>{
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' key={item.value} onClick={()=>onItemClick(item)}>
                {item.label}
            </div>
    });

    const divElement = useRef();
    useEffect(()=> {
        const handler = (event)=> {
            if(!divElement.current)
            {
                return;
            }

            if(!divElement.current.contains(event.target))
            {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        }
    }, []);

    const onMainLabelClick = ()=>{
        setIsOpen(!isOpen);
    };

    return <div ref={divElement} className='dropdown w-48 relative'>
        <Panel className='flex justify-between items-center cursor-pointer' onClick={onMainLabelClick}>
            {value?.label || <div>No item selected</div>}
            <GoChevronDown className='text-lg'/>
        </Panel>
        {isOpen && <Panel className='absolute top-full'>{renderedItems}</Panel>}
    </div>
        
}

export default DropDown;