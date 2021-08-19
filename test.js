const mockDate = '2021-08-12T22:53:10.816Z'

 function ConvertDate(date) {
    const localDate = new Date(date).toLocaleDateString()
    return localDate
}

console.log(ConvertDate())