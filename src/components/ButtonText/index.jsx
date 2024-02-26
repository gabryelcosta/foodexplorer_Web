import { Container } from './styles'

export function ButtonText({ title, tooltip, disabled = false, isActive = false, icon: Icon, ...rest }){
  return(
    <Container
      type="button"
      title={tooltip}
      disabled={disabled}
      $isactive={isActive}
      {...rest}
    >
      {Icon && <Icon size={30} />}
      {title}
    </Container>
  )
}