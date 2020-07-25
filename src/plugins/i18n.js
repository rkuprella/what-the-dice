import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        whatTheDice: 'What the Dice',
        enterDiceCode: 'Enter Dice Code',
        rollTheDice: 'Roll',
        joinRoom: 'Join a Room',
        switchDiceBags: 'Switch or manage your dice bags',
        createCharacterSheetIntro: 'Create your character sheet and roll with mods',
        joinRoomIntro: 'Roll and chat with other players'
    },
    'de': {
        whatTheDice: 'What the Dice',
        enterDiceCode: 'Dicecode eingeben',
        rollTheDice: 'Würfeln',
        joinRoom: 'Raum beitreten',
        switchDiceBags: 'Würfelbecher auswählen oder bearbeiten',
        createCharacterSheetIntro: 'Erstelle einen Charakterbogen und füge Mods zu Deinen Würfen hinzu',
        joinRoomIntro: 'Mit anderen Spielern würfeln und chatten'
    }
};

const i18n = new VueI18n({
    locale: 'en',  
    fallbackLocale: 'de',
    messages,
});

export default i18n