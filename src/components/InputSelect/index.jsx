import { Select } from './styles';

export function SelectComponent({ value, onChange, options }) {
  return (
    <Select value={value} onChange={onChange}>
        <option value="" hidden>Selecione uma opção</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
    </Select>
  );
}