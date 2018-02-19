import React, { Component } from 'react';
import YouTubeSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyCabwcZzNn9VhxvrkI1yiOnGENb0-gfKUI';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('reactjs');
  }

  videoSearch(term) {
    YouTubeSearch({ key: API_KEY, term }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 200);

    return (
      <div className="container">
        <div className="row">
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}
