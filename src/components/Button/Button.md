Базовый вид компонента кнопка (без props):

```jsx
<Button>кнопка</Button>
```

Большая розовая кнопка (передали соответствующие props)
<br/> Нажмите кнопку `VIEW CODE` чтобы открыть интерактивный редактор:

```jsx
<Button size="large" color="deeppink">
  КнОпКа
</Button>
```
Можно передать props иначе:

```js { "props": { "className": "checks" } }
<Button>Прозрачная</Button>
```

Таким вот кодом:

```js static
{ "props": { "className": "checks" } } 
<Button>Прозрачная</Button>
```

Редактор и `VIEW CODE` можно отключить:

```jsx noeditor
<Button>Кнопка</Button>
```

Можно подсвечивать другие языки, указав их (js исполняться не будет):

```html
<Button size="large">Нажать</Button>
```

```scss
.button {
  padding: 0.5em 1.5em;
}
```

Несколько компонентов с отступом:

```jsx padded
<Button>Кнопка 1</Button>
<Button>Кнопка 2</Button>
<Button size="large">Три</Button>
```

Можно импортировать другие компоненты для работы с текущим (см. `VIEW CODE`):

```jsx
import Placeholder from '../Placeholder/Placeholder.js';
<Button>
  <Placeholder />
</Button>
```
Или же можно копировать более четко, для удобного копипаста потом (см. `VIEW CODE`):

```jsx
import React from 'react'
import Button from '../Button/Button.js';
import Placeholder from '../Placeholder/Placeholder.js';
<Button>
  <Placeholder type="bacon"/>
</Button>
```