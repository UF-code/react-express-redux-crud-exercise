import React, { useState } from 'react'

import AddModal from './modals/add.modal.component'
import EditModal from './modals/edit.modal.component'
import DeleteModal from './modals/delete.modal.component'
import { Button, Modal } from 'flowbite-react'

import { useSelector, useDispatch } from 'react-redux'
import { addCustomer, deleteCustomer } from '../redux/customerSlice'

const TableComponent = () => {
  const dispatch = useDispatch()
  const customers = useSelector((state) => state.customers.customers)

  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [modalData, setModalData] = useState(null)

  return (
    <div className=''>
      <div className='flex items-center justify-end p-4'>
        <button
          type='button'
          className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
          // onClick={() => {
          //   dispatch(
          //     addCustomer({
          //       id: 26,
          //       first_name: 'ugur1',
          //       last_name: 'firat1',
          //       email: 'ugur@firat1.com',
          //       birthdate: '1111-11-11',
          //       createdAt: '2022-04-02T02:03:52.000Z',
          //       updatedAt: '2022-04-05T10:04:05.000Z',
          //     })
          //   )
          // }}
          onClick={() => setShowAddModal(true)}
        >
          <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            Add New Customer
          </span>
        </button>
      </div>

      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Avatar
              </th>
              <th scope='col' className='px-6 py-3'>
                ID
              </th>
              <th scope='col' className='px-6 py-3'>
                First Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Last Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Birthdate
              </th>
              <th scope='col' className='px-6 py-3'>
                Created At
              </th>
              <th scope='col' className='px-6 py-3'>
                Updated At
              </th>
              <th scope='col' className='px-6 py-3'>
                Edit
              </th>
              <th scope='col' className='px-6 py-3'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
              >
                <td className='px-6 py-4'>
                  <img
                    className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
                    src={`https://flowbite.com/docs/images/people/profile-picture-${
                      (customer.id % 5) + 1
                    }.jpg`}
                    alt='Bordered avatar'
                  />
                </td>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                >
                  {customer.id}
                </th>
                <td className='px-6 py-4'> {customer.first_name} </td>
                <td className='px-6 py-4'> {customer.last_name} </td>
                <td className='px-6 py-4'> {customer.email} </td>
                <td className='px-6 py-4'> {customer.birthdate} </td>
                <td className='px-6 py-4'> {customer.createdAt} </td>
                <td className='px-6 py-4'> {customer.updatedAt} </td>

                <td className='px-6 py-4 '>
                  <button
                    className='font-medium text-blue-600 dark:text-blue-500 hover:underline px-0'
                    onClick={() => {
                      setModalData(customer)
                      setShowEditModal(true)
                    }}
                  >
                    Edit
                  </button>
                  {/* <EditModal onClose={() => setShowEditModal(false)} show={showEditModal} /> */}
                </td>
                <td className='px-6 py-4 '>
                  <button
                    className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                    onClick={() => {
                      setShowDeleteModal(true)
                      setModalData(customer)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddModal
        show={showAddModal}
        onClose={() => {
          setShowAddModal(false)
        }}
        onTest={() => {
          setShowAddModal(false)
        }}
      />

      {modalData && (
        <EditModal
          cst_id={modalData.id}
          cst_first={modalData.first_name}
          cst_last={modalData.last_name}
          show={showEditModal}
          onClose={() => {
            setShowEditModal(false)
            setModalData(null)
          }}
          onDelete={() => {
            dispatch(deleteCustomer(modalData.id))
            setModalData(null)
          }}
        />
      )}

      {modalData && (
        <DeleteModal
          test={modalData.id}
          show={showDeleteModal}
          onClose={() => {
            setShowDeleteModal(false)
            setModalData(null)
          }}
          onDelete={() => {
            dispatch(deleteCustomer(modalData.id))
            setModalData(null)
          }}
        />
      )}
    </div>
  )
}

export default TableComponent
