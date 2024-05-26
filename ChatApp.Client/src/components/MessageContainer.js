import React from 'react';

const MessageContainer = ({ messages }) => {
    console.log(messages, typeof messages);

    if (!Array.isArray(messages)) {
        return <div>Invalid messages data</div>;
    }

    return (
        <div>
            <table striped="true">
                <tbody>
                    {messages.map((msg, index) => (
                        <tr key={index}>
                            <td>{msg.username} - {msg.msg}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MessageContainer;
