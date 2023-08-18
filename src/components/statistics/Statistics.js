import {
  Title,
  StatList,
  WrapperSection,
  StatItem,
  generateRandomColor,
} from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <div>
      <WrapperSection>
        <Title>Upload stats</Title>
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
