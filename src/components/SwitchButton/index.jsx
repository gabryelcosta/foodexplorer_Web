import { Container } from './styles';

export function ToggleSwitch({ onChange, checked, title }){
  return(
    <Container title={title}>
      <label className="switch">
        <input type="checkbox" onChange={onChange} checked={checked} />
        <span className="slider"></span>
      </label>
    </Container>
  )
}