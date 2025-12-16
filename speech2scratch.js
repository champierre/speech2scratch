(function(Scratch) {
  'use strict';

  class Speech2Scratch {
    constructor() {
      this.speech = '';
      this.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    }

    getInfo() {
      return {
        id: 'speech2scratch',
        name: 'Speech2Scratch',
        blocks: [
          {
            opcode: 'startRecognition',
            blockType: Scratch.BlockType.COMMAND,
            text: '音声認識開始'
          },
          {
            opcode: 'getSpeech',
            blockType: Scratch.BlockType.REPORTER,
            text: '音声'
          }
        ]
      };
    }

    startRecognition() {
      if (!this.SpeechRecognition) {
        console.error('Speech Recognition API is not supported in this browser');
        this.speech = 'エラー: ブラウザが対応していません';
        return;
      }

      const recognition = new this.SpeechRecognition();
      recognition.lang = 'ja-JP';
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        if (event.results && event.results[0] && event.results[0][0]) {
          this.speech = event.results[0][0].transcript;
          console.log('認識結果:', this.speech);
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        if (event.error === 'not-allowed') {
          this.speech = 'マイクが許可されていません';
          console.warn('マイクの使用許可が必要です。ブラウザでマイクへのアクセスを許可してください。');
        } else if (event.error === 'no-speech') {
          this.speech = '音声が認識されませんでした';
        } else if (event.error === 'aborted') {
          this.speech = '音声認識が中断されました';
        } else if (event.error === 'network') {
          this.speech = 'ネットワークエラー';
        } else {
          this.speech = 'エラー: ' + event.error;
        }
      };

      recognition.onend = () => {
        console.log('音声認識終了');
      };

      this.speech = '認識中...';

      try {
        recognition.start();
        console.log('音声認識を開始しました');
      } catch (error) {
        console.error('Failed to start recognition:', error);
        this.speech = 'エラー: 音声認識の開始に失敗しました';
      }
    }

    getSpeech() {
      return this.speech;
    }
  }

  Scratch.extensions.register(new Speech2Scratch());
})(Scratch);
