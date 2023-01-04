import React from "react";
import { Navigate } from "react-router-dom";

import { useSelector} from 'react-redux'

// props.children => mengakses komponen child
function PrivateElementAuth({children }) {
  // conditional, jika true semua maka return kan komponen child
  // jika false, maka redirect
  // kondisi 1 = apakah sudah login
  const token = useSelector((state) => state.auth.userInfo.token);
  if (token)
    return (
      <Navigate
        to="/"
        replace={true}
        state={{ msg: "anda sudah login"}}
      />
    );
  return children;
}

export default PrivateElementAuth;