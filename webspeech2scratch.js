(function(ext) {
    var ws;
    var when_received = false;
    var speech = '';

    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.connect = function() {
      ws = new WebSocket('ws://localhost:8080');
      ws.onmessage = function(evt) {
        data = JSON.parse(evt.data);
        if (data.command == 'speech') {
          speech = data.speech;
          when_received = true;
        }
      }
    }

    ext.when_received = function() {
      if (when_received) {
        when_received = false;
        return true;
      }
      return false;
    }

    ext.speech = function() {
      return speech;
    }

    var lang = ((navigator.language || navigator.userLanguage) == 'ja') ? 'ja' : 'en';
    var locale = {
        ja: {
            connect: '接続する',
            when_received: '音声を受け取ったとき',
            speech: '音声'
        },
        en: {
            connect: 'connect',
            when_received: 'when received',
            speech: 'speech'
        },
    }

    var descriptor = {
        blocks: [
            [' ', locale[lang].connect, 'connect'],
            ['h', locale[lang].when_received, 'when_received'],
            ['r', locale[lang].speech, 'speech']
        ]
    };

    ScratchExtensions.register('WebSpeech2Scratch', descriptor, ext);
})({});
