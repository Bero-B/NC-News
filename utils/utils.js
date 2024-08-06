export function formatDate(dateStr){
    const parsedDateStr = new Date(dateStr)
    let day = parsedDateStr.getUTCDate()
    let month = parsedDateStr.getUTCMonth() + 1
    let year = parsedDateStr.getUTCFullYear()
    day = day < 10 ? `0` + day : day
    month = month < 10 ? '0' + month : month;
    const formattedDate = `${day}-${month}-${year}`
    return formattedDate
}