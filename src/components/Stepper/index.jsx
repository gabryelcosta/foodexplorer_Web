import { Container } from './styles';
import minusSvg from '../../assets/Icons/Minus.svg';
import plusSvg from '../../assets/Icons/Plus.svg';

export function Stepper(){
  return(
    <Container>
        <img src={minusSvg}/>
        <input type="number" placeholder='01'/>
        <img src={plusSvg} />
    </Container>
  )
}