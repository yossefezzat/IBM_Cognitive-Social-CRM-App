//Libs & Components
import React from 'react';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';
import Dialogue from '../TweetDialogue';

//Style
import './style.css';

//Emoji
import sadness from './assets/sadness.png';
import fear from './assets/fear.png';
import anger from './assets/anger.png';
import joy from './assets/joy.png';
import disgust from './assets/disgust.png';
const EMOJI = {
    sadness, fear, anger, joy, disgust
}


/**
 * @description Component responsiple for rendering and controlling a tweet item.
 * @description Also, responsible for showing/hiding the tweet's Dialogue.
 * @extends {React.Component}
 */
export default class Tweet extends React.Component {
    /**
     * @constructor
     * @description initialized width & height of emoji as well as the component state.
     * @description Binds `this` to the component in event handlers.
     * @param {Object} props 
     */
    constructor(props) {
        super(props);

        this.emojiHeight = 30;
        this.emojiWidth = 30;
        this.tone = null;
        this.state = {
            dialogShown: false
        }
        this.toggleDialogue = this.toggleDialogue.bind(this);
    }

    /**
     * @deprecated
     */
    // componentDidMount() {
        // console.log(this.props.data);
    // }


    /**
     * @description returns the correct emoji label and value of the emotions.
     * @description Correct emoji has the maximum confidence ratio. 
     * @param {Array<Object>} emotions
     * @returns {Object} Emoji
     * @returns {String} Emoji.lable   
     * @returns {Number} Emoji.value   
     */
    extractTone(emotions) {
        if (this.tone) {
            return this.tone;
        }
        let major = { NA: 0 }
        let KEY_PREV = 'NA';
        for (const emotion of emotions) {
            const KEY = (Object.keys(emotion) || []).pop();
            if (!KEY) continue;
            if (emotion[KEY] > major[KEY_PREV]) {
                major = emotion[KEY];
                KEY_PREV = KEY;
            }
        }
        return { label: KEY_PREV, value: major[KEY_PREV] };
    }


    /**
     * @description Calls `this.extractTone` and returns the emoji's label. 
     * @param {Array<Object>} emotions 
     * @returns {String} Label
     */
    getEmoji(emotions) {
        this.tone = this.extractTone(emotions);
        return EMOJI[(this.tone || {}).label];
    }

    /**
     * @description Toggles `state.dialogShown` value.
     * @returns {null}
     */
    toggleDialogue() {
        this.setState({
            dialogShown: !this.state.dialogShown
        });
    }
    /**
     * @description Responsible for rendering the component, hides & shows the dialogue based on `state.dialogShown`
     * @returns {JSX}
     */
    render() {
        const { data } = this.props;
        const emojiSrc = this.getEmoji(data.analysis.emotions);
        return (
            // <div className="dataContainer">
            <div className="tweetContainer">
                <div className="userContainer">
                    <div className="userImage" style={{
                        backgroundImage: `url(${data.user.imageURL})`
                    }}></div>
                    <div className="userNameInfo">
                        <h4 className="userDisplayName">{data.user.name}</h4>
                        <h5 className="userHandle">@{data.user.handle}</h5>
                    </div>
                    {!this.props.isSlider ?
                        <button onClick={this.toggleDialogue}
                            type="button"
                            className="expandBtn">
                            <svg viewBox="0 0 24 24">
                                <path d="M9.5,13.09L10.91,14.5L6.41,19H10V21H3V14H5V17.59L9.5,13.09M10.91,9.5L9.5,10.91L5,6.41V10H3V3H10V5H6.41L10.91,9.5M14.5,13.09L19,17.59V14H21V21H14V19H17.59L13.09,14.5L14.5,13.09M13.09,9.5L17.59,5H14V3H21V10H19V6.41L14.5,10.91L13.09,9.5Z" />
                            </svg>
                        </button>
                        : null
                    }

                </div>
                <div className="tweetContent">
                    {data.tweet.content}
                </div>
                <div className="info">
                    <p className="timestamp">{new Date(data.tweet.timestamp).toUTCString()}</p>
                    <Img className="emoji"
                        src={emojiSrc}
                        alt={(this.tone || {}).label}
                        height={this.emojiHeight}
                        width={this.emojiWidth} />
                </div>
                {this.state.dialogShown ?
                    <Dialogue
                        tweet={data.tweet}
                        user={data.user}
                        analysis={data.analysis}
                        emoji={emojiSrc}
                        tone={this.tone}
                        close={this.toggleDialogue} />
                    : null}
            </div>
        )
    }
}