import axios from 'axios'


const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_DOMAIN,
  timeout: 20000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.response.use(
  (response) => {
    if (!response.data.success) {
      return Promise.reject(
        new Error(response.data),
      )
    }

    return response
  },
  (error) => {
    // if (
    //   error.response.status < 500 &&
    //   error.response.status !== 404 &&
    //   error.response
    // ) {
    //   if (error.response?.data?.status === 0) {
    //     return Promise.reject(
    //       new Error(error.response.data.message || DEFAULT_ERROR_MESSAGE),
    //     )
    //   } else {
    //     return Promise.resolve(error.response)
    //   }
    // }

    // return Promise.reject(new Error(error.message))

    if (error.response) {
      return Promise.resolve(error.response)
    }

    return Promise.reject(error)
  },
)

// axiosInstance.interceptors.request.use((config) => {
//   if (
//     !(config.headers['Content-Type'] as string)?.includes('multipart/form-data')
//   ) {
//     config.data = config.data
//   }

//   config.params = config.params
//   return config
// })

export default axiosInstance
