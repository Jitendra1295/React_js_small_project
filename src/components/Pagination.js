import React, { useEffect, useState } from 'react'
import Pagination from '@material-ui/lab/Pagination';
const PaginationData = () => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        console.log(data)
    }
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    console.log("currentItems::", currentItems, indexOfLastItem, indexOfFirstItem);
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                {currentItems.map((item) => (
                    <div key={item.id} style={{ marginBottom: '20px' }}>
                        <img src={item.image} alt={item.title} style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '10px' }} />
                        <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
                            <h3>{item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <Pagination count={Math.ceil(products.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                color="primary" />
        </div>
    )
}

export default PaginationData
