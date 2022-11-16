import React from 'react';
import {AuthContext} from '../../context/UserContext'


export const useUser = () => {
  const context = React.useContext(AuthContext);
  return context;
};

export default useUser;