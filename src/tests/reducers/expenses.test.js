import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state ',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id',()=>{
    const action={
        type: 'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expense if id is not found',()=>{
    const action={
        type: 'REMOVE_EXPENSE',
        id:'-1'
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should add expense',()=>{
    const expense ={
        id:'100',
        description:'macbook',
        note:'',
        createdAt: 2000,
        amount:24000
    }
    const action={
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,expense])
})

test('should edit an expense',()=>{
    const amount = 1267
    const action ={ 
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state[1].amount).toBe(amount)
})

test('should not edit an expense if id  not found',()=>{
    const amount = 1233367
    const action ={ 
        type:'EDIT_EXPENSE',
        id:'-333',
        updates:{
            amount
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should set expenses',()=>{
    const action ={
        type: 'SET_EXPENSES',
        expenses:[expenses[1]]
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual[expenses[1]]
})

