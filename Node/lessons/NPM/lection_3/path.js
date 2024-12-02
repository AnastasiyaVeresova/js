// Модуль path в Node.js предоставляет утилиты для работы с путями к файлам и директориям. Он позволяет выполнять различные операции, такие как объединение путей, разбор путей на составляющие, получение абсолютного пути и многое другое. Вот некоторые из основных методов, предоставляемых модулем path:

// path.basename(path[, ext]):
// Возвращает последнюю часть пути, которая обычно является именем файла или директории.
const path = require('path');
console.log(path.basename('/foo/bar/baz/qux.html')); // qux.html
console.log(path.basename('/foo/bar/baz/qux.html', '.html')); // qux

//path.dirname(path):
// Возвращает имя директории пути.
const path = require('path');
console.log(path.dirname('/foo/bar/baz/qux.html')); // /foo/bar/baz

//path.extname(path):
// Возвращает расширение файла пути.
const path = require('path');
console.log(path.extname('index.html')); // .html

//path.join([...paths]):
// Объединяет указанные пути в один путь.
const path = require('path');
console.log(path.join('/foo', 'bar', 'baz/qux', '..')); // /foo/bar/baz

//path.normalize(path):
//Нормализует указанный путь, разрешая .. и . сегменты.
const path = require('path');
console.log(path.normalize('/foo/bar/../baz')); // /foo/baz

// path.parse(path):
// Возвращает объект, содержащий различные части пути.
const path = require('path');
console.log(path.parse('/home/user/dir/file.txt'));
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// path.resolve([...paths]):
// Разрешает последовательность путей или сегментов пути в абсолютный путь.
const path = require('path');
console.log(path.resolve('/foo/bar', './baz')); // /foo/bar/baz
console.log(path.resolve('/foo/bar', '/tmp/file/')); // /tmp/file

// path.relative(from, to):
// Возвращает относительный путь от from до to.
const path = require('path');
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')); // ../../impl/bbb