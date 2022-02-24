import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import ReactPaginate from "react-paginate";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { GetMoviesByName } from "../helpers/GetMoviesByName";
import { CardS, ListCard, Rating } from "../styles/CardsStyles";
import {  ContainerC } from "../styles/DetailStyles";



export function PaginatedItems({ itemsPerPage,items }) {
  
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect( () => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, setItemOffset,items]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    function Items({ currentItems }) {

        return (
            <ListCard className="items">
                {currentItems && currentItems.map((movie, index) => (

                    <CardS key={index} border="#0E3FA9">
                        <Link className='bg-transparent' to={`/detalle/${movie.title}`}>
                            <Card.Img src={movie.poster_path} alt={movie.title} />
                            <Rating >
                                <div className='mt-1 bg-transparent text-warning align-middle'>
                                    <BsFillStarFill className='mx-1' />
                                    {movie.vote_average}
                                </div>
                            </Rating>
                        </Link>
                    </CardS>
                ))}
            </ListCard>
        );
    }
    return (
        <>
            <Items currentItems={currentItems} />
            <ContainerC>

                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </ContainerC>
        </>
    );
}