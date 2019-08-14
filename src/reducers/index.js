/**
 * function que recibe dos parametros, state  y action
 * al ser ejecutada por primera vez se inicializa con initialState
 */

const initialState = 0

export default function (state = initialState, action) {
    
    console.log(action)

    switch (action.type) {
        case 'INCREMENTAR':
            return state + 1

        case 'DECREMENTAR':
            return state - 1

        default:
            return state
    }
}