import { useState, useEffect } from 'react';
import { Container } from './styles';
import minusSvg from '../../assets/Icons/Minus.svg';
import plusSvg from '../../assets/Icons/Plus.svg';

export function Stepper({ price, onQuantityChange }){
  const [quantity, setQuantity] = useState(1);
  const numericPrice = Number(price.replace(',', '.'));

  useEffect(() => {
    const newTotalPrice = (quantity * numericPrice).toFixed(2);
    onQuantityChange(newTotalPrice, quantity);
  }, [quantity, numericPrice, onQuantityChange]);

  const increaseQuantity = () => {
    if (quantity < 99) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return(
    <Container>
        <img src={minusSvg} onClick={decreaseQuantity} />
        <input type="number" value={quantity} readOnly />
        <img src={plusSvg} onClick={increaseQuantity} />
    </Container>
  )
}