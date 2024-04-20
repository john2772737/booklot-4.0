import React from 'react';

function PrivateRoute({children}) { // changed component to element
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn){
    return <div>
        <h1>please log in</h1>
    </div>
  }
  return children
}

export default PrivateRoute;
