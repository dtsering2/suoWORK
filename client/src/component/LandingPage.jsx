import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

// import { ChannelListContainer, ChannelContainer, Auth } from './components';
// import WelcomePage from './WelcomePage';

const cookies = new Cookies();

const apiKey = 'qgtk9ttyha7j'; //TODO grab your new api key to connect
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if(authToken) {
    client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('username'),
        fullName: cookies.get('fullName'),
        image: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
        phoneNumber: cookies.get('phoneNumber'),
    }, authToken)
}


const LandingPage = ({navigateToWelcomePage}) => {
    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    if(!authToken){
        // navigateToWelcomePage() 
        //TODO we want to render a page that will says there are no current user that is logged in currently
    }

    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                {/* <ChannelListContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
                <ChannelContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType}
                /> */}
            </Chat>
        </div>
    );
}

export default LandingPage;