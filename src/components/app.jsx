import React , { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search-bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif-list.jsx';

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            gifs: [  
                {id: "u6DUcQbPPRHUAwe2tg" },
                {id: "5PPJ8LCssGoqfndDNp" }
            ],
            selectedGifId: "u6DUcQbPPRHUAwe2tg"
        }
        this.search("homer")
    }

    search = (query) => {
        giphy('1Y3WAcsdFb7rFwWn0IzXyuvaubdZDTq5').search({
            q: query,
            rating: 'g'
        }, (error, response) => {
            console.log(response)
        })
    }


    render() {
       return (
           <div>
               <div className="left-scene">
                   <SearchBar />
                   <div className="selected-gif">
                        <Gif id={this.state.selectedGifId}/> 
                   </div>
               </div>
               <div className="right-scene">
                    <div className="gif-list">
                        <GifList gifs={this.state.gifs}/>
                    </div>
               </div>
           </div>
       )
    }
}

export default App;