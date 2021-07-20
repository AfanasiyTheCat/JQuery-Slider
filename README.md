# JQuery-Slider
### Slider with three image changing effects

[Codepen Example](https://codepen.io/afanasiythecat/pen/GRmvqyo)

- [English](#eng)
- [Русский](#rus)
____
<a name="eng"></a> 

### Quick start:
- Include __sliderClass.js__ and __styles.css__
- Create element with `class=slider`. Set size of this element
- Put images for slider in `<img>` inside your `class=slider` element 
```html
    <div id="slider" class="slider">
    	<img class="slider_image" src="..." alt="">

			...

	<img class="slider_image" src="..." alt="">
    </div>
```
- Create new instance of __Slider__ class. Pass your `class=slider`
element as parameter in constructor
```javascript
    let slider = new Slider($("#slider"));
```
___
### Options:

**Slider** constructor have parameters:
- `slider_elem` - your slider element
- `switch_mode='slide'` - effect of changing image.
    * `'slide'` - default slider effect
    * `'fade'` - like fadeIn in JQuery
    * `'switch'` - just switching images
- `duration=1000` - duration of changing effect (except `'switch'`)
- `btn_left=null` and `btn_right=null` - custom switching buttons. If null,
the default buttons will be set
___
<a name="rus"></a> 

### Quick start:
- Подключите __sliderClass.js__ и __styles.css__
- Создайте элемент с классом `class=slider`. Установите размер для этого элемента
- Укажите изображения для слайдера  в `<img>` элементе внтури  `class=slider` элемента 
```html
    <div id="slider" class="slider">
    	<img class="slider_image" src="..." alt="">

			...

	<img class="slider_image" src="..." alt="">
    </div>
```
- Создайте новый экземпляр __Slider__ класса. Укажите ваш `class=slider`
элемент в качестве аргумента для конструктора
```javascript
    let slider = new Slider($("#slider"));
```
___
### Настройки:

**Slider** конструктор имеет следующие аргументы:
- `slider_elem` - ваш элемент слайдера
- `switch_mode='slide'` - эффект переключения изображения
    * `'slide'` - стандартный слайдер-эффект (перемещается по оси X)
    * `'fade'` - появление/исчезновения (как fade в JQuery)
    * `'switch'` - просто переключения картинок
- `duration=1000` - длительность эффекта переключения (кроме `'switch'`, там эффект моментальный)
- `btn_left=null` и `btn_right=null` - кастомные кнопки переключения. Если указать `null`
, то будут созданы стандартные кнопки (стрелочки поверх изображения)
