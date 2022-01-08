import "./productList.css"
import Product from "../product/product.jsx"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Visualize Future & Create it</h1>
                <p className="pl-desc">
                    Being a Developer gives me power to Visualize what changes and impacts can be made in the digital world.💻💻
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
                
            </div>
        </div>
    )
}

export default ProductList
