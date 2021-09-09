import React from 'react';
import PropTypes from 'prop-types';

function GuestSubmit({ ns }) {
  return (
    <div className="row-default">
      <button className="btn btn-primary" onClick={ns} type="button">
        Submit
      </button>
    </div>
  );
}

export default GuestSubmit;

GuestSubmit.propTypes = {
  ns: PropTypes.func.isRequired,
};
