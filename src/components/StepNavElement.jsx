import PropTypes from 'prop-types';

export default function StepElement(props) {
  return (
    <div className="Step-Container">
      <div>
        <h4 className={`Step ${props.Step == props.currentS ? 'Step-Active' : ''}`}>{props.Step}</h4>
      </div>
      <div>
        <h5 className="StepIndicator">Step {props.Step}</h5>
        <h4 className="StepTitle">{props.StepTitle}</h4>
      </div>
    </div>
  );
}

StepElement.propTypes = {
  Step: PropTypes.string.isRequired,
  StepTitle: PropTypes.string.isRequired,
  currentS: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
