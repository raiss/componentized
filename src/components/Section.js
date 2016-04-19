import React from 'react';

export const Section = ({title, children}) => {
  return (
    <fieldset>
     <legend>{title}</legend>
     {children}
   </fieldset>
  );
}

Section.propTypes = {
  title: React.PropTypes.string.isRequired
}
