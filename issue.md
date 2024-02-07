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

- vue add router
- vue add vuex
  /
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
