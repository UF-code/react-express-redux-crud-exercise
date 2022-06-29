import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    tmpCustomer: null,
  },
  reducers: {
    addCustomer: (state, action) => {
      state.customers = [...state.customers, action.payload]
    },
    getCustomers: (state, action) => {
      state.customers = [...action.payload]
    },
    editCustomer: (state, action) => {
      // state.tmpCustomer =
      // console.log(state.tmpCustomer)
      // console.log(state.customers.find(({ id }) => id === action.payload))
      // console.log('HEY')
      // const cst = state.customers.filter((customer) => customer.id === action.payload)[0]
      // const cst = [...state.customers.filter((customer) => customer.id === action.payload)]
      // console.log(cst)
    },
    deleteCustomer: (state, action) => {
      state.customers = [...state.customers.filter((customer) => customer.id !== action.payload)]
    },
  },
})

export const { addCustomer, getCustomers, editCustomer, deleteCustomer } = customerSlice.actions

export default customerSlice.reducer
