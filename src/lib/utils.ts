export const formatDateStamp = (datastamp: any) => {
  const d = new Date(datastamp)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
  const hours = d.getHours()
  const minuties = d.getMinutes()
  const seconds = d.getSeconds()
  return `${year}-${month}-${day} ${hours}:${minuties}:${seconds}`
}