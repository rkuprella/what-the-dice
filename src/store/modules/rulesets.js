const state = {
    currentRuleset: 'What the Dice',
    rulesets: [
        {
            id: 1,
            name: 'What the Dice',
            icon: 'wtd-icon',
            diceList: ['D6', 'D20', 'Fudge', 'Coin']
        },
        {
            id: 2,
            name: 'D&D 5e',
            icon: 'dandd',
            diceList: ['D4', 'D6', 'D8', 'D10', 'D12', 'D20', 'D100']
        },
    ],
}

const getters = {
    getRulesets: state => state.rulesets,
    getNameOfCurrentRuleset: state => state.currentRuleset,
    getCurrentRuleset(state) {
        return state.rulesets.find((item) => {
        return item.name === state.currentRuleset
        })
    },
    getNamesOfRulesets(state) {
        return state.rulesets.map (item => item.name)
    },
}

const mutations = {
    SET_CURRENT_RULESET: (state, payload) => {
        state.currentRuleset = payload
    },
}

const actions = {
    setCurrentRuleset({ dispatch, commit, getters }, payload) {
        commit('SET_CURRENT_RULESET', payload)
        dispatch('setCurrentDiceFromRuleset', getters.getCurrentRuleset.diceList, {root:true})
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}