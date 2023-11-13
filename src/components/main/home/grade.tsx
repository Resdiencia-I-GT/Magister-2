const Grade = async () => {
    const response = await fetch('https://endpoint.free.mockoapp.net/agenda/teste2')
    const items = await response.json();

    return (
        <div className="bg-white rounded">
            <div className="d-flex justify-content-between align-items-center p-3 rounded" style={{backgroundColor:"#ccc"}}>
                <h2 className="grade-title">Horários</h2>
                <button className="btn border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path></g></g>
                    </svg>
                </button>
            </div>
            {items.map((item: GradeItemProps) => (
                <Item
                    title={item.title}
                    location={item.location}
                    time={item.time}
                />
            ))}
        </div>
    )
}


const Item = (props: GradeItemProps) => {
    const { title, location, time} = props;

    return(
        <div className="d-flex flex-column justify-content-center">
            <div className="d-flex gap-4 py-4 px-3">
                <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                        <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M37.735,12.679L27.644,23.61 C27.864,24.027,28,24.496,28,25c0,0.76-0.292,1.447-0.758,1.976l3.632,6.539c0.269,0.482,0.094,1.091-0.388,1.359 C30.332,34.96,30.165,35,30.001,35c-0.352,0-0.692-0.186-0.875-0.515l-3.631-6.535C25.333,27.977,25.17,28,25,28 c-1.657,0-3-1.343-3-3s1.343-3,3-3c0.42,0,0.82,0.088,1.183,0.244l10.082-10.923c0.375-0.404,1.007-0.431,1.413-0.056 C38.084,11.64,38.109,12.272,37.735,12.679z"></path>
                    </svg>
                </div>
                <div className="d-flex flex-column justify-content-center gap-1">
                    <p className="m-0 fs-5"><strong>{title}</strong></p>
                    <p className="m-0 text-muted d-inline">{location}<span> - {time}</span></p>
                </div>
            </div>
            <hr className="m-0" />
        </div>
    )
}


export default Grade;