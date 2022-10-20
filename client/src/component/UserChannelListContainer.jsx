import React from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react'
import Cookies from 'universal-cookie'

import SideBar from './SideBar'
import ChannelSearch from "./ChannelSearch"
import UserTeamChannelList from './UserTeamChannelList'
import UserTeamChannelPreview from './UserTeamChannelPreview'

const UserChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className = "channel-list__list__wrapper">
                <div className = 'channel-list__header'>
                    <p className = "channel-list__header__text">Current Server Name</p>
                    {/*//TODO Inside this P tag we want to render the name of the current server name the user is in */}
                </div>
                <ChannelSearch />
                <ChannelList
                    filters = {{}}
                    channelRenderFilterFn = {()=>{}}
                    List = {(listProps)=>(
                        <UserTeamChannelList 
                            {...listProps}
                            type = 'team'
                        />
                    )}
                    Preview = {(previewProps)=>(
                        <UserTeamChannelPreview 
                            {...previewProps}
                            type = "team"
                        />
                    )}
                />
            </div>
        </>
    )
}

export default UserChannelListContainer