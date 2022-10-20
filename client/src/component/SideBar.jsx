import React from 'react'

const SideBar = () => {
    return (
        <div className='channel-list__sidebar'>
            {/* //TODO currently these are static we want to create this for every server that the user is in */}
            <div className = 'channel-list__sidebar_icon1'>
                <div className = 'icon1_inner'>
                    {/* import our user avatar icon here icon here */}
                </div>
            </div>
            <div className = 'channel-list__sidebar_icon2'>
                <div className = 'icon1_inner'>
                    {/* import our logout icon here */}
                </div>
            </div>
        </div>
    )
}

export default SideBar