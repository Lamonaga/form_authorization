import React from "react";

import {mount} from "enzyme";
import Join from "./Join";

import enzymeConfig from '../enzymeConfig'
import store from "../store";
import {Provider} from "react-redux";


describe('SignupForm', () => {
	it('should update email field on change', () => {
		const component = mount(<Provider store={store}> <Join/></Provider>);
		const emailInput = component.find("input[name='email']");
		emailInput.simulate('change', {
			persist: () => {
			},
			target: {
				name: 'email',
				value: 'email@gmail.com'
			}
		});
		expect(emailInput.html()).toMatch('email@gmail.com');
	});
})