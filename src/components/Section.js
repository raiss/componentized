import React from 'react';
import './Section.scss';

export const Section = ({title, children}) => {
  return (
    <fieldset className="section-container">
     <legend>{title}</legend>
     {children}
   </fieldset>
  );
}

Section.propTypes = {
  title: React.PropTypes.string.isRequired
}
