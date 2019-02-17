import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
    return (
        <li className="answerOption">
            <input
            type="radio"
            className="radioButton"
            name="radioGroup"
            checked={props.answerType === props.answer}
            id={props.answerType}
            value={props.answerType}
            disabled={props.answer}
            onChange={props.onAnswerSelected}
            >
        </li>
    );
}

export default AnswerOption;