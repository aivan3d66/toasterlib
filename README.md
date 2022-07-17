# Tестовое задание библиотека Toast

## Содержание

- [Техническое задание](#Техническое-задание)
- [Используемые технологии](#Используемые-технологии)
- [Структура проекта](#Структура-проекта)
- [Тестирование](#Тестирование)
- [Как начать](#Как-начать)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Необходимо реализовать ***Toast*** библиотеку Javascript, для представления не блокирующих уведомлений . Цель состоит в
том, чтобы создать базовую библиотеку, которую можно настраивать и расширять.

#### Необходимый функционал:

- Показать уведомление.
- Возможность устанавливать положению уведомления.
- Возможность устанавливать тип уведомления (уведомления об успехе, ошибке, оповещение и т.д.).
- Возможность устанавливать длительность показа уведомления.
- Возможность задавать заголовок и описание уведомления.
- Возможность устанавливать отступы уведомления.
- Возможность изменять цвет типа уведомлений.
- Возможность изменять анимацию появления и исчезновения.

#### Дополнительный функционал:

- Возможность "смахивать" уведомления в сторону для быстрого закрытия.
- Показ до 3 уведомлений одновременно.

#### Пример графического представления:

Ссылка на макет: [Макет "Toast"](https://xd.adobe.com/view/9efd755b-6a29-49bf-4e13-d5cd74643170-e8cc/). Также его можно
найти в папке **doc** c расширением **.xd** для программы **Adobe XD**.

> ![example_1](https://github.com/slava-ovchinnikov/education-task-toast-lib/blob/master/doc/example_1.png?raw=true)

#### Также проект предполагает:

- Разделить библиотеку на два основных компонента: представления и логики. Для реализации логики приложения необходимо
  использовать порождающий паттерн программирования ***"Одиночка"***, который гарантирует, что у класса есть только один
  экземпляр, и предоставляет к нему глобальную точку доступа (см.
  подробнее [паттерн Одиночка](https://refactoring.guru/ru/design-patterns/singleton)). При помощи паттерна создать
  сервисный класс, в котором вы будете задавать конфигурацию и вызывать уведомление. Для реализация представления
  необходимо использовать **react portals**.

- Настроить конфигурации ***babel***, ***eslint***.

- Подключить и настроить бандлер ***Rollup*** для сборки проекта в библиотеку.

- Подключить и настроить ***Strorybook*** для проверки работоспособности вашей библиотеки.

- Обработку ошибок через паттерн ***Error Boundaries***

- Проверку типов в React компонентах, передаваемых параметров и подобных объектов.

- Использование алиасов для импортирования файлов.

## Используемые технологии

### Для react

- ***node.js*** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код).
- ***babel*** - транспайлер, преобразующий код из одного стандарта в другой.
- ***eslint*** - линтер для JavaScript кода.
- ***yarn*** - менеджер пакетов.
- ***rollup*** - сборщик ES-модулей.
- ***stortbook*** - инструмент, используемый для разработки компонентов пользовательского интерфейса в изоляции.
- ***react*** - JavaScript-библиотека для создания пользовательских интерфейсов.
- ***prop-types*** - набор валидаторов, которые могут быть использованы для проверки получаемых данных.
- ***styled-components*** - система стилизации react компонентов.
- ***cypress*** — e2e тестирование для веб приложений.

### Для react native

Will be soon...

## Структура проекта

Структура проекта должна быть реализована в том же стиле, что и в первом тестовом задании (
см. [Структура проекта](https://github.com/slava-ovchinnikov/education-task-calculator#%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0))
.

## Тестирование

Реализовать e2e тестирование c полным покрытием функционала приложения:

- Сервис для конфигурации Toast-компонента.
- Графическое (компонент модуля и т.д.)

## Как начать

Эта инструкция поможет вам сделать копию проекта и запустить его на вашей локальной машине для разработки и
тестирования.

### React/ReactNative

#### Установка

Для того чтобы получить шаблон проекта, необходимо сделать следующее:

1. Зарегистрировать аккаунт в github.
2. Получить доступ к репозиторию с шаблоном.
3. Импортировать шаблон в свой репозиторий.
4. Склонировать репозиторий на свою локальную машину.

> ![template_1](https://github.com/slava-ovchinnikov/education-task-calculator/blob/master/doc/template.png?raw=true)

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[Rollup](https://rollupjs.org/guide/en/)

[Storybook](https://storybook.js.org/docs/basics/introduction/)

[Eslint](https://eslint.org/docs/user-guide/configuring)

[Babel](https://babeljs.io/docs/en/configuration)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Тестирование Detox](https://github.com/wix/Detox/blob/master/docs/README.md)

[Styled-components](https://www.styled-components.com/docs)
