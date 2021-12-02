import React, { Component } from 'react';
import {
    API, graphqlOperation,
  } from 'aws-amplify';
import { FlexboxGrid, Avatar, Tag, TagGroup } from 'rsuite';

import Video from '../Video';
import NavBar from '../NavBar';
import './index.css';

/* Location 8 */

class Channel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {
                tags:[]
            }
        };
      }

      componentDidMount() {
        const { name } = this.props;
        const input = {
            id: name,
        };
        /* Location 9 */
    }

    tags = () => {
        const { item } = this.state;
        // Harded coded for now 
        item.tags =  ['english', 'livestream', 'coding'];
        const tagHTML = item.tags.map((item) => (
            <Tag>{item}</Tag>
        ));
        return tagHTML;
    }

    drawVideoPlayer = () => {
        const { item } = this.state;
        if (item.streamURL) {
            /* Location 12 */
        } else {
            return (<div></div>);
        }
    }


    render() {
        const { name } = this.props;
        const { item } = this.state;
        const profile = {name:name};
        return (
        <div className="channel">
            <NavBar profile={profile}/>
            <div className="titleDesktop">
                {item.title}
            </div>
            <div className="videoPlayer">
                {this.drawVideoPlayer()}
                <div className="titleMobile">
                    {item.title}
                </div>
                <div className="avatar">
                    <Avatar circle>{name.charAt(0).toUpperCase()}</Avatar>
                </div>
                <div className="channelName">
                    {name}
                </div>
                <div className="viewCount">
                    1000
                </div>
                <div className="tagGroup">
                    <TagGroup >
                        {this.tags()}
                    </TagGroup>
                </div>

                <div className="desc">
                    {item.description}
                </div>
                    
            </div>
        </div>
        );
    }
}



export default Channel;
