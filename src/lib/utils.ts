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

export const formatMonthDate = (datastamp: any) => {
  const d = new Date(datastamp)
  const month = d.getMonth() + 1
  const day = d.getDate()
  return `${month}月${day}日`
}

export const qs = () => {
  const href = location.href;
  const result: any = {};
  let param = null;
  const reg = /[?&](.*?)=([^&#]*)/g;

  param = reg.exec(href);
  while (param) {
      try {
          result[param[1]] = decodeURIComponent(param[2]);
      } catch (e) {
          try {
              result[param[1]] = unescape(param[2]);
          } catch (escapeErr) {
              result[param[1]] = param[2];
          }
      }
      param = reg.exec(href);
  }
  return result;
}