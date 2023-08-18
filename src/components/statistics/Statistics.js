export const Statistics = ({ stats }) => {
  return (
    <div>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {stats.map(data => (
            <li key={data.id} className="stat-item">
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};