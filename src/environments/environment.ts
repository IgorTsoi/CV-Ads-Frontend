const BASE_API_URL = 'https://localhost:5001';

export const environment = {
  production: false,
  endpoints: {
    loginAdmin: BASE_API_URL + '/admins/login',
    loginCustomer: BASE_API_URL + '/customers/login',
    registerCustomer: BASE_API_URL + '/customers/register',
    registerAdmin: BASE_API_URL + '/admins/register',
    registerSmartDevice: BASE_API_URL + '/smartdevices/register',
    export: BASE_API_URL + '/servicedata',
    import: BASE_API_URL + '/servicedata',
    getAllSmartDevices: BASE_API_URL + '/smartdevices',
    blockSmartDevice: BASE_API_URL + '/smartdevices/{id}/block',
    resetSmartDevice: BASE_API_URL + '/smartdevices/{id}/reset'
  }
};
