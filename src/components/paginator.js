const ITEMS_PER_PAGE = 10;
export default function Paginator({currentPage, totalItems, onChange}){
    const totalPages = Math.ceil(totalItems/ITEMS_PER_PAGE);
    return (
        <div>
            {Array.from({length:totalPages}, (_, index)=>index+1).map(
                (pageIndex)=>{
                    const isActive = pageIndex === currentPage;
                    return isActive
                        ? <b key={pageIndex}>{" "}{pageIndex}{" "}</b>
                        :<span
                            key={pageIndex}
                            onClick={()=>onChange(pageIndex)}>
                            {" "}{pageIndex}{" "}
                        </span>
                }
            )}
        </div>
    )
}