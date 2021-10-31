import React from 'react';
import ReactDOM from 'react-dom';
import WordChart from './index';
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WordChart />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('State is correctly initialized', () => {
    const div = document.createElement('div');
    const component = ReactDOM.render(<WordChart />, div);
    expect(component.state.transforms).toEqual([]);
});

it('Interval and animation functions are called', () => {
    const spy = spyOn(WordChart.prototype, 'moveWords');
    const div = document.createElement('div');
    const component = ReactDOM.render(<WordChart />, div);

    expect(spy).toHaveBeenCalled();
    expect(component.interval).toBeTruthy();
    expect(component.state.transforms).toEqual([]);
    ReactDOM.unmountComponentAtNode(div);
    expect(component.interval).toBeFalsy()

});