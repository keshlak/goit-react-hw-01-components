import { StatList, Item, Label } from "./Statistics.styled";

const StatisticsItem = ({ stats }) => (
  <StatList>
    {stats.map(({ id, label, percentage }) => (
      <Item
        key={id}
        style={{
          backgroundColor:
            "#" + Math.floor(Math.random() * 16777215).toString(16),
        }}
      >
        <Label>{label}</Label>
        <Label>{percentage}%</Label>
      </Item>
    ))}
  </StatList>
);

export default StatisticsItem;
