export const initialState = {
  PatientUser: window.localStorage.getItem('patient_user'),
  HospitalUser : window.localStorage.getItem('hospital_user'),
  DoctorUser : window.localStorage.getItem('doctor_user')
};

export const actionTypes = {
  SET_PATIENT: "SET_PATIENT",
  SET_HOSPITAL : "SET_HOSPITAL",
  SET_DOCTOR : "SET_DOCTOR"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_PATIENT:
      window.localStorage.setItem('patient_user',action.PatientUser);
      return {
        ...state,
        PatientUser: action.PatientUser,
      };
    case actionTypes.SET_HOSPITAL:
      window.localStorage.setItem('hospital_user',action.HospitalUser);
      return {
        ...state,
        HospitalUser:action.HospitalUser,
      };

      case actionTypes.SET_DOCTOR:
      window.localStorage.setItem('doctor_user',action.DoctorUser);
      return {
        ...state,
        DoctorUser:action.DoctorUser,
      };

    default:
      return state;
  }
};

export default reducer;
