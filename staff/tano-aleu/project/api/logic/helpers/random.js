import mongoose from "mongoose";

function name() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return `name-${Math.random()}`;
}

function email() {
    return `e-${Math.random()}@mail.com`;
}

function password() {
    return `password-${Math.random()}`;
}

const { ObjectId } = mongoose.Types

function id() {
    return new ObjectId().toString()
}

function sampleName() {
    return `sample-${Math.random()}`;
}

function filePath() {
    return `/path/to/sample-${Math.random()}.wav`;
}

function sampleType() {
    const types = ['drum', 'piano', 'bass', 'synth', 'vocal'];
    return types[Math.floor(Math.random() * types.length)];
}

function bpm() {
    return Math.floor(Math.random() * 140) + 60; // BPM entre 60 y 200
}

function duration() {
    return Math.random() * 4; // Duración entre 0 y 4 segundos
}

const random = {
    name,
    email,
    password,
    id,
    sampleName,
    filePath,
    sampleType,
    bpm,
    duration
};

export default random;
