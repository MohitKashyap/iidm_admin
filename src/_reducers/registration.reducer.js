const initialState = {
    anchor: 'left',
    registration: [],
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


export function registration(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_REGISTRATION':
            return {
                ...state,
                registration: action.registration
            };
        case 'REGISTRATION_DETAIL':
            return {
                ...state,
                id: action.id,
                name: action.name,
                mobile: action.mobile,
                qualification: action.qualification,
                address: action.address,
                dob: action.dob,
                email: action.email,
                gender: action.gender
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