//higher order component (HOC) a component that renders another component
//reuse cod
//render hijaching
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is:{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        < div >
            {props.isAdmin && <p>This is private info please don't share!</p>}

            <WrappedComponent{...props} />

        </div >
    );
};


const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthentificated ? (<WrappedComponent {...props} />)
                : (<p>This is private  key</p>)}

        </div>
    );
};




const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="this is the" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthentificated={false} info="this is the" />, document.getElementById('app'));