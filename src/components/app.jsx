import React , { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search-bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif-list.jsx';

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            gifs: [],
            selectedGifId: "u6DUcQbPPRHUAwe2tg"
        }
        this.search()
    }

    search = (query) => {
        giphy('1Y3WAcsdFb7rFwWn0IzXyuvaubdZDTq5').search({
            q: query,
            rating: 'g',
            limit: 10
        }, (error, response) => {
            this.setState({
                gifs: response.data
            })
        })
    }


    render() {
       return (
           <div>
               <div className="left-scene">
                   <SearchBar search={this.search}/>
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