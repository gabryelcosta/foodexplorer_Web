import { useTheme } from 'styled-components';

function Ellipse({ className, status }) {
  const theme = useTheme();
  const getColor = () => {
    switch (status) {
      case 'Entregue':
        return theme.title === 'light' ? theme.COLORS.SVG_ORDERS_DELIVERED : theme.COLORS.SVG_ORDERS_DELIVERED;
      case 'Preparando':
        return theme.title === 'light' ? theme.COLORS.SVG_ORDERS_PREPARING : theme.COLORS.SVG_ORDERS_PREPARING;
      case 'Cancelado':
        return theme.title === 'light' ? theme.COLORS.SVG_ORDERS_CANCELLED : theme.COLORS.SVG_ORDERS_CANCELLED;
      default:
        return theme.title === 'light' ? theme.COLORS.SVG_ORDERS_PENDING : theme.COLORS.SVG_ORDERS_PENDING;
    }
  }
  return (
    <svg className={className} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 0 8)" fill={getColor()}/>
    </svg>
  );
}

export default Ellipse;