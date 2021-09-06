import { Star, StarFill } from 'react-bootstrap-icons';

const Stars = ({ amount, outOf }) => {
  const stars = [];

  for (let i = 1; i <= outOf; i++) {
    if (i <= amount) {
      stars.push(<StarFill style={{ color: '#FFD100' }} />);
    } else {
      stars.push(<Star />);
    }
  }

  return <div>{stars.map((star) => star)}</div>;
};

export default Stars;
