export function useConvertDate(date: string) {
  const localDate = new Date(date).toLocaleDateString()
  return localDate
}
