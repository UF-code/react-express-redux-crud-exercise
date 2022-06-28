import React from 'react'
import { Button, Label, TextInput, Checkbox, Modal } from 'flowbite-react'

const EditModal = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <Modal show={props.show} size='md' popup={true} onClose={props.onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
          <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
            Edit Customer {props.cst_id}{' '}
          </h3>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='first_name' value='First Name' />
            </div>
            <TextInput
              id='first_name'
              className='dark:border-gray-500 dark:bg-gray-600'
              placeholder='First Name'
              value={props.cst_first}
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
              value={props.cst_last}
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
              required={true}
            />
          </div>

          <div>
            <input
              type='date'
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Select date'
            />
          </div>

          <div className='flex flex-wrap items-center gap-2'>
            <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'>
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Edit Customer
              </span>
            </button>
            <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Cancel Edit
              </span>
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default EditModal
