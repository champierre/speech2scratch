const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');

class Scratch3Speech2Scratch {
    constructor (runtime) {
        this.runtime = runtime;
        this.speech = '';
    }

    getInfo () {
        return {
            id: 'speech2scratch',
            name: 'Speech2Scratch',
            blocks: [
                {
                    opcode: 'startRecognition',
                    blockType: BlockType.COMMAND,
                    text: '音声認識開始'
                },
                {
                    opcode: 'getSpeech',
                    blockType: BlockType.REPORTER,
                    text: '音声'
                }
            ],
            menus: {
            }
        };
    }

    startRecognition () {
        SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.onresult = (event) => {
            this.speech = event.results[0][0].transcript;
        }
        recognition.start();
    }

    getSpeech() {
        return this.speech;
    }
}

module.exports = Scratch3Speech2Scratch;
