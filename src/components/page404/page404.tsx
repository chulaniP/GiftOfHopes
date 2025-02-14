Import React from 'react';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: '#f8f8f8',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
};

const errorCodeStyle = {
    fontSize: '5em',
    color: '#333',
};

const errorTextStyle = {
    color: '#666',
};

const NotFoundPage = () => (
    <div style={styles}>
        <div>
            <div style={errorCodeStyle}>404</div>
            <div style={errorTextStyle}>Page Not Found</div>
        </div>
    </div>
);

export default NotFoundPage;