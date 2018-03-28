# Speech2Scratch

## Requirements

- Chrome browser
- macOS High Sierra(10.13.3)

## Setup

1. Install Node.js from https://nodejs.org/ja/.

2. Download the source code of Speech2Scratch from https://github.com/champierre/speech2scratch.

3. Unzip the ZIP file.

	```
	% unzip speech2scratch-master.zip
	```

4. Install required packages.

	```
	% mv speech2scratch-master speech2scratch
	% cd speech2scratch
	% npm install
	```

## How to use

1. Start Speech2Scratch Helper.

	```
	% node speech2scratch_helper.js
	```

2. Open [Speech2Scratch](https://champierre.github.io/speech2scratch/) page.

3. Open [ScratchX](http://scratchx.org/?url=https://champierre.github.io/speech2scratch/speech2scratch.js) page with the extension loaded. If you cannot open ScratchX with the extension loaded, open [ScratchX](http://scratchx.org/) page, click "Open Extension URL" and paste the following URL, then click "Open".

	```
	https://champierre.github.io/speech2scratch/speech2scratch.js
	```

4. On Warning dialog of ScratchX, click "I understand, continue".

## Reference

- https://qiita.com/inouet/items/2c9e218c05f547bb6852
- http://jellyware.jp/kurage/iot/webspeechapi.html
