import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    tmpCustomer: null,
  },
  reducers: {
    getCustomers: (state, action) => {
      state.customers = [...action.payload]
    },
    addCustomer: (state, action) => {
      state.customers = [...state.customers, action.payload]
    },
    deleteCustomer: (state, action) => {
      state.customers = [...state.customers.filter((customer) => customer.id !== action.payload)]
    },
    temporaryCustomer: (state, action) => {
      state.tmpCustomer = action.payload
    },
  },
})

export const { addCustomer, getCustomers, deleteCustomer, temporaryCustomer } =
  customerSlice.actions

export default customerSlice.reducer
