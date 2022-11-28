import { FeedbackOptionsBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => { 

    return (
        <FeedbackOptionsBox>
            {options.map(({ name, label, type}) => (
                <Button key={name} type={type} name={name} onClick={(event)=>onLeaveFeedback(event.currentTarget.name)}>
               {label}
            </Button>
            )
            )}
            {/* <Button type="button" name="good" onClick={(event)=>onLeaveFeedback(event.currentTarget.name)}>
                Good
            </Button>
            <Button type="button" name="neutral" onClick={(event)=>onLeaveFeedback(event.currentTarget.name)}>
                Neutral
            </Button>
            <Button type="button" name="bad" onClick={(event)=>onLeaveFeedback(event.currentTarget.name)}>
                Bad
            </Button> */}
        </FeedbackOptionsBox>);
};