import React from 'react'
import {mount, shallow} from 'enzyme'
import Join from './Join'
import enzymeConfig from '../enzymeConfig'
import {Provider} from "react-redux";
import store from "../store";

describe('<Join/>', () => { // группируем
	const mockJoin = jest.fn() // мок для экшена login (this.props.logIn)

	const initialState = {
		name: '', surname: '', email: '', password: '', confirmPassword: '',
	}
	it('Should capture lastname correctly onChange', function(){

		const component = mount(<Provider store={store}><Join /></Provider>);
		const input = component.find('Input').at(0);
		input.instance().value = 'asd@asd.ru'
		input.simulate('change');
		expect(component.state().email).toEqual('asd@asd.ru');
	})
})