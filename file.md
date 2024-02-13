## public

- トップページ(index.html)
- favicon.icon

## node_modules

- インストールされたライブラリ一式

## src(ソースコード)

**assets フォルダ**

- 画像などのアセット一式

**componens フォルダ**

- コンポーネント一式
- .vue ファイル（template, script, style をまとめたもの）

**App.vue(メインコンポーネント)**
**main.js(エントリースクリプト)**

**route-basic/src/router.js**

- Vue Router を有効化し、ルーティングを設定

**【履歴メモ】package-lock.json, noe_modules の削除と再 npm install**

- 0213 実施：vue serve 使用による install 時の npm audit fix で 0209 に発生したバグのデバッグ対応
