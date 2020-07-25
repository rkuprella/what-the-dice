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
        joinRoomIntro: 'Join an online room and roll with your friends'
    },
    'de': {
        whatTheDice: 'Was zum Würfel',
        enterDiceCode: 'Dicecode eingeben',
        rollTheDice: 'Würfeln',
        joinRoom: 'Raum beitreten',
        switchDiceBags: 'Würfelbecher auswählen oder bearbeiten',
        createCharacterSheetIntro: 'Erstelle einen Charakterbogen und füge Mods zu Deinen Würfen hinzu',
        joinRoomIntro: 'Raum beitreten und online mit anderen Spielern würfeln'
    }
};

const i18n = new VueI18n({
    locale: 'en',  
    fallbackLocale: 'de',
    messages,
});

export default i18n