import React , { Component } from 'react';

import SearchBar from './search-bar.jsx';
import Gif from './gif.jsx'
import GifList from './gif-list.jsx'

class App extends Component {
    render() {
        const gifs = [
            {id: "u6DUcQbPPRHUAwe2tg" },
            {id: "5PPJ8LCssGoqfndDNp" }
        ]
       return (
           <div>
               <div className="left-scene">
                   <SearchBar />
                   <div className="selected-gif">
                        <Gif /> 
                   </div>
               </div>
               <div className="right-scene">
                    <GifList gifs={gifs}/>
               </div>
           </div>
       )
    }
}

export default App;