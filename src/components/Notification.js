
import React from 'react';

const Notification = ({ message }) => (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg">
        {message}
    </div>
);

export default Notification;
