const state = {
    theme: 'light',
    showMenu: false,
    allOptions: false,
    soundOn: true,
    showSettings: false,
    showSideBarOnTop: false,
    currentRoom: null,
    

    leftMacroSlotList: [

    ],
    rightMacroSlotList: [
        {
            id: '23123',
            diceCode: 'D12+2D20|8D6+4',
            icon: 'axe',
            color: 'yellow'
        },
        {
            id: 'asd',
            diceCode: 'D12+2D20|8D6+4',
            icon: 'fa-star',
            color: 'blue'
        },
        {
            id: 'vasd',
            diceCode: 'D12+2D20|8D6+4',
            icon: 'brutal-helm',
            color: 'blue'
        },
        {
            id: '213',
            diceCode: 'D12+2D20|8D6+4',
            icon: 'axe',
            color: 'red'
        },
        {
            id: 'fvas',
            diceCode: 'D12+2D20|8D6+4',
            icon: 'troll',
            color: 'green'
        },
        {
            id: 'sdss',
            diceCode: 'D20+4',
            icon: 'barrel',
            color: 'basic'
        }
    ]
}

const getters = {
    getTheme: state => state.theme,
    getCurrentRoom: state => state.currentRoom,
    isMenuOpen: state => state.showMenu,
    isAllOptionsActive: state => state.allOptions,
    isSettingsOpen: state => state.showSettings,
    isSoundOn: state => state.soundOn,
    isSideBarOnTopActive: state => state.showSideBarOnTop,
    getLeftMacroSlotList: state => state.leftMacroSlotList,
    getRightMacroSlotList: state => state.rightMacroSlotList,
    
}

const mutations = {
    TOGGLE_THEME: (state) => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem("theme", state.theme);
    },
    TOGGLE_MENU: (state) => {
        state.showMenu = !state.showMenu;
    },
    TOGGLE_ALL_OPTIONS: (state) => {
        state.allOptions = !state.allOptions;
    },
    CLOSE_MENU: (state) => {
        state.showMenu = false;
    },
    TOGGLE_SETTINGS: (state) => {
        state.showSettings = !state.showSettings;
    },
    CLOSE_SETTINGS: (state) => {
        state.showSettings = false;
    },
    TOGGLE_SIDEBARONTOP: (state) => {
        state.showSideBarOnTop = !state.showSideBarOnTop;
    },
    SET_CURRENT_ROOM: (state, payload) => {
        state.currentRoom = payload
    },
    
}

const actions = {
    toggleTheme({ commit }) {
        commit('TOGGLE_THEME')
    },
    toggleMenu({ commit }) {
        commit('TOGGLE_MENU')
    },
    toggleAllOptions({ commit }) {
        commit('TOGGLE_ALL_OPTIONS')
    },
    closeMenu({ commit }) {
        commit('CLOSE_MENU')
    },
    toggleSettings({ commit }) {
        commit('TOGGLE_SETTINGS')
    },
    closeSettings({ commit }) {
        commit('CLOSE_SETTINGS')
    },
    toggleSideBarOnTop({ commit }) {
        commit('TOGGLE_SIDEBARONTOP')
    },
    setCurrentRoom({ commit }, payload) {
        commit('SET_CURRENT_ROOM', payload)
    },
    
}

export default {
    state,
    getters,
    mutations,
    actions
}