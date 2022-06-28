import React, { useState } from 'react'

import EditModal from './modals/edit.modal.component'
import { Button } from 'flowbite-react'

import { useSelector, useDispatch } from 'react-redux'
import { addCustomer, deleteCustomer } from '../redux/customerSlice'

const TableComponent = () => {
    const dispatch = useDispatch()
    const customers = useSelector((state) => state.customers.customers)

    const [show, setShow] = useState(false)

    return (
        <div className=''>
            <div className='flex items-center justify-end p-4'>
                <button
                    type='button'
                    class='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                    onClick={() => {
                        dispatch(
                            addCustomer({
                                id: 2,
                                first_name: 'ugur1',
                                last_name: 'firat1',
                                email: 'ugur@firat1.com',
                                birthdate: '1111-11-11',
                                createdAt: '2022-04-02T02:03:52.000Z',
                                updatedAt: '2022-04-05T10:04:05.000Z',
                            })
                        )
                    }}
                >
                    Add New Customer
                </button>
            </div>

            <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' class='px-6 py-3'>
                                ID
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                First Name
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                Last Name
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                Email
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                Birthdate
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                Created At
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                Updated At
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                Edit
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                <th
                                    scope='row'
                                    class='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                                >
                                    {customer.id}
                                </th>
                                <td class='px-6 py-4'> {customer.first_name} </td>
                                <td class='px-6 py-4'> {customer.last_name} </td>
                                <td class='px-6 py-4'> {customer.email} </td>
                                <td class='px-6 py-4'> {customer.birthdate} </td>
                                <td class='px-6 py-4'> {customer.createdAt} </td>
                                <td class='px-6 py-4'> {customer.updatedAt} </td>

                                <td class='px-2 py-4 '>
                                    {/* <button
                                        class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                                        onClick={() => setShow(true)}
                                    >
                                        Edit
                                    </button>
                                    <Modal onClose={() => setShow(false)} show={show} /> */}

                                    {/* <!-- Modal toggle --> */}
                                    <Button
                                        class='font-medium text-blue-600 dark:text-blue-500 hover:underline px-0'
                                        onClick={() => {
                                            setShow(true)
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <EditModal onClose={() => setShow(false)} show={show} />
                                </td>
                                <td class='px-6 py-4 '>
                                    <button
                                        class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                                        onClick={() => {
                                            dispatch(deleteCustomer(customer.id))
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
        </div>
    )
}

export default TableComponent
