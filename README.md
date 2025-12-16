# Speech2Scratch(スピーチ トゥー スクラッチ)

Speech2Scratch(スピーチ トゥー スクラッチ)は、ブラウザの音声認識機能を利用して、音声をテキストに変換するScratchの独自拡張機能です。

## サポートのお願い

Speech2scratchは2020年よりオープンソースかつ無料で提供しており、学校や各種プログラミング教室はじめさまざまな場所で利用されております。継続して開発を続けるためには、使っていただいている皆さまからの支援が必要です。<br />
[一杯のコーヒー](https://www.buymeacoffee.com/champierre)という形でサポートをいただけると大変ありがたく思います。

<a href="https://www.buymeacoffee.com/champierre"><img src="https://user-images.githubusercontent.com/10215/215533679-bb41b1a2-ba42-4eb6-9f9a-6d0bd67f3aaa.png"></a>

## 使い方

サンプルプロジェクトを

https://xcratch.github.io/editor/#https://champierre.github.io/speech2scratch/sample.sb3

から開くことができます。

### Xcratchからの利用

[Xcratch](https://xcratch.github.io/) をブラウザで開き、「エディターを開く」を選んだあと、「拡張機能を選ぶ」画面から「拡張機能を読み込む」を選びます。
URL入力欄に https://champierre.github.io/speech2scratch/speech2scratch.mjs を入力するとSpeech2Scratchを開くことができます。

### Stretch3(ストレッチスリー)からの利用

[Strech3](https://stretch3.github.io/)をブラウザで開き、「拡張機能を選ぶ」画面でSpeech2Scratchを選ぶことで利用できます。

### TurboWarp(ターボワープ)からの利用

[TurboWarp](https://turbowarp.org/)で、マイクアクセスが必要なSpeech2Scratchを使用する場合は、**Unsandboxedモード**で拡張機能を読み込む必要があります。

#### 方法1: URLから直接読み込み（最も簡単）

1. TurboWarpで「拡張機能」→「カスタム拡張機能」を選択
2. URL入力欄に以下を入力：
   ```
   https://champierre.github.io/speech2scratch/speech2scratch.js
   ```
3. TurboWarpのバージョンによって、「Unsandboxed」オプションが表示される場合はチェックを入れる
4. 拡張機能を読み込み

※ GitHub Pagesからの読み込みの場合、ブラウザのセキュリティ設定によってはマイクアクセスが制限される可能性があります。その場合は方法2をお試しください。

#### 方法1-b: ファイルをダウンロードして読み込み

1. [speech2scratch.js](https://champierre.github.io/speech2scratch/speech2scratch.js) を右クリックして保存
2. TurboWarpで「拡張機能」→「カスタム拡張機能」を選択
3. ファイル選択画面で、ダウンロードした `speech2scratch.js` を選択
4. **重要**: 「Unsandboxed」オプションにチェックを入れる
5. 拡張機能を読み込み
6. 初回使用時、ブラウザがマイクへのアクセス許可を求めるので「許可」をクリック

#### 方法2: ローカルサーバーから読み込み（開発者向け）

1. ローカルサーバーを起動：
   ```bash
   http-server -p 8000
   ```

2. TurboWarpから読み込み：
   - 「拡張機能」→「カスタム拡張機能」を選択
   - 以下のURLを入力：
     ```
     http://localhost:8000/speech2scratch.js
     ```

`localhost:8000` から読み込まれた拡張機能は自動的にUnsandboxedモードで実行されます。

#### 注意事項

- **HTTPSまたはlocalhostが必須**: 音声認識にはセキュアな環境が必要です
- **Unsandboxedモード必須**: マイクアクセスにはUnsandboxedモードが必要です
- **ブラウザの互換性**: Chrome、Edge、Safari等のモダンブラウザで動作します

## Licence(ライセンス)

SpeechScratchには [AGPL-3.0 license](./LICENSE) が適用されます。オープンソースで、誰でも自由に利用できます。授業やワークショップで使用でき、商用利用も認められています。あなたやあなたの生徒さんがSpeech2Scratchを使用して何か面白いプロジェクトを作成したときは、ぜひハッシュタグ #speech2scratch を使用してSNSで共有するか、連絡先までお知らせください。以下の「活用例」に追加させていただきます。

