import React from 'react'
import {shallow} from 'enzyme'
import {Header} from '../../components/Header'

test('should render Header correctly',()=>{
const wrapper = shallow(<Header startLogout={()=>{}}/>)
    expect(wrapper).toMatchSnapshot()
    
})

test('should call startlogout on button click',()=>{
    const startlogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startlogout}/>)
    wrapper.find('button').simulate('click')
    expect(startlogout).toHaveBeenCalled()
})