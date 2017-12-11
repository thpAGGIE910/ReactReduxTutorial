import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyAvsx-IA44Jm_14Svgp_K7Stq83VbqNgH0";

YTSearch({ key: API_KEY, term: 'surfboards' }, (data) => {
    console.log(data);
});

// Create a new component. This component should produce some HTML. This a class factory that creates instances of the App class
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
