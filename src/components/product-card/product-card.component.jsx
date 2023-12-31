import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './product-card.styles.scss'
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt=" product image " />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="cost">{price}</span>
        <Button buttonType="inverted" onClick = {addProductToCart}> Add to cart </Button>
      </div>
    </div>
  );
};

export default ProductCard;
