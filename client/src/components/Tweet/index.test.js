import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './index';
import {shallow} from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
const tweetData = {
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

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tweet data={tweetData}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('State is correctly initialized', () => {
    const div = document.createElement('div');
    const component = ReactDOM.render(<Tweet data={tweetData} />, div);
    expect(component.state.dialogShown).toBeFalsy();
    expect(component.emojiHeight).toBe(30);
    expect(component.emojiWidth).toBe(30);
});

it('extractTone() is called', () => {
    const spy = spyOn(Tweet.prototype, 'extractTone');
    const div = document.createElement('div');
    const component = ReactDOM.render(<Tweet data={tweetData}/>, div);

    expect(spy).toHaveBeenCalled();

});
it('getEmoji is called', () => {
    const spy = spyOn(Tweet.prototype, 'getEmoji');
    const div = document.createElement('div');
    ReactDOM.render(<Tweet data={tweetData}/>, div);

    expect(spy).toHaveBeenCalled();
});

it('Renders the dialogue when a button is clicked', () => {
    
    const spy = spyOn(Tweet.prototype, 'toggleDialogue');
    const div = document.createElement('div');
    const component = ReactDOM.render(<Tweet data={tweetData}/>, div);

    const shallowRender = shallow(<Tweet data={tweetData} />);
    shallowRender.find('.expandBtn').simulate('click');

    expect(spy).toHaveBeenCalled();
    expect(shallowRender.find('.dialogueContainer')).toBeTruthy();

});
