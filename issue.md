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
      /
      /
      /
      /
      /
      /
      /
      /
      /

## ビルドする時(package.json のコードで確認可能)

- まだ実行していない 2024.0207 時点
- プロジェクトの内容をそのまま実行する npm run serve に対し
- アプリをビルド(ブラウザがそのままでは認識できないファイルをコンパイルして実行可能な.js や.css ファイルを生成すること)して本番環境に配置（デプロイ）する npm run build
