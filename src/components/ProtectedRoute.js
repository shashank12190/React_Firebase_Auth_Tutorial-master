import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuthContext } from "../context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserAuthContext)
    if (!user) {
        return <Navigate to='/' />
    }
    return children
}

export default ProtectedRoute





// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useUserAuth } from "../context/UserAuthContext";
// const ProtectedRoute = ({ children }) => {
//   const { user } = useUserAuth();

//   console.log("Check user in Private: ", user);
//   if (!user) {
//     return <Navigate to="/" />;
//   }
//   return children;
// };

// export default ProtectedRoute;
