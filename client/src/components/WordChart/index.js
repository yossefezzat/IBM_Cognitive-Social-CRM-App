import React from 'react';
import './style.css';

/**
 * @description Component responsiple for rendering and controlling the floating keywords chart.
 * @extends {React.Component}
 */
export default class WordChart extends React.Component{
    /**
     * @constructor
     * @description initializes the component state with transformation coordinates to be used in animating the words.
     * @todo When API is ready, fetch the keywords from server. 
     * @description Binds `this` to the component in event handlers.
     * @param {Object} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            transforms: []
        }
        this.moveWords = this.moveWords.bind(this);
    }
    /**
     * @description Calls `this.moveWords`
     * @description Instantiates an interval to call `this.moveWords` every 4sec.
     * @returns {null} 
     */
    componentDidMount(){
        this.moveWords();
        this.interval = window.setInterval(this.moveWords, 4000)
    }

    /**
     * @description Clears the interval that was first Instantiated by `this.componentDidMount`
     * @returns {null}
     */
    componentWillUnmount(){
        window.clearInterval(this.interval || null);
    }
    /**
     * @description Calculates new random coordinates for each word to keep them floating.
     * @description Updates the state with new transfomation coordinates.
     * @returns {null}
     */
    moveWords = () => {
        const words = document.querySelectorAll('.word');
        let transforms = [];
        const computedWidth = window.innerWidth > 800 ? 800 : window.innerWidth;
        [].slice.call(words).forEach(() => {
            const x = Math.random() * computedWidth;
            const y = Math.random() * 400;
            transforms.push(`translate(${x}px, ${y}px)`);
        });
        console.log(transforms);
        this.setState({
            transforms
        })
    }
    /**
     * @description Responsible for rendering the component, hides & shows the dialogue based on `state.dialogShown`
     * @returns {JSX}
     */
    render(){
        const words = [
            {text: "RD", count: 50},
            {text: "IBM", count: 53},
            {text: "Regression", count: 30},
            {text: "Spider-Man", count: 23},
            {text: "Anarchy", count: 43},
            {text: "Capitalism is doomed!", count: 99},
        ];
        this.length = words.length;
        const maxCount = words.reduce((acc, curr) => curr.count > acc ? curr.count : acc, 0) 
        const base = 120;
        return (
            <div className="wordsContainer my-5 col-md-8 col-sm-12 text-left">
                {words.map((word, i) => {
                    return (
                        <span className="word" style={{
                            opacity: word.count / maxCount > 0.4 ? word.count / maxCount : 0.4,
                            fontSize: (word.count / maxCount) * base + "px",
                            transform: this.state.transforms[i] 
                        }}>{word.text}</span>
                    )
                })}
            </div>
        );
    }
}