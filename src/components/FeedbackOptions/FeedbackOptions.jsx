import React from 'react';
import { FeedbackOptionsBox, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => { 
    
    return (
        <FeedbackOptionsBox>
            <Button type="button" name={options.good} onClick={onLeaveFeedback}>
                Good
            </Button>
            <Button type="button" name={options.neutral} onClick={onLeaveFeedback}>
                Neutral
            </Button>
            <Button type="button" name={options.bad} onClick={onLeaveFeedback}>
                Bad
            </Button>
        </FeedbackOptionsBox>
    )
}

export default FeedbackOptions;