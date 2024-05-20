🔸Angular の基本事項

⚫︎ コンポーネント

- データと機能を扱う

⚫︎HTML テンプレート

- UI を決定する

⚫︎ コンポーネント固有のスタイル

- 見た目や装飾を定義

- コンポーネント

  - <app-root></app-root>: 最初にロードされる、他のコンポーネントのコンテナとなるコンポーネント
  - <app-top-bar></app-top-bar>:ストア名とチェックアウトボタン
  - <app-product-list></app-product-list>:商品リスト
  - <app-product-alerts></app-product-alerts>:アプリケーションのアラートを格納するコンポーネント

- \*ngFor 構造ディレクティブ
  - 構造ディレクティブは、要素の追加、削除、操作によって DOM の構造を形成したり、再構築したりする

# Component

- 子コンポーネントの設定

```
import { Component, Input } from '@angular/core';
export class ItemDetailComponent {
  @Input() item = '';
}
```

item の値は親コンポーネントからくる

- ⚫HTML テンプレート
  - item-detail.component.html
  ```
  <p>Today's item: {{item}}</p>
  ```
- 親コンポーネントの設定
- HTML テンプレート
  - 1. 子のセレクター（<app-item-detail>)を親コンポーネントのテンプレートでのディレクティブとして使う
  - 2. プロパティバインディング（[]やつ）を使い、子の item プロパティを親の currentItem プロパティにバインドする
  - app.component.html
  ```
  <app-item-detail [item]="currentItem"></app-item-detail>
  ```
- 親コンポーネント

```
export class AppComponent {
  currentItem = 'Television';
}
```
