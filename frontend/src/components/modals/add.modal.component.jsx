import React from 'react'
import { Button, Label, TextInput, Checkbox, Modal } from 'flowbite-react'

const AddModal = (props) => {
    if (!props.show) {
        return null
    }

    return (
        <Modal show={props.show} size='md' popup={true} onClose={props.onClose}>
            {/* <Modal show={true} size='md' popup={true}> */}
            <Modal.Header />
            <Modal.Body>
                <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
                    <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                        Add New Customer
                    </h3>
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
                        <div className='mb-2 block'>
                            <Label htmlFor='password' value='Your password' />
                        </div>
                        <TextInput
                            id='password'
                            className='dark:border-gray-500 dark:bg-gray-600'
                            type='password'
                            required={true}
                        />
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <Checkbox id='remember' />
                            <Label htmlFor='remember'>Remember me</Label>
                        </div>
                        <a
                            href='/modal'
                            className='text-sm text-blue-700 hover:underline dark:text-blue-500'
                        >
                            Lost Password?
                        </a>
                    </div>
                    <div className='w-full'>
                        <Button>Log in to your account</Button>
                    </div>
                    <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
                        Not registered?{' '}
                        <a
                            href='/modal'
                            className='text-blue-700 hover:underline dark:text-blue-500'
                        >
                            Create account
                        </a>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AddModal
