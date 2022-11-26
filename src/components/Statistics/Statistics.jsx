import PropTypes from 'prop-types';
import {StatisticsBox, StatisticsTitle, StatisticsContainer, StatisticsTotal} from './Statistics.styled'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (<StatisticsBox>
    <StatisticsTitle>Statistics</StatisticsTitle>
    <StatisticsContainer>
        <StatisticsTotal>Good : {good}</StatisticsTotal>
        <StatisticsTotal>Neutral : {neutral}</StatisticsTotal>
        <StatisticsTotal>Bad : {bad}</StatisticsTotal>
        <StatisticsTotal>Total: {total}</StatisticsTotal>
        <StatisticsTotal>Positive feedback: {positivePercentage}%</StatisticsTotal>
    </StatisticsContainer>;
    </StatisticsBox>);
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }
