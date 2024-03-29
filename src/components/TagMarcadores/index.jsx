import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'

export function TagMarcadores({ isNew, value, onClick, onRemove, ...rest}){
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />
      <button
      onClick={isNew ? onClick : onRemove}
      className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}