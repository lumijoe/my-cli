## ディレクトリ作成

- node --version で node の導入を確認
- グローバルで Vue の CLI をインストール（vue --version で導入を確認）
- 任意の場所で vue create my-cli(← ディレクトリ命名)で作成
- version3 を選択

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
