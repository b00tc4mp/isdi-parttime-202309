
# SYNQPLE App (v.1)

<br>

[![synqple-logo-version-white.png](https://i.postimg.cc/X7VdJ4QX/synqple-logo-version-white.png)](https://postimg.cc/9znrg53j)



## Intro

Synqple is a web application, whose main functionality is to synchronize live music, in an analogue way, that is to say, without automatic synchronization. 

It will also allow the user to learn, understand and practice the synchronization of 2 or more sounds, with the possibility of making a song or a live Remix, from one or more mobile devices synchronized simultaneously and connected to audio devices (speakers, amplifiers, bluetooth speakers...).

Synqple brings a quick and easy way to synchronize audio, through an audio player, metronome, speed control, tap tempo, equalization and effects, which allow you to play samples and loops to synchronize them with any external audio.

***(Synqple in its version 1, comes by default with a metronome, 17 Samples, 3 musical styles (breaks, reggae, house), 3 complete harmonies Gmin, Emin, Bmin, these divided in 6 channels: drums, bass, guitar/piano, synth, percs, vocals)**.

![](https://media.giphy.com/media/ku5EcFe4PNGWA/giphy.gif)

## Functional Description

Audio Player, Metronome, Tap Tempo, BPM Control, Sampler, EQ and AudioFX

## Use Cases

Registered Users: 

- Login / Register 
- Profile - Retrieve / ChangeCredentials / Delete User 
- Play audio (metronome, samples)
- Tap tempo to set BPM manually
- Adjust BPM (increase/decrease)
- Adjust beat (push forward or backward)
- Play/stop metronome
- Play/stop samples 
- Mute metronome and samples
- Adjust metronome and sample volume
- Display and navigate between sample folders
- Play/Stop individual samples from the sample folder
- Save samples as favourites
- Streaming Samples by URL (AWS)



-----------


## Technical Description

- Frontend: HTML, CSS, React, Vite, Tailwind
- Audio: Tone.js, Web Audio API
- Backend: Node.js, Express
- Database: MongoDB, AWS
- Test/specs: Mocha + Chai
- Deploy: Netlify (Frontend) + Render(Backend)
- Design: Figma, Illustrator
- Versions Control: Git

----------------

### Info on JavaScript Audio API

- The Web Audio API is an application programming interface (API) that allows developers to manipulate and control audio on the web using JavaScript. With this API, you can create and manipulate sounds directly in the browser, apply sound effects, create audio streams and much more. It is a powerful tool for creating interactive web applications and multimedia experiences.

- Tone.js:** A JavaScript library for creating music and sound on the web. Tone.js simplifies the process of working with audio in the browser by providing an easy-to-use API for audio synthesis, scheduling music events, creating sound effects and more. It is especially useful for developers who want to create interactive music applications, games or immersive sound experiences on the web.

-------------------------------------------


## Data Model

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

### Home

- The home component renders:


### Logout

- Logout -- Redirects to Loginpage


### Settings

1. Profile

- Change Email
- Change Password
- Delete User --- Redirects to Loginpage
- User Image (Upload/Delete) (next version)
- Logout (next version)

2. Languages (next version)

3. Audio Settings (next version)

4. Help Center (next version)

4. Some more options... (next version)


### Samples Folder

- Samples/Loops 
- User toggle Favs
- Favs


### synqpleTool (audio component)

- Metronome and sample playback (play/stop/mute buttons)
- metronome volume control (input range)
- TAP to mark the tempo (TAP button)
- Display for displaying BPM (input number)
- BPM setting control (+/- buttons / input range)
- Control of metronome and/or Samples/Loops synchronism (<|||| / |||> buttons)
- Volume control of Samples/Loops (input range)
- Display of sample/loop folder and possibility to browse in list mode 


-----------------------------------------------

### APP URL CORE CODE

<br>

<a href="https://postimg.cc/LJy5rrwS">
    <img src="https://i.postimg.cc/QMD7WDqF/IMG-4770.jpg" width="500" alt="IMG-4770">
</a>


------------------------

#### Use Description


Move through the app, and discover its sections and functionalities,

once in the synqple(audio tool) section I recommend you to choose the first sample to test "Drum_1_Breaks", and follow the steps:

**(the BPM speed control is for both the metronome and the samples, the 2 sounds are started synchronously)** ** 1.


- 1. **Audio playback (metronome):** hit the play button and the metronome will play at a default speed of 120 bpm, also the sample just started playing **(only it is muted by default, you have to unmute it manually, but that can still wait)** you can change the bpm speed with the increase/decrease bpm buttons or with the tap to set the speed.

- 2. **Synchronisation:** For synchronisation you must use the TAP(synq), with 4 beats at the rhythm (of the music or instrument to be synchronised), marked from the beginning of the beat or loop to the end, 4 beats because synqple is intended for 4x4 music.

You will see that after 4 beats the value of the bpm control will change, showing the detected bpm. It is up to the user how accurate the sync is, for fine tuning use the bpm increment/decrement buttons in one unit and in the input range you can set it to 0.5. 

The beat nudge -/+ (moving the sample loop a little forward or backward) plays an essential role here because of the asynchrony or delay and the way synqple forces you to fully synchronise aurally, the beat nudge is essential in the synchronisation without it nothing could be synchronised.

- 3. **Audio playback (samples):** the idea is that the metronome is always completely synchronised first, once this is synchronised and it is re-checked several seconds aurally, the sample is unmuted.

- 4. **Sample volume control:** once the sample has been unmuted, the volume can be adjusted with the sample volume input range to achieve a balance between the music or instrument to be synchronised and the sample.

- 5. **Other functionalities:** You can change sample/loop by browsing the sample folder or using the favourites. You can also mute and unmute the metronome and samples independently. It has an allpass filter to play with the mixes. It also has a loop length that allows you to control the length of the sample loop, another fun way to play with the samples once they are synced.


-------------------


### Use Example:

- A song is playing, a musician or a band is playing and Synqple will allow you to:  

1. Synchronise a metronome manually.

2. Once the metronome is synced, you can mute it and launch samples/loops at the same speed as the metronome (samples/loops -> drums/synth/vocals...) from your smartphone or other device. 

3. Possibility of audio playback from a sound system parallel to the one that plays the song, musician or band or from the same sound system, that will depend on the possibility of audio connection.

### Another use  example (only possible React Native version): 

- Synqple can be used as a CD player or any other kind of Deejay player: 

1. Connect 2 devices to a DJ Mixer via audio (auxiliary cable).

2. Prepare your playlist to play on your device and make it accessible to Synqple.

3. Now you can play your tracks from your device or from another device.

4. You can proceed to use it like any other deejay audio player, as it has pitch, beat nudge and playback control, allowing you to mix 2 songs or as many as you want (with 2 or more devices connected analog to a djmixer with enough channels).


------------------------

### Upcoming Releases

v.1.1


Prelisten
- Switch between Pre-listening and Playback (L/R double false stereo)

FX
- Delay
- Reverb
- PitchShift

UI
- New styles

Test
- Start Frontend testing with Vitest
- Backend making more specs

New logics
- Profile (imageUpload, deleteImage...)
- Settings (changeLanguage,...)
- Light/Dark mode toggle
- Audio quality (low/high)
- Equalizer
- Audio channels (at least 2 more)

Native App
- Ionic Framework to create a cross-platform App
- Being able to play whole songs with the same controls as for samples
- To be able to have a native folder for the songs and navigate between them

-------------------------------



## Some anecdotes

- Web Audio API is disabled by IOS, it doesn't play as media audio but as notification audio, it has brought me a lot of headache, not only to me but to many developers from what I've seen in Stack Overflow, Github and the web in general.
This means if you have sun iphonr and you have the mute switch on the audio API sound doesn't play, you have to disable mute mode.
***Solution:** set it to sleep or do not disturb mode, so that while playing with synqple you are not disturbed by notification sounds.

This problem is not like this on **Android**, on android it also works in silent mode.

-------------------------------------------

- Information search and help:** essential has been the Tone.js documentation, starting audio tests with a simple HTML and a script, but for agility and learning I got a lot of help from Chat GPT.

The partners I've had in the bootcamp also play an important role here, there has been a lot of companionship and willingness, it's been great to work with people so cool and eager to learn.

The teacher, Manu is a teacher with a lot of knowledge in the subject and often quite demanding, but with a good vibe, always willing to help and eager to teach new things.

The assistant teacher, Flors, helped me in the last moments before the presentation, she was very helpful to polish the last details, she took out some doubts and gave me good advice for the presentation. 
(Essential for future bootcamps, to have an assistant teacher in my opinion, from the first to the last minute).