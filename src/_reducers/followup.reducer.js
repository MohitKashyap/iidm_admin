const initialState = {
    anchor: 'left',
    followup: [],
    open: false,
    id: '',
    queryId: '',
    followupDate: '',
    comment: '',
    status: ''
};


export function followup(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_FOLLOWUP':
            return {
                ...state,
                followup: action.followup
            };
        case 'FOLLOWUP_DETAIL':
            return {
                ...state,
                id: action.id,
                queryId: action.queryId,
                followupDate: action.followupDate,
                comment: action.comment,
                status: action.status
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