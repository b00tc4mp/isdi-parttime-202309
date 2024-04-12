
# SYNQPLE App (v.1)

<br>

[![synqple-logo-version-white.png](https://i.postimg.cc/X7VdJ4QX/synqple-logo-version-white.png)](https://postimg.cc/9znrg53j)



## Intro

Synqple is a web application, whose main functionality is to synchronize live music, in an analogue way, i.e. without automatic synchronization. 

It will also allow the user to learn, understand and practice the synchronization of 2 or more sounds, with the possibility of making a song or a live Remix, from one or more mobile devices synchronized simultaneously and connected to audio devices (speakers, amplifiers, bluetooth speakers...).

Synqple brings a quick and easy way to synchronize audio, through an audio player, metronome, speed control, tap tempo, EQ and effects, that allow to play samples, loops and external audio in a synchronized way.

***(comes by default with a metronome, 17 Samples, 3 musical styles (breaks, reggae, house), 3 full harmonies Gmin, Emin, Bmin, these divided into 6 channels: drums, bass, guitar/piano, synth, percs, vocals)**.

![](https://media.giphy.com/media/ku5EcFe4PNGWA/giphy.gif)

# Functional Description

Audio Player, Metronome, Tap Tempo, Sampler, EQ and AudioFX

## Use Cases

Registered Users: 

- Login/Register/Retrieve/ChangeCredentials/Delete User 
- Play audio (metronome, samples)
- Tap tempo para marcar BPM manualmente
- Ajustar BPM (incrementar/decrementar)
- Reproducir/pausar/detener metrónomo
- Reproducir/pausar/detener samples 

- Mute metronome and samples
- Adjust metronome and sample volume
- View and navigate between sample folders
- Play/pause/stop individual samples
- Save samples as favourites
- Streaming Samples by URL (AWS)


-----------


### Technical Description

- Frontend: HTML, CSS, React, Vite, Tailwind
- Audio: Tone.js, Web Audio API
- Backend: Node.js, Express
- Database: MongoDB, AWS
- Test/specs: Mocha + Chai
- Deploy: Netlify (Frontend) + Render(Backend)
- Design: Figma, Illustrator

----------------


### Data Model

### User
v.1

- id (string)
- name (string)
- email (string)
- password (string)
- favSamples (array Sample.id)


### Metronome/Samples
v.1

- id (string)
- name (string)
- URL (string)
- description/type (string)
- tempo 'bpm' (number)
- length 'secs' (number)

### Samples
v.1

- id (string)
- name (string)
- URL (string)
- description/type (string)
- tempo 'bpm' (number)
- length 'secs' (number)



----------------------

### FIGMA DESIGN

#### FIGMA URL https://www.figma.com/file/RxjkP9oJMEbxvD3unDPPqz/

---------------------------------------------------------

## Pages UI

### Welcome

- Welcome 


### Login/Register

- Login
- Register


### Settings

1. Profile

- Change Email
- Change Password
- Delete User
- User Image (Upload/Delete)

2. Audio Settings

3. Logout


### Samples Folder

- Samples/Loops 
- User toggle Favs
- Favs

### Home

#### synqpleTool (audio component)
- Metronome and sample playback (play/stop/mute buttons)
- metronome volume control (input range)
- TAP to mark the tempo (TAP button)
- Display for displaying BPM (input number)
- BPM setting control (+/- buttons / input range)
- Control of metronome and/or Samples/Loops synchronism (<|||| / |||> buttons)
- Volume control of Samples/Loops (input range)
- Display of sample/loop folder and possibility to browse in list mode 


### APP URL CORE CODE

<br>

<a href="https://postimg.cc/LJy5rrwS">
    <img src="https://i.postimg.cc/QMD7WDqF/IMG-4770.jpg" width="500" alt="IMG-4770">
</a>


###### Use Description

- 1. Audio playback: first a metronome and then, once the metronome is synchronized, possibility to play samples/loops (which must be at the same BPM speed of the metronome, the speed must be global).

- 2. For the synchronisation it must have a TAP to mark the speed manually, which must be reflected in a display where it will mark the BPM, it must also have 2 buttons to be able to edit the BPM. 

- 3. It must have a play and stop control for both metronome and samples and the possibility to mute the metronome and samples.

- 4. In the case that when launching the metronome it goes asynchronous (very likely case, otherwise you should launch it again), it must have 2 buttons that allow you to move the metronome to the correct position with the first beat of the song or instrument to be synchronised with your metronome or sample/loop.

- 5. Volume control of metronome and samples

-------------------


### Example:

- A song is playing, a musician or a band is playing and Synqple will allow you to:  

1. Synchronise a metronome manually.

2. Once the metronome is synced, you can mute it and launch samples/loops at the same speed as the metronome (samples/loops -> drums/synth/vocals...) from your smartphone or other device. 

3. Possibility of audio playback from a sound system parallel to the one that plays the song, musician or band or from the same sound system, that will depend on the possibility of audio connection.

### Another example (for React Native version): 

- Synqple can be used as a CD player or any other kind of Deejay player: 

1. Connect 2 devices to a DJ Mixer via audio (auxiliary cable).

2. Prepare your playlist to play on your device and make it accessible to Synqple.

3. Now you can play your tracks from your device or from another device.

4. You can proceed to use it like any other deejay audio player, as it has pitch, beat nudge and playback control, allowing you to mix 2 songs or as many as you want (with 2 or more devices connected analog to a djmixer with enough channels).



