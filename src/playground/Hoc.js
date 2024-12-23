import React from "react";
import { createRoot } from "react-dom/client";

// HOC allows
// code to be reusable
// render hijacking
// prop manipulation
// state abstraction

const Info = (props) => {
    return (
        <div>
            <p>Info is {props.info}</p>
        </div>
    )
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>Sensitive info</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = () => {
    return (props) => (
        <>
        {props.isAuthenticated ? (<Info {...props}/>) : (<p>Please login to see the info</p>)}
        </>
    )
};



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

const app = document.getElementById('appId');
const appRoot = createRoot(app);

// appRoot.render(<AdminInfo isAdmin={false} info="this"/>)

appRoot.render(<AuthInfo isAuthenticated={false} info="this"/>)