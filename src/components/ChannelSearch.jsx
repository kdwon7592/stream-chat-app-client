import React, { useEffect, useState } from 'react'
import { useChatContext } from 'stream-chat-react'

const ChannelSearch = () => {
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    const getChannels = async () => {
        try {
            //To Do : fetch Channels
        } catch (error) {
            setQuery('');
        }
    }

    const onSearch = (e) => {
        e.preventDefault();

        setLoading(true);
        setQuery(e.target.value);
        getChannels(e.target.value);
    }

    return (
        <div className='channel-search__container'>
            <div className='channel-search__input__wrapper'>
                <div className='channel-search__input__icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 -3 30 30" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    className="channel-search__input__text"
                    placeholder="Search"
                    type="text"
                    value={query}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default ChannelSearch