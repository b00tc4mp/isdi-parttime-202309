

// import dotenv from 'dotenv'
// dotenv.config()
// import mongoose from 'mongoose'
// import { expect } from 'chai'
// import bcrypt from 'bcryptjs'
// import random from './helpers/random.js'
// import crusaito from './ottoMovements/crusaito.js'
// import { operations } from './ottoMovements/operations.js'
// import { User, SequenceMovement } from '../data/models.js'
// import sinon from 'sinon'

// import pkg from 'johnny-five'
// const { Board, Servo, LCD, Pin } = pkg

// import { errors } from 'com';
// const { NotFoundError, SystemError } = errors

// describe('Board initialization', function () {
//     let boardReadyStub;

//     beforeEach(function () {
//         // Simula el evento 'ready' del Board
//         boardReadyStub = sinon.stub(Board.prototype, 'on').callsFake(function (event, callback) {
//             if (event === 'ready') {
//                 callback();
//             }
//         });
//     });

//     afterEach(function () {
//         // Restaura el stub a su comportamiento original
//         boardReadyStub.restore();
//     });

//     it('should initialize Board and trigger "ready" event', function (done) {
//         const board = new Board();

//         board.on('ready', () => {
//             // Verifica que el evento 'ready' haya sido disparado
//             expect(boardReadyStub.calledWith('ready')).to.be.true;
//             done();
//         });
//     });
// });