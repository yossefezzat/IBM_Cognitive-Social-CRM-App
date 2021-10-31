import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from './index';
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tweets />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('State is correctly initialized', () => {
    const div = document.createElement('div');
    const component = ReactDOM.render(<Tweets />, div);
    expect(component.state.tweets).toBeTruthy();
});

it('handleAspectRatio is called', () => {
    const spy = spyOn(Tweets.prototype, 'handleAspectRatio');
    const div = document.createElement('div');
    const component = ReactDOM.render(<Tweets isSlider={true} />, div);

    expect(spy).toHaveBeenCalled();

});
it('handleAspectRatio is not called', () => {
    const spy = spyOn(Tweets.prototype, 'handleAspectRatio');
    const div = document.createElement('div');
    ReactDOM.render(<Tweets isSlider={false} />, div);

    expect(spy).not.toHaveBeenCalled();

});
