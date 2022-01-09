import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem";
import { Section, Title } from "./Statistics.styled";

function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatisticsItem stats={stats} />
    </Section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
