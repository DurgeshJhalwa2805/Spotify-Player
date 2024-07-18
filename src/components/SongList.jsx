import React from 'react';

const SongList = () => {
    const songs = [
        { title: 'Starboy', artist: 'The Weeknd', duration: '4:16' },
        { title: 'Demons', artist: 'Imagine Dragons', duration: '5:24' },
    ];

    return (
        <div className="p-4">
            <div className="flex space-x-5 mb-4">
                <h2 className="text-lg font-bold cursor-pointer hover:text-gray-300">For You</h2>
                <h2 className="text-lg font-bold cursor-pointer text-gray-500 hover:text-gray-300">Top Tracks</h2>
            </div>
            <input
                type="text"
                placeholder="Search Song, Artist"
                className="w-full p-2 mb-4 bg-[#35250a] text-white rounded"
            />
            <ul>
                {songs.map((song, index) => (
                    <li key={index} className="flex justify-between p-2 cursor-pointer hover:bg-[#35250a] rounded">
                        <div>
                            <p>{song.title}</p>
                            <p className="text-sm text-gray-400">{song.artist}</p>
                        </div>
                        <p>{song.duration}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
