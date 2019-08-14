/**
 * function que recibe dos parametros, state  y action
 * al ser ejecutada por primera vez se inicializa con initialState
 */

//tipo de acciones, convención de nombre para evitar colisiones modulo/accion

const INCREMENTAR   = 'CONTADOR/INCREMENTAR'
const DECREMENTAR   = 'CONTADOR/DECREMENTAR'
const SETEAR        = 'CONTADOR/SETEAR'
/**
 * retorna un obj con la propiedad de type
 * acciones a despachar convencion de nombre minusculas
 */
export const incrementar = () => ({
    type: INCREMENTAR,
})
export const decrementar = () => ({
    type: DECREMENTAR,
})
/**
 * función que setea el Nº que deseamos, recibe un payload
 * si es que se desea adjuntar datos en las aciones a despachar se agrega payload
 */
//para setear el numero que queramos,
export const setear = (payload) => ({
    type: SETEAR,
    payload,
})
const initialState = 0

export default function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case INCREMENTAR:
            return state + 1

        case DECREMENTAR:
            return state - 1

        case SETEAR:
            return action.payload
        default:
            return state
    }
}