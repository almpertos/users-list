import { useState, useEffect } from 'react'

// Components
import ClientList from './components/ClientList'
import PopupModal from './components/PopupModal'
import AddEditClient from './components/AddEditClient'

// Icons
import CloseSVG from './icons/CloseSVG'

// Api
import { getActiveSubscribers } from './helpers/api-endpoints'

// Store
import { useDispatch } from 'react-redux'
import { setSubscribersSlice } from './store/subscribersSlice'

const App = () => {
  const dispatch = useDispatch()
  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false)
  const [subscribers, setSubscribers] = useState([])

  useEffect(() => {
    getActiveSubscribers().then((data) => {
      setSubscribers(data)
      dispatch(setSubscribersSlice(data))
    })
  }, [dispatch])

  return (
    <div className="flex w-full justify-center h-screen p-12 bg-gray-500">
      <div className="flex flex-col rounded-xl bg-white mt-7 p-4 pt-7 gap-8 w-[1200px] max-w-[1200px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold text-dark-500">
              List task management
            </h1>
            <p className="text-dark-500">
              Manage all you existing clients or add new.
            </p>
          </div>
          <div className="flex items-end">
            <button
              className="py-3 rounded-xl px-6 text-white bg-green-500 duration-150 hover:bg-green-600 font-semibold text-sm cursor-pointer"
              onClick={() => setIsNewClientModalOpen(!isNewClientModalOpen)}
            >
              Add new client
            </button>
          </div>
        </div>

        <ClientList />

        <PopupModal isOpen={isNewClientModalOpen}>
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-row justify-between w-full">
              <h1 className="text-dark-500 font-bold text-xl">
                Add new client
              </h1>
              <button
                onClick={() => setIsNewClientModalOpen(!isNewClientModalOpen)}
                className="cursor-pointer"
              >
                <CloseSVG size={32} />
              </button>
            </div>
          </div>
          <AddEditClient
            mode="add"
            handleClose={() => setIsNewClientModalOpen(!isNewClientModalOpen)}
          />
        </PopupModal>
      </div>
    </div>
  )
}

export default App
