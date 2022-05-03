const stateDefault = {
    arrComment:[
        {name:'khai',content:'Hello Cybersoft'},
        {name:'uyen',content:'hello bc16'}
    ]
}

export const fakeBookAppReducer = (state=stateDefault,action) => {
    switch (action.type) {
        case 'ADD_COMMENT': {
            state.arrComment = [...state.arrComment,action.userComment];
            return {...state}
        }

        default : return state;
    }
}