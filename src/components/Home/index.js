import React from 'react';
import Search from './Search';
import Stats from './Stats';
import RecentlyUpdated from './RecentlyUpdated';

const Home = (props) => (
    <div>
        <Search/>
        <Stats/>
        <RecentlyUpdated/>
    </div>
);

export default Home;