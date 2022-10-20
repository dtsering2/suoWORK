import React, { useState, useEffect }from 'react';
import {useChatContext} from 'stream-chat-react'

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false)

    const getChannels = async (text) => {
        try{
            //TODO: fetch channels
        } catch (error){
            setQuery('')
        }
    }
    const handleChannelSearchCredentials = (e) =>{
        e.preventDefault()
        setLoading(true)
        setQuery(e.target.value)
        getChannels(e.target.value)
    }
    return (
        <div className='channel-search__container'>
            <div className = 'channel-search__input__wrapper'>
                <div classNmae = "channel-search__input__icon">
                    {/*//TODO WANT TO IMPORT THE SEARCH ICON */}
                </div>
                <input
                    className = 'channel-search__input__text'
                    placeholder='Search'
                    type = 'text'
                    value = {query}
                    onChange = {handleChannelSearchCredentials}
                />
            </div>
        </div>
    )
}

export default ChannelSearch