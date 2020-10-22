const headerStartContent = 'Конструктор веб сайтов';
const textStartContent = 'Привет, этот небольшой проект задумывался как простой конструктор веб сайта. Он позволяет создать простую структуру из самых популярных блоков. После созданию по нажатию на кнопку "Результат" ты получишь готовую HTML разметку вместе с CSS стилями. Ниже ты найдешь инструкцию к каждому из доступных блоков. Ты можешь сохранять созданную структуру страницы при помощи кнопки "Сохранить" и загрузить ее при желании. И прежде чем начать конечно же удали все блоки с описанием со страницы, использовав "Очистить все", чтобы они не попали в разметку.';
const descriptionBloks = 'На текущий момент доступно 5 типов блоков: Заголовок, обычный Текст, текст в ввиде Столбцов, Гиперссылка и Изображение.';
const descriptionText = 'ЗАГОЛОВОК И ТЕКСТ: С заголовком и обычным текстом все просто - укажи нужные параметры и введи сам текст.';
const descriptionColuns = 'КОЛОНКИ ТЕКСТА: Для колонок тебе необходимо ОБЯЗАТЕЛЬНО разделить введеный текст на столбцы используя знак "; ". Каждый разделитель поместит часть текста в новую колонку. Кстатит этот блок именно так и создан.';
const descriptionImage = 'ИЗОБРАЖЕНИЯ: Ты можешь загрузить свое собственное изображение и указать для него необходимые параметры. Обазательно укажи путь до изображения в нужной строке, именно он попадет в финальный результирующий код, а не путь к загруженной тобой картинке. Можешь не загрузжать картинку и тогда ты получишь выдру-заглушку которая покажет размеры картинки и прочие параметры.';
const descriptionLink = 'ССЫЛКИ: Все аналогично текстовым блокам с той лишь разницей, что тебе надо указать реальную ссылку в поле тело ссылки и выбрать поведение ссылки, открыть новую вкладку или совершить прямой переход.';
const help = {
    headerStartContent,
    textStartContent,
    descriptionBloks,
    descriptionText,
    descriptionColuns,
    descriptionImage,
    descriptionLink
}

export default help;