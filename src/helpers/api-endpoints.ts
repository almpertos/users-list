import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

export const getActiveSubscribers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/activeSubscribers`)
    return response.data?.Results || []
  } catch (error) {
    console.error('Error fetching active subscribers:', error)
    throw error
  }
}

export const addSubscriber = async (subscriberData: {
  Name: string
  EmailAddress: string
}) => {
  try {
    const url = `${BASE_URL}/addSubscriber`

    const response = await axios.post(
      url,
      {
        email: subscriberData.EmailAddress,
        name: subscriberData.Name,
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
    )

    if (response.status !== 201) {
      throw new Error('Failed to add subscriber')
    }

    return response.data
  } catch (error: any) {
    console.error(error)
    throw error
  }
}

export const updateSubscriber = async (formData: any, prevEmail: string) => {
  try {
    const url = `${BASE_URL}/updateSubscriber`

    const response = await axios.put(
      url,
      {
        ...formData,
        oldEmail: prevEmail,
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
    )

    if (response.status !== 200) {
      throw new Error('Failed to update subscriber')
    }

    return response.data // Επιστρέφει τα δεδομένα από την απόκριση
  } catch (error: any) {
    console.error(error)
    throw error
  }
}

export const deleteSubscriber = async (email: string) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/deleteSubscriber?email=${encodeURIComponent(email)}`
    )

    if (response.status === 200) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error('Error deleting subscriber:', error)
    throw error
  }
}
