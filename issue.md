## ディレクトリ作成

- node --version で node の導入を確認
- グローバルで Vue の CLI をインストール（vue --version で導入を確認）
- 任意の場所で vue create my-cli(← ディレクトリ命名)で作成
- version3 を選択
- .gitignore に node_modules が配置されているようにする
- その後の push で github Languages 表記が Vue が生成されていなければ再度作成し直す

## Github 連携

- **Github**
  - で Home タブからリポジトリ新規作成
  - my-cli(← ローカルと同じ名前にする)
  - git add remote....リモートリポジトリを作成して、main ブランチを作成、push するをコピー
- **VSCode**
  - com+j ターミナル出現
  - コピーしたテキストをペースト実行(ローカルとリモートリポジトリを連携)
- **Github**
  - setting タブ →pages タブ →Build and deployment の Branch の選択で main が生成されているので
    main に変更して save する
  - actions や code タブで git push がなされていることを確認

## 起動

- npm run serve でローカルホストがターミナルに表示されるのでクリック

## プラグインの導入

**単体テストのための Jest を組み込む**

- vue add @vue/unit-jest ではエラーが出たので、vue add unit-jest で導入し、package.json で確認
  参考資料：https://zenn.dev/hrtk/scraps/3107800740739e
- 依存関係を更新するため npm install をする

**Element UI の導入(参考)**

- 今回はまず導入せず使用してみるので参考まで（vue add element）

**Router と Vuex の導入（必須）**

- vue add router(install 時に history モードの yes/no を問われるので yes に。履歴モードの使用。vuex との統合が可能、ユーザー UX にも良い。)
- vue add vuex

**npm serve を使用するための導入**

- 導入時のエラー対処が npm serve 実行時に影響する
  - 脆弱性の発見で npm audit fix --force を使用した（のちにこれが起動しなくなる原因となる）
  - 脆弱性が中程度のもので 4 つ程度なら npm audit fix をする前に一旦 npm serve を試してみる
  - もし npm serve が起動しない場合は
    - node_modules と package-lock.json を一旦削除して依存関係を一旦切り離す
    - npm install で 2 つのファイルを再生成させ、依存関係を再構築させる
    - npm serve で localhost:8080 が起動できれば OK

**ルーターの利用**

- ルーティング設定：どの URL に対してどのコンポーネントを紐づけるか
- src/router/index.js でデフォルト設定されているものもあるし
- route-basic/src/router.js でカスタム設定できるものもある

**他のデバイスで実行する時**

- clone する　 git clone https://github.com/lumijoe/my-cli.git
- 依存関係を構築するために npm install
- 使用する言語のインストールができていなければインストールする
- それを確認するために、version 確認をターミナルで実行する
  - node --version, npm --version, vue --version でバージョンが出てこなければ
    インストールする必要あり（今回は vue 関係がインストールできていないので次に）
- npm install -g @vue/cli, npm install -g @vue/cli-service-global
  vue の cli を使用するためと、vue serve を使用するためにインストールが必要

**テストを導入するために**
**Jest**

- CLI で vue create ディレクトリ名を作成する時に

  - Manually select features を選択
  - Unit testing 選択肢の際に Mocha + Chai ではなく Jest を選択しておく
  - テストコードを記述(例：tests-unit/test/unit/intro.spec.js)
  - ルートディレクトリで npx vue-cli-service test:unit intro.spec.js を実行
  - テストが走り、結果がターミナルに表示される
    npx vue-cli-service test:unit intro.spec.js
    console.log
    2024/2/19 15:47:24
    at Object.<anonymous> (tests-unit/tests/unit/intro.spec.js:3:15)
    PASS tests-unit/tests/unit/intro.spec.js
    Jest の基本
    ✓ はじめてのテスト (56 ms)
    Test Suites: 1 passed, 1 total
    Tests: 1 passed, 1 total
    Snapshots: 0 total
    Time: 4.708 s
    Ran all test suites matching /intro.spec.js/i.
    などが表示される

**E2E**

- CLI で vue create ディレクトリ名を作成する時に
  - Manually select features を選択
  - E2E 選択肢の時に Nightwatch を選択
  - コードを書いたら（test.js）
  - ルートディレクトリではなくそのフォルダ tests-e2e のディレクトリに移動し
  - npx vue-cli-service test:e2e を実行すると
    PASSED のような結果が表示される

## ビルドする時(package.json のコードで確認可能)

- まだ実行していない 2024.0207 時点
- プロジェクトの内容をそのまま実行する npm run serve に対し
- アプリをビルド(ブラウザがそのままでは認識できないファイルをコンパイルして実行可能な.js や.css ファイルを生成すること)して本番環境に配置（デプロイ）する npm run build
