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
      state.customers.find((customer) => customer.id === action.payload.id).first_name =
        action.payload.first_name
      state.customers.find((customer) => customer.id === action.payload.id).last_name =
        action.payload.last_name
      state.customers.find((customer) => customer.id === action.payload.id).email =
        action.payload.email
      state.customers.find((customer) => customer.id === action.payload.id).birthdate =
        action.payload.birthdate

      state.customers = [...state.customers]
    },
    deleteCustomer: (state, action) => {
      state.customers = [...state.customers.filter((customer) => customer.id !== action.payload)]
    },
  },
})

export const { addCustomer, getCustomers, editCustomer, deleteCustomer } = customerSlice.actions

export default customerSlice.reducer
