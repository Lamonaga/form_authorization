import React from "react";

import {shallow} from "enzyme";

import enzymeConfig from '../../enzymeConfig'
import Input from "./index";


const setUp = () => shallow(<Input/>);

	describe("Input component", () => {
		let component;
		let instance;

		beforeEach(() => {
			component = setUp();
			instance = component.instance();
		})

		it("should render Input conponent", () => {
			expect(component).toMatchSnapshot();
		})

		describe("input handle", () => {
			it("should handleChange search input", () => {
				const mockCallBack = jest.fn()
				const component = shallow(<Input onChange={mockCallBack}/> )
				expect(mockCallBack.mock.calls.length).toBe(0)
				component.find('input').simulate('change');
				expect(mockCallBack.mock.calls.length).toBe(1)
			})
		})
	})