const initialState = {
    anchor: 'left',
    query: [],
    open: false,
    id: '',
    name: '',
    mobile: '',
    qualification: '',
    address: '',
    dob: '',
    email: '',
    gender: ''
};

export function query(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_QUERY':
            return {
                ...state,
                query: action.query
            };
        case 'QUERY_DETAIL':
            return {
                ...state,
                id: action.id,
                name: action.name,
                mobile: action.mobile,
                qualification: action.qualification,
                address: action.address,
                dob: action.dob,
                email: action.email,
                gender: action.gender,
                experience: action.experience,
                organisation: action.organisation,
                service: action.service,
                course: action.course
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };
        default:
            return state
    }
}