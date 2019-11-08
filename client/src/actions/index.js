export {
  logIn,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  logOut,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  loggedIn,
  LOGGEDIN_START,
  LOGGEDIN_SUCCESS,
  LOGGEDIN_FAILURE

} from './authenticationActions.js';

export {
  getStudentTable,
  FETCH_STUDENTS_START,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE
} from './adminDashboardActions/studentTableActions.js';

export {
  toggleEditComponent,
  getStudentById,
  FETCH_STUDENTBYID_START,
  FETCH_STUDENTBYID_SUCCESS,
  FETCH_STUDENTBYID_FAILURE,

  editStudentById,
  EDIT_STUDENTBYID_START,
  EDIT_STUDENTBYID_SUCCESS,
  EDIT_STUDENTBYID_FAILURE,
  
  deleteStudentById,
  DELETE_STUDENTBYID_START,
  DELETE_STUDENTBYID_SUCCESS,
  DELETE_STUDENTBYID_FAILURE,
} from './adminDashboardActions/studentByIdAction.js'

export {
  getParentTable,
  FETCH_PARENTS_START,
  FETCH_PARENTS_SUCCESS,
  FETCH_PARENTS_FAILURE,

  getParentById,
  FETCH_PARENTBYID_START,
  FETCH_PARENTBYID_SUCCESS,
  FETCH_PARENTBYID_FAILURE,

  toggleEditParent,
  editParentById,
  EDIT_PARENTBYID_START,
  EDIT_PARENTBYID_SUCCESS,
  EDIT_PARENTBYID_FAILURE,
} from './adminDashboardActions/parentAction.js'

export {
  getStaffTable,
  FETCH_STAFF_START,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE,

  getStaffById,
  FETCH_STAFFBYID_START,
  FETCH_STAFFBYID_SUCCESS,
  FETCH_STAFFBYID_FAILURE,
  
  editStaffById,
  toggleStaffEditComponent,
  EDIT_STAFFBYID_START,
  EDIT_STAFFBYID_SUCCESS,
  EDIT_STAFFBYID_FAILURE,

  addStaff,
  ADD_STAFF_START,
  ADD_STAFF_SUCCESS,
  ADD_STAFF_FAILURE
} from './adminDashboardActions/staffActions.js';


export {
  getStudentProgress,
  FETCH_STUDENTPROGESS_START,
  FETCH_STUDENTPROGESS_SUCCESS,
  FETCH_STUDENTPROGESS_FAILURE
} from './adminDashboardActions/studentProgressActions.js'



export {
  getStudentCourses,
  FETCH_STUDENTCOURSES_START,
  FETCH_STUDENTCOURSES_SUCCESS,
  FETCH_STUDENTCOURSES_FAILURE
} from './adminDashboardActions/studentCourseActions.js';

export {
  getCourseTable,
  FETCH_COURSES_START,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,

  getCourseById,
  FETCH_COURSEBYID_START,
  FETCH_COURSEBYID_SUCCESS,
  FETCH_COURSEBYID_FAILURE,

  toggleEditCourse,
  editCouseById,
  EDIT_COURSEBYID_START,
  EDIT_COURSEBYID_SUCCESS,
  EDIT_COURSEBYID_FAILURE,
} from './adminDashboardActions/courseAction.js';


export {
  getStaffCourses,
  FETCH_STAFFCOURSES_START,
  FETCH_STAFFCOURSES_SUCCESS,
  FETCH_STAFFCOURSES_FAILURE,

  staffGetStudentsByCourseID,
  FETCH_STUDENTSBYCOURSEID_START,
  FETCH_STUDENTSBYCOURSEID_SUCCESS,
  FETCH_STUDENTSBYCOURSEID_FAILURE
} from './adminDashboardActions/staffCourseActions.js';