import React from 'react';
import Tweet from '../Tweet';
import './style.css';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


/**
 * @description Component responsiple for rendering and controlling any list of tweets.
 * @description Renders tweets as a slider or as a paginated full screen list.
 * @extends {React.Component}
 */
export default class Tweets extends React.Component {
    /**
    * @constructor
    * @description initializes the component state with tweets list.
    * @todo When API is ready, fetch it from server. 
    * @description Binds `this` to the component in event handlers.
    * @param {Object} props 
    */
    constructor(props) {
        super(props);
        this.state = {
            tweets: [
                {
                    user: {
                        handle: '__atwa',
                        name: 'Mahmoud',
                        id: 'ffas1166s6f',
                        imageURL: 'http://simpleicon.com/wp-content/uploads/user1.png'
                    },
                    tweet: {
                        content: 'This is dobe. @IBM',
                        timestamp: 13334465,
                        retweets: 5,
                        loved: 20,
                        id: 1111111111119774,
                        entities: [
                            { TwitterHandle: '@IBM' },
                        ]
                    },
                    analysis: {
                        emotions: [
                            { sadness: 0.1793 },
                            { joy: 0.55 },
                            { fear: 0.001 },
                            { anger: 0.0035 }
                        ],
                        sentiment: {
                            label: 'negative',
                            value: -0.319
                        }
                    }
                },
                {
                    user: {
                        handle: '__atwa',
                        name: 'Mahmoud',
                        id: 'ffas1166s6f',
                        imageURL: 'http://simpleicon.com/wp-content/uploads/user1.png'
                    },
                    tweet: {
                        content: 'This is dobe. @IBM',
                        timestamp: 13334465,
                        retweets: 5,
                        loved: 20,
                        id: 1111111111119774,
                        entities: [
                            { TwitterHandle: '@IBM' },
                        ]
                    },
                    analysis: {
                        emotions: [
                            { sadness: 0.1793 },
                            { joy: 0.55 },
                            { fear: 0.001 },
                            { anger: 0.0035 }
                        ],
                        sentiment: {
                            label: 'negative',
                            value: -0.319
                        }
                    }
                },
                {
                    user: {
                        handle: '__atwa',
                        name: 'Mahmoud',
                        id: 'ffas1166s6f',
                        imageURL: 'http://simpleicon.com/wp-content/uploads/user1.png'
                    },
                    tweet: {
                        content: 'This is dobe. @IBM',
                        timestamp: 13334465,
                        retweets: 5,
                        loved: 20,
                        id: 1111111111119774,
                        entities: [
                            { TwitterHandle: '@IBM' },
                        ]
                    },
                    analysis: {
                        emotions: [
                            { sadness: 0.1793 },
                            { joy: 0.55 },
                            { fear: 0.001 },
                            { anger: 0.0035 }
                        ],
                        sentiment: {
                            label: 'negative',
                            value: -0.319
                        }
                    }
                },
                {
                    user: {
                        handle: '__atwa',
                        name: 'Mahmoud',
                        id: 'ffas1166s6f',
                        imageURL: 'http://simpleicon.com/wp-content/uploads/user1.png'
                    },
                    tweet: {
                        content: 'This is dobe. @IBM',
                        timestamp: 13334465,
                        retweets: 5,
                        loved: 20,
                        id: 1111111111119774,
                        entities: [
                            { TwitterHandle: '@IBM' },
                        ]
                    },
                    analysis: {
                        emotions: [
                            { sadness: 0.1793 },
                            { joy: 0.55 },
                            { fear: 0.001 },
                            { anger: 0.0035 }
                        ],
                        sentiment: {
                            label: 'negative',
                            value: -0.319
                        }
                    }
                }
            ]

        }

        this.handleAspectRatio = this.handleAspectRatio.bind(this);
    }

    /**
     * @description Checks if the component will be used as a slider as in `Charts` page.
     * @description If so, it calls `this.handleAspectRatio` and binds it to `window.onresize` event.
     * @returns {null}
     */
    componentDidMount() {
        const { isSlider } = this.props;
        if (isSlider) {
            this.handleAspectRatio();
            window.onresize = this.handleAspectRatio;
        }
    }

    /**
     * @description Modify's the aspect ratio of the slider to prevent glitching and/or unwanted behaviour.
     * @description Updates the component state with the new aspect ratio. 
     * @returns {null}
     */
    handleAspectRatio() {
        const tweets = document.querySelectorAll('.tweetContainer')
        let maxHeight = 0;
        for (const tweet of tweets) {
            const rect = tweet.getBoundingClientRect();
            if (rect.height > maxHeight) maxHeight = rect.height;
        }
        const width = window.innerWidth * 0.95;
        this.setState({
            width,
            height: maxHeight + 55
        });
    }
    /**
     * @description Responsible for rendering the component, hides & shows the dialogue based on `state.dialogShown`
     * @returns {JSX}
     */
    render() {
        const { isSlider } = this.props;
        const numTweets = (this.state.tweets || []).length;
        if (isSlider) {
            return (
                <CarouselProvider isPlaying={true}
                    interval={3000}
                    naturalSlideWidth={this.state.width || 800}
                    naturalSlideHeight={this.state.height || 203}
                    totalSlides={numTweets >= 5 ? 5 : numTweets}
                    className="slider"
                >
                    <Slider>
                        {this.state.tweets.slice(0, 5).map((tweet, i) => {
                            return (
                                <Slide key={Math.random().toString(32).replace('.', '')} index={i}>
                                    <Tweet isSlider={true} data={tweet} />
                                </Slide>
                            )
                        })}
                    </Slider>

                    <ButtonBack className="controlBtn backBtn">
                        <svg viewBox="0 0 24 24">
                            <path fill="#ffffff" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                        </svg>
                    </ButtonBack>
                    <ButtonNext className="controlBtn nextBtn">
                        <svg viewBox="0 0 24 24">
                            <path fill="#ffffff" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                        </svg>
                    </ButtonNext>
                </CarouselProvider>
            )
        } else {
            return (
                <div className="tweetsList">
                    {this.state.tweets.map(tweet => <Tweet key={Math.random().toString(32).replace('.', '')} data={tweet} />)}
                </div>
            )
        }

    }
}