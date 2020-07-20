const state = {
    availableDice: [
        {
            id: 1,
            name: 'D4',
            category: 'basic',
            text: false,
            sides: 4,
            animation: 'swing',
            icon: 'd4'
        },
        {
            id: 2,
            name: 'D6',
            category: 'basic',
            text: false,
            sides: 6,
            animation: 'swing',
            icon: 'd6'
        },
        {
            id: 3,
            name: 'D8',
            category: 'basic',
            text: false,
            sides: 8,
            animation: 'swing',
            icon: 'd8'
        },
        {
            id: 4,
            name: 'D10',
            category: 'basic',
            text: false,
            sides: 10,
            animation: 'swing',
            icon: 'd10'
        },
        {
            id: 5,
            name: 'D12',
            category: 'basic',
            text: false,
            sides: 12,
            animation: 'swing',
            icon: 'd12'
        },
        {
            id: 6,
            name: 'D20',
            category: 'basic',
            text: false,
            sides: 20,
            animation: 'swing',
            icon: 'd20'
        },
        {
            id: 7,
            name: 'D100',
            code: ['%', 'd%'],
            category: 'basic',
            text: false,
            sides: 100,
            animation: 'swing',
            icon: 'd100'
        },
        {
            id: 8,
            name: 'Fudge',
            code: ['f', 'df'],
            category: 'advanced',
            text: true,
            sides: ['-', '-', '', '', '+', '+'],
            values: [-1, -1, 0, 0, 1, 1],
            animation: 'swing',
            icon: 'fudge'
        },
        {
            id: 9,
            name: 'Coin',
            category: 'advanced',
            text: true,
            mods: '>4',
            sides: ['ra-moon-sun', '1'],
            values: [0, 1],
            animation: 'swing',
            icon: 'coin'
        }
    ]
}

const getters = {
    getAvailableDice: state => state.availableDice,
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