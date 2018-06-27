
// const elationCreds = {
//   clientID: '4uF9RQdy0QKiwJhZOZRWRehTUEwXB1cTzvWmGyn5',
//   clientSecret: 'vQqtYmS3jrWx79mcLHeOCTgyyVLEWTJ7awsVLzTi6RTvfShFs1ZiYZcKWGiog7WLFnK0gcTimyFz97ztdteBYIcNcOOLXVzga1NlTBzEKNeYvycaqCogLUrw2fU5l67q',
//   username: '346-54@api.elationemr.com',
//   password: 'b8364fc5a817f402683072d5db93036c',
// }

// const testDoctor = {
//   id: 87708401666,
//   first_name: 'Test',
//   last_name: 'Doctor',
//   npi: null,
//   specialty: null,
//   user_id: 345,
// }

// const { clientID, clientSecret, username, password } = elationCreds

// const authStringBuffer = Buffer.from(
//   `${clientID}:${clientSecret}`
// ).toString('base64')

// const authHeader = `Basic ${authStringBuffer}`

// const URL = 'https://sandbox.elationemr.com/api/2.0/'

// const api = axios.create({
//   baseURL: URL,
//   headers: {
//     Authorization: authHeader,
//     'content-type': 'application/x-www-form-urlencoded'
//   },
// })

// const qstring = `grant_type=password&username=${username}&password=${password}`
// // JSON.stringify({
// //   grant_type: 'password',
// //   username,
// //   password,
// // })

// const patient = QueryString.stringify({
//   first_name: 'julien',
//   last_name: 'cru',
//   dob: '1990-04-20',
//   sex: 'Male',
//   primary_physician: 87708401666,
//   caregiver_practice: 87703879684,
// })

// const address = {
//   address_line1: '11441 sw 64 st',
// }

// const patientQstring = `${patient}&address[address_line1]=${address.address_line1}`

// const getAuthToken = async () => api.post('/oauth2/token/', qstring)
// const createPatient = async (token) => api
//   .post('/patients/', patient, { headers: { Authorization: `Bearer ${token}`} })

// getAuthToken()
//   .then(async (res) => {
//     const { data } = res
//     const patients = await createPatient(data.access_token)
//     console.log(patients.data)
//   })
//   .catch((err) => console.log(err))
