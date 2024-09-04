import PropTypes from 'prop-types';

function UserGreeting(props){
    
    const wlecomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;

    const zalogowanieSie = <h2 className="logIn-message">Zaloguj sie</h2>;

    if(props.isLoggedIn){
        //return <h2 className="welcome-message">Welcome {props.username}</h2>
        return wlecomeMessage;
    }else{
        //return <h2 className="logIn-message">Zaloguj sie</h2>
        return zalogowanieSie;
    }


    //return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Zaloguj sie</h2>);
}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting