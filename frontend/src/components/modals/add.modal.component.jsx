import React, { useState } from 'react'
import { Button, Label, TextInput, Checkbox, Modal } from 'flowbite-react'

import { useSelector, useDispatch } from 'react-redux'
import { temporaryCustomer } from '../../redux/customerSlice'

const AddModal = (props) => {
  const dispatch = useDispatch()

  const [customerFirst, setCustomerFirst] = useState(null)
  const [customerLast, setCustomerLast] = useState(null)
  const [customerEmail, setCustomerEmail] = useState(null)
  const [customerBirthDate, setCustomerBirthDate] = useState(null)

  const handleNameChange = (e) => setCustomerFirst(e.target.value)
  const handleLastChange = (e) => setCustomerLast(e.target.value)
  const handleEmailChange = (e) => setCustomerEmail(e.target.value)
  const handleBirthChange = (e) => setCustomerBirthDate(e.target.value)

  const addCustomer = () => {
    dispatch(
      temporaryCustomer({
        first_name: customerFirst,
        last_name: customerLast,
        email: customerEmail,
        birthdate: customerBirthDate,
      })
    )
  }

  if (!props.show) {
    return null
  }

  return (
    <Modal show={props.show} size='md' popup={true} onClose={props.onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
          <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Add New Customer</h3>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='first_name' value='First Name' />
            </div>
            <TextInput
              id='first_name'
              className='dark:border-gray-500 dark:bg-gray-600'
              placeholder='First Name'
              onChange={handleNameChange}
              required={true}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='last_name' value='Last Name' />
            </div>
            <TextInput
              id='last_name'
              className='dark:border-gray-500 dark:bg-gray-600'
              placeholder='Last Name'
              onChange={handleLastChange}
              required={true}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='email' value='Your email' />
            </div>
            <TextInput
              id='email'
              className='dark:border-gray-500 dark:bg-gray-600'
              placeholder='name@company.com'
              onChange={handleEmailChange}
              required={true}
            />
          </div>

          <div>
            <input
              type='date'
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Select date'
              onChange={handleBirthChange}
            />
          </div>

          <div className='flex flex-wrap items-center gap-2'>
            <button
              className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
              onClick={() => {
                addCustomer()
                props.onClose()
              }}
            >
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Add Customer
              </span>
            </button>
            <button
              className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
              onClick={props.onClose}
            >
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Cancel
              </span>
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddModal
