import React from 'react';
import './style.css';
import { LazyLoadImage as Img } from 'react-lazy-load-image-component';


/**
 * @description Component responsiple for rendering and controlling a tweet's dialogue/pop-up.
 * @extends {React.Component}
 */
export default class Dialogue extends React.Component {
    /**
     * @constructor
     * @description initialized width & height of emoji.
     * @param {Object} props 
     */
    constructor(props) {
        super(props);

        this.emojiHeight = 30;
        this.emojiWidth = 30;
    }


    /**
     * @description Responsible for rendering the component, hides & shows the dialogue based on `state.dialogShown`
     * @returns {JSX}
     */
    render() {
        const { tweet, user, analysis, tone, emoji, close } = this.props;
        return (
            <div className="dialogueContainer">
                <div className="box">
                    <div className="dialogueHeader">
                        <h3 className="headerText">Tweet enrichments</h3>
                        <button onClick={close} type="button" className="closeBtn">
                            <svg viewBox="0 0 24 24">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L1`0.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="detailsContainer">

                        <div className="generalDetails">
                            <h3>General</h3>
                            <ul className="detailsList">
                                <li className="listItem">
                                    <h4 className="detailsLabel">Tweet ID</h4>
                                    <p className="detailsValue">{tweet.id}</p>
                                </li>
                                <li className="listItem">
                                    <h4 className="detailsLabel">Tweeted By</h4>
                                    <p className="detailsValue">{user.name}</p>
                                </li>
                                <li className="listItem">
                                    <h4 className="detailsLabel">Tweeted On</h4>
                                    <p className="detailsValue">{new Date(tweet.timestamp).toUTCString()}</p>
                                </li>
                                <li className="listItem">
                                    <h4 className="detailsLabel">Tweet Content</h4>
                                    <p className="detailsValue">{tweet.content}</p>
                                </li>
                                {/*Waiting for API documentation. */}
                                <li className="listItem">
                                    <h4 className="detailsLabel">Keywords</h4>
                                    <p className="detailsValue"></p>
                                </li>
                                <li className="listItem">
                                    <h4 className="detailsLabel">Entities</h4>
                                    <p className="detailsValue"></p>
                                </li>
                            </ul>
                        </div>
                        <div className="analyticalDetails">
                            <h3>Analysis</h3>
                            <ul className="detailsList">
                                <li className="listItem">
                                    <h4 className="detailsLabel">Sentiment</h4>
                                    <p className="detailsValue">
                                        positive
                                        <span className="numericValue">0.866</span>
                                    </p>
                                </li>
                                <li className="listItem">
                                    <h4 className="detailsLabel">Emotions</h4>
                                    <ul className="nestedList">
                                        {analysis.emotions.map(emotion => {
                                            const key = Object.keys(emotion).pop();
                                            return (
                                                <li key={Date.now().toString(36) + (Math.random() * 500).toString(36).replace('.', '')} className="nestedlistItem">
                                                    <h5 className="nestedDetailsLabel">{key}</h5>
                                                    <span className="numericValue">{emotion[key]}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                                <li key={Date.now()} className="listItem">
                                    <h4 className="detailsLabel">Tone</h4>
                                    <p className="detailsValue">
                                        {tone.label}
                                        <Img className="emoji"
                                            src={emoji}
                                            alt={tone.label}
                                            height={this.emojiHeight}
                                            width={this.emojiWidth} />
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}