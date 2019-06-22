import { queryService } from '../_services';
import { history } from '../_helpers';

export const queryAction = {
    getQuery,
    getQueryById,
    onChangeProps,
    editQueryInfo,
    editCourseInfo,
    createQuery,
    deleteQueryById
};
function getQuery() {
    return dispatch => {
        let apiEndpoint = 'query';
        queryService.get(apiEndpoint)
            .then((response) => {
                console.log(response);
                dispatch(changeQueryList(response.data.data));
            }).catch((err) => {
                console.log("Error");
                console.log(err);
            })
    };
}

function createQuery(payload, callback) {
    return dispatch => {
        let apiEndpoint = 'query/';
        queryService.post(apiEndpoint, payload)
            .then((response) => {
                dispatch(createQueryInfo());
                // history.push('/register');
                callback();
            })
    }
}

function getQueryById(id) {

    return dispatch => {
        let apiEndpoint = 'query/' + id;
        queryService.get(apiEndpoint)
            .then((response) => {
                dispatch(editQueryDetails(response.data.data));
            })
    };
}

function onChangeProps(props, value) {
    return dispatch => {
        dispatch(handleOnChangeProps(props, value));
    }
}

function editQueryInfo(id, payload) {
    return dispatch => {
        let apiEndpoint = 'query/' + id;
        queryService.put(apiEndpoint, payload)
            .then((response) => {
                dispatch(updatedQueryInfo());
                history.push('/queries');
            })
    }
}

function editCourseInfo(payload) {
    return dispatch => {
        let apiEndpoint = 'query/updateCourse/' + payload.id;
        queryService.put(apiEndpoint, payload)
            .then((response) => {
                if (response) {
                    dispatch(updatedQueryInfo());
                    history.push('/queries');
                }
            })
    }
}
function deleteQueryById(id) {
    return dispatch => {
        let apiEndpoint = 'query/' + id;
        queryService.deleteDetail(apiEndpoint)
            .then((response) => {
                dispatch(deleteQueryDetails());
                dispatch(queryAction.getQuery());
            })
    };
}

export function changeQueryList(registration) {
    return {
        type: "FETECHED_ALL_REGISTRATION",
        registration: registration
    }
}

export function handleOnChangeProps(props, value) {
    return {
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editQueryDetails(registration) {
    return {
        type: "REGISTRATION_DETAIL",
        id: registration._id,
        name: registration.name,
        mobile: registration.mobile,
        email: registration.email,
        address: registration.address,
        dob: registration.dob,
        gender: registration.gender,
        qualification: registration.qualification,
        working: registration.working,
        experience: registration.experience,
        organisation: registration.organisation,
        service: registration.service,
        CreatedOn: registration.createdAt
    }
}

export function updatedQueryInfo() {
    return {
        type: "QUERY_UPDATED"
    }
}

export function createQueryInfo() {
    return {
        type: "QUERY_CREATED_SUCCESSFULLY"
    }
}

export function deleteQueryDetails() {
    return {
        type: "DELETED_REGISTRATION_DETAILS"
    }
}