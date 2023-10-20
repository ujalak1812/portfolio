import React from 'react'

const Button = ({ url, type, text }) => (
  <a href={url} className={`button ${type}`} target="_blank" rel="noreferrer">
    {text}
  </a>
);

export default Button;