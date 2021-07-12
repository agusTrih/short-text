# limit-text-js

Pustaka kecil yang dapat membantu kamu untuk memotong sebuah kalimat, kata atau paragraf

## Instalasi

### Menggunakan npm

```
npm install limit-text-js
```

## Cara Menggunakan

```javascript
const { shortText } = require("limit-text-js");

const textLimit = shortText("I love Code", 6);
console.log(textLimit); //I love
```

```javascript
import { shortText } from "limit-text-js";

const textLimit = shortText("My name is Agus", 10, "...");
```

```javascript
output: My name is...
```

## Options

```javascript
Param 1 : type string  | default string ""
Param 2 : type number  | default number 100
Param 3 : type string  | default string ""
```

## Cara Berkontribusi

- Fork repositori ini
- Clone repositori
- Lakukan perubahan atau perbaikan
- Buat test case
- Push dan buat Pull Request

## TODO

- [x] Ganti license di package.json
- [ ] Lengkapi README
- [x] Tambah file LICENSE
- [ ] Bahasa Indonesia dan Bahasa Inggris

## Inspirasi

- Riza Fahmi
