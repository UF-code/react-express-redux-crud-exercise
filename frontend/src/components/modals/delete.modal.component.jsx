import React from 'react'
import { Button, Modal } from 'flowbite-react'

const DeleteModal = (props) => {
  return (
    <Modal show={props.show} size='md' popup={true} onClose={props.onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className='text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>

          <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
            Are you sure you want to delete this customer {props.test}?
          </h3>
          <div className='flex justify-center gap-4'>
            <Button
              color='failure'
              onClick={() => {
                props.onDelete()
                props.onClose()
              }}
            >
              Yes, I'm sure
            </Button>
            <Button color='gray' onClick={props.onClose}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default DeleteModal
