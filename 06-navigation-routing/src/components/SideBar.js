import Link from "./Link";

function SideBar() {
    const links = [
        {label : 'DropDown', path: '/'},
        {label : 'Accordion', path: '/accordion'},
        {label : 'Buttons', path: '/buttons'},
        {label : 'Modal', path: '/modal'},
        {label : 'Table', path: '/table'},
        {label : 'Counter', path: '/counter'},
    ];

    const renderedComponents = links.map((item, index)=> {
        return <Link key={item.label} className='mb-3' activeClassName='font-bold border-l-4 border-blue-500 pl-2' to={item.path}>{item.label}</Link>
    });

    return <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
        {renderedComponents}
        </div>
}

export default SideBar;