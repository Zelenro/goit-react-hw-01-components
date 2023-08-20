import PropTypes from 'prop-types'
import {
  Title,
  StatList,
  WrapperSection,
  StatItem,
  generateRandomColor,
} from './Statistics.styled';

export const Statistics = ({ title="Upload stats", stats }) => {
  return (
    <div>
      <WrapperSection>
        <Title>{title}</Title>
        <StatList>
          {stats.map(data => (
            <StatItem
              key={data.id}
              style={{ backgroundColor: generateRandomColor() }}
            >
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}%</span>
            </StatItem>
          ))}
        </StatList>
      </WrapperSection>
    </div>
  );
};

Statistics.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired}