import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'

test('should correctly render ExpensesSummary with 1 expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={224} />)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSummary with multiple expenses',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={34} expenseTotal={255524} />)
    expect(wrapper).toMatchSnapshot()
})