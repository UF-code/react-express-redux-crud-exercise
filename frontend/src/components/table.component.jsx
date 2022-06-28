import React from 'react'

const TableComponent = () => {
    const products = [
        {
            product_name: 'Apple MacBook Pro 17"',
            color: 'Silver',
            category: 'Laptop',
            price: '2999',
        },
        {
            product_name: 'Microsoft Surface Pro',
            color: 'White',
            category: 'Laptop PC',
            price: '1999',
        },
        {
            product_name: 'Magic Mouse 2',
            color: 'Black',
            category: 'Accessories',
            price: '99',
        },
    ]

    return (
        <div className='flex'>
            <button
                type='button'
                class='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 m-4 '
            >
                Add New Product
            </button>

            <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' class='px-6 py-3'>
                                Product name
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                Color
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                Category
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                Price
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                <span class='sr-only'>Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                <th
                                    scope='row'
                                    class='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                                >
                                    {product.product_name}
                                </th>
                                <td class='px-6 py-4'> {product.color} </td>
                                <td class='px-6 py-4'> {product.category} </td>
                                <td class='px-6 py-4'>${product.price} </td>
                                <td class='px-6 py-4 text-right'>
                                    <a
                                        href='#'
                                        class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                                    >
                                        Edit
                                    </a>
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
