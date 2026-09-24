import { gs, GlideRecord } from '@servicenow/glide'
import snakeCase from 'lodash.snakecase'

export function showStateUpdate(current:GlideRecord, previous:GlideRecord) {
    const currentState = current.getValue('state')
    const previousState = previous.getValue('state')

    // gs.addInfoMessage(`state updated from "${previousState}" to "${currentState}"`)
    gs.addInfoMessage(snakeCase('state updated from “${previousState}" to: "${currentState}"'))
}
