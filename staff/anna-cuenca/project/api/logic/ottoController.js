import pkg from 'johnny-five'
const { Board, Servos } = pkg
import { Otto } from './otto.js'

const FORWARD = 1
const BACKWARD = -1
const LEFT = 1
const RIGHT = -1


class OttoController {
    constructor() {
        this.board = new Board()
        this.otto = null

        this.board.on("ready", () => {
            this.otto = new Otto({
                leftLegPin: 2,
                rightLegPin: 3,
                leftFootPin: 4,
                rightFootPin: 5,
                board: this.board
            })

            this.otto.init()
        })
    }

    walkForward() {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }
            this.otto.restartOscillators()
            this.otto.walk(4, 2000, FORWARD).then(() => {
                console.log('Otto walked!')
                resolve()
            }).catch(error => {
                console.error('Otto failed to walk:', error)
                reject(error)
            })
        })
    }

    walkBackward() {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }
            this.otto.walkBackward(4, 2000, BACKWARD).then(() => {
                console.log('Otto walked backward!')
                resolve()
            }).catch(error => {
                console.error('Otto failed to walk backward:', error)
                reject(error)
            })
        })
    }

    stop() {
        return new Promise((resolve, reject) => {
            if (!this.otto) {
                reject(new Error("Otto is not initialized"))
                return
            }

            this.otto.stopServos()
            resolve()
        })
    }
}

export default OttoController