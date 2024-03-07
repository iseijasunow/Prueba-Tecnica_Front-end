import React from 'react';

function ErrorComponent({ message }) {
  return (
    <div style={{ color: 'red', fontWeight: 'bold' }}>
      {message}
    </div>
  );
}

export default ErrorComponent;