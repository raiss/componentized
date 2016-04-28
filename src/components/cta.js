import React from 'react';
import './cta.scss';

export const Cta = ({title}) => {
  return (
        <button>{title}</button>
  );
}

Cta.propTypes = {
  title: React.PropTypes.string.isRequired
}
