import React, { useEffect, useState } from 'react'

// Api
import { addSubscriber, updateSubscriber } from '../helpers/api-endpoints'

// Store
import { useDispatch } from 'react-redux'
import {
  addSubscriberSlice,
  updateSubscriberSlice,
} from '../store/subscribersSlice'

interface Subscriber {
  EmailAddress: string
  Name: string
}

interface AddEditClientProps {
  name?: string
  email?: string
  mode?: 'add' | 'edit'
  handleClose: () => void
}

const AddEditClient: React.FC<AddEditClientProps> = ({
  name = '',
  email = '',
  mode = 'add',
  handleClose,
}) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<Subscriber>({
    Name: '',
    EmailAddress: '',
  })
  const [prevEmail, setPrevEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState<String | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleClear = () => {
    setFormData({ Name: '', EmailAddress: '' })
    setErrorMessage(null)
  }

  const handleSave = () => {
    if (!formData.Name || !formData.EmailAddress) {
      if (!formData.Name && !formData.EmailAddress) {
        setErrorMessage('Both name and email are required.')
      } else if (!formData.Name) {
        setErrorMessage('Name is required')
      } else if (!formData.EmailAddress) {
        setErrorMessage('Email is required')
      }

      return
    }

    setErrorMessage(null)

    if (mode === 'add') {
      addSubscriber(formData).then(() => {
        dispatch(addSubscriberSlice(formData))
        handleClose()
        handleClear()
      })
    } else {
      updateSubscriber(formData, prevEmail).then(() => {
        dispatch(updateSubscriberSlice(formData))
        handleClose()
        handleClear()
      })
    }
  }

  useEffect(() => {
    if (mode === 'edit') {
      setFormData({ Name: name, EmailAddress: email })
      setPrevEmail(email)
    }
  }, [mode, name, email])

  return (
    <div className="w-full flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-1 w-full">
        <label
          htmlFor="text"
          className="ml-1 block text-sm font-medium text-dark-500"
        >
          Name
        </label>
        <input
          name="Name"
          type="text"
          placeholder="Enter client name"
          value={formData.Name}
          onChange={handleChange}
          className="w-full border border-gray-300 text-base rounded-xl p-2 text-dark-500"
          required
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label
          htmlFor="email"
          className="ml-1 block text-sm font-medium text-dark-500"
        >
          Email
        </label>
        <input
          name="EmailAddress"
          type="text"
          placeholder="Enter client email"
          value={formData.EmailAddress}
          onChange={handleChange}
          className="w-full border border-gray-300 text-base rounded-xl p-2 text-dark-500"
          required
        />
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
      )}

      <div className="flex flex-row w-full justify-end gap-4 mt-3">
        <button
          onClick={handleClear}
          className="rounded-xl py-2 w-[80px] border border-dark-500 bg-transparent text-dark-500 hover:bg-dark-500 hover:text-white cursor-pointer"
        >
          Clear
        </button>
        <button
          onClick={handleSave}
          className="rounded-xl py-2 w-[80px] text-white bg-green-500 duration-150 hover:bg-green-600 font-semibold text-sm cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default AddEditClient
