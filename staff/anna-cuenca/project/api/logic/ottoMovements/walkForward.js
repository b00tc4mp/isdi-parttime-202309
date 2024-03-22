import pkg from 'johnny-five'
const { Board, Servo, LCD, Pin } = pkg

import { SequenceMovement } from '../../data/models.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1

const walkForward = (ottoInstance) => {
    return new Promise((resolve, reject) => {
        if (!ottoInstance) {
            reject(new Error("Otto is not initialized"))
            return
        }
        ottoInstance.restartOscillators()
        ottoInstance.home()
        ottoInstance.walk(4, 2000, FORWARD).then(() => {
            console.log('Otto walked!')
            resolve()
        }).catch(error => {
            console.error('Otto failed to walk:', error)
            reject(error)
        })
    })
}

export default walkForward