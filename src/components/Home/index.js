import React from 'react';
import Search from './Search';
import Stats from './Stats';
import PopularPlugins from './PopularPlugins';

const Home = (props) => (
    <div>
        <Search/>
        <Stats/>
        <PopularPlugins/>
    </div>
);

export default Home;