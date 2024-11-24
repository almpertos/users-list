import React, { useState } from 'react'

// Components
import PopupModal from './PopupModal'
import AddEditClient from './AddEditClient'

// Icons
import EditSVG from '../icons/EditSVG'
import DeleteSVG from '../icons/DeleteSVG'
import CloseSVG from '../icons/CloseSVG'

// Api
import { deleteSubscriber } from '../helpers/api-endpoints'

// Store
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { removeSubscriberSlice } from '../store/subscribersSlice'

interface Subscriber {
  EmailAddress: string
  Name: string
}

interface ClientListProps {
  className?: string
}

const ClientList: React.FC<ClientListProps> = ({ className = '' }) => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.subscribers.Subscribers)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<Subscriber | null>(null)

  const deleteClient = async (user: Subscriber) => {
    deleteSubscriber(user.EmailAddress).then((data) => {
      if (data) {
        setSelectedUser(null)
        setIsDeleteModalOpen(false)
        dispatch(removeSubscriberSlice(user.EmailAddress))
      }
    })
  }

  return (
    <div className={`flex flex-col gap-2 min-h-[400px] ${className}`}>
      <div className="flex flex-row w-full gap-8 px-2">
        <span className="flex w-1/12 text-sm text-gray-700 font-semibold justify-start">
          No:
        </span>
        <span className="flex w-5/12 text-sm text-gray-700 font-semibold justify-start">
          Name
        </span>
        <span className="flex w-5/12 text-sm text-gray-700 font-semibold justify-start">
          Email
        </span>
        <span className="flex w-1/12 text-sm text-gray-700 font-semibold justify-end">
          Actions
        </span>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        {users &&
          users.map((user, index) => (
            <div
              key={index}
              className="flex flex-row w-full items-center px-2 py-1 gap-8 min-h-12 rounded-md hover:bg-gray-100 duration-150"
            >
              <span className="flex w-1/12 text-sm text-dark-500 font-medium justify-start">
                {index}
              </span>
              <span className="flex w-5/12 text-sm text-dark-500 font-medium justify-start">
                {user.Name}
              </span>
              <span className="flex w-5/12 text-sm text-dark-500 font-medium justify-start">
                {user.EmailAddress}
              </span>
              <div className="flex w-1/12 justify-end gap-1">
                <div
                  className="flex justify-center items-center bg-grayBlue-200 duration-150 hover:bg-grayBlue-300 cursor-pointer w-7 h-7 rounded-md"
                  onClick={() => {
                    setIsEditModalOpen(!isEditModalOpen)

                    setSelectedUser(user)
                  }}
                >
                  <EditSVG size={16} color="#1860e9" />
                </div>
                <div
                  className="flex justify-center items-center bg-grayBlue-200 duration-150 hover:bg-grayBlue-300 cursor-pointer w-7 h-7 rounded-md"
                  onClick={() => {
                    setIsDeleteModalOpen(!isDeleteModalOpen)
                    setSelectedUser(user)
                  }}
                >
                  <DeleteSVG size={16} color="#fe3c30" />
                </div>
              </div>
            </div>
          ))}
      </div>

      <PopupModal isOpen={isEditModalOpen}>
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row justify-between w-full">
            <h1 className="text-dark-500 font-bold text-xl">Edit client</h1>
            <button
              onClick={() => setIsEditModalOpen(!isEditModalOpen)}
              className="cursor-pointer"
            >
              <CloseSVG size={32} />
            </button>
          </div>
        </div>
        <AddEditClient
          name={selectedUser?.Name}
          email={selectedUser?.EmailAddress}
          mode="edit"
          handleClose={() => setIsEditModalOpen(!isEditModalOpen)}
        />
      </PopupModal>

      <PopupModal isOpen={isDeleteModalOpen} className="max-w-[400px]">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row justify-between w-full">
            <h1 className="text-dark-500 font-bold text-xl">Delete client</h1>
            <button
              onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
              className="cursor-pointer"
            >
              <CloseSVG size={32} />
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-dark-500 font-normal text-base">
            Are you sure you want to permanently delete the user{' '}
            <span className="font-bold">{selectedUser?.EmailAddress}</span>?
            This action cannot be undone.
          </h2>
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
              className="rounded-xl py-2 w-[80px] border border-dark-500 bg-transparent text-dark-500 hover:bg-dark-500 hover:text-white cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => selectedUser && deleteClient(selectedUser)}
              className="px-4 py-2 bg-red-500 text-white rounded-xl shadow-sm hover:bg-red-600 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </PopupModal>
    </div>
  )
}

export default ClientList
function dispatch(arg0: any) {
  throw new Error('Function not implemented.')
}
