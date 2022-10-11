export type Action = {type: "ADD_TOKEN"|"ADD_ID"; payload: string}

export const addToken = (token: string): Action => ({
    type: 'ADD_TOKEN',
    payload: token
})
