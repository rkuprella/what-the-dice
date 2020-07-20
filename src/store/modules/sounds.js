const state = {
    sounds: [
        {
            id: '23123',
            name: 'axe-swing',
            soundFile: 'http://soundbible.com/mp3/Cinematic-Sound-Colin_Enger-1443808423.mp3'
        },
        {
            id: 'asd',
            name: 'axe-2',
            soundFile: 'http://soundbible.com/mp3/fire_bow_sound-mike-koenig.mp3'
        },
    ]
}

const getters = {
    getSound(state) {
        return (sound) => {
          return state.sounds.find((item) => {
            return item.name === sound.toLowerCase()
          })
        }
    }
}

const mutations = {

}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}