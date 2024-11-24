import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Subscriber {
  EmailAddress: string
  Name: string
}

interface SubscribersState {
  Subscribers: Subscriber[]
}

const initialState: SubscribersState = {
  Subscribers: [],
}

const SubscribersSlice = createSlice({
  name: 'Subscribers',
  initialState,
  reducers: {
    setSubscribersSlice: (state, action: PayloadAction<Subscriber[]>) => {
      state.Subscribers = action.payload
    },
    addSubscriberSlice: (state, action: PayloadAction<Subscriber>) => {
      state.Subscribers.push(action.payload)
    },
    updateSubscriberSlice: (state, action: PayloadAction<Subscriber>) => {
      const index = state.Subscribers.findIndex(
        (Subscriber) => Subscriber.EmailAddress === action.payload.EmailAddress
      )
      if (index !== -1) {
        state.Subscribers[index] = action.payload
      }
    },
    removeSubscriberSlice: (state, action: PayloadAction<string>) => {
      state.Subscribers = state.Subscribers.filter(
        (Subscriber) => Subscriber.EmailAddress !== action.payload
      )
    },
  },
})

export const {
  setSubscribersSlice,
  addSubscriberSlice,
  updateSubscriberSlice,
  removeSubscriberSlice,
} = SubscribersSlice.actions

export default SubscribersSlice.reducer
