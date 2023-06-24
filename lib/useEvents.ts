import useSWR from 'swr'

export default function useEvents(user: any | undefined) {
  // We do a request to /api/events only if the user is logged in
  const { data: events } = useSWR<any>(
    user?.isLoggedIn ? `/api/events` : null
  )

  return { events }
}
