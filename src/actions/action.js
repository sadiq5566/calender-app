

// export const handleAddEvent = (data) => {
//     // console.log(data)
//     return {
//         type: "add_event",
//         payLoad: {
//             data: data,
//         }
//     }
// }



export const handleFetchData = (data) => {
    // console.log(data)
    return {
        type: "fetch-data",
        payLoad: {
            data: data,
        }
    }
}