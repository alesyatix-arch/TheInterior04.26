// Данные для таблицы сравнения комплектаций Base и Optimum

export interface ComparisonItem {
  name: string;
  baseValue: string | boolean;
  optimumValue: string | boolean;
}

export interface ComparisonSection {
  title: string;
  items: ComparisonItem[];
}

export const comparisonData: ComparisonSection[] = [
  {
    title: "Включено в обе комплектации",
    items: [
      { name: "Чистовые материалы", baseValue: true, optimumValue: true },
      { name: "Санузел микс: плитка + влагостойкая покраска", baseValue: true, optimumValue: true },
      { name: "Полотенцесушитель", baseValue: true, optimumValue: true },
      { name: "Поддон/ванна", baseValue: true, optimumValue: true },
      { name: "Смеситель", baseValue: true, optimumValue: true },
      { name: "Душевая стойка", baseValue: true, optimumValue: true },
      { name: "Кондиционер", baseValue: true, optimumValue: true },
      { name: "Двери", baseValue: true, optimumValue: true },
      { name: "Система от протечек", baseValue: true, optimumValue: true },
      { name: "Краска", baseValue: true, optimumValue: true },
      { name: "Освещение", baseValue: true, optimumValue: true },
    ],
  },
  {
    title: "Отделка и материалы",
    items: [
      { name: "Тумба с раковиной", baseValue: "Встроенная", optimumValue: "Накладная" },
      { name: "Напольное покрытие", baseValue: "Ламинат, SPC", optimumValue: "Инженерная доска, кварц.паркет" },
      { name: "Плинтус", baseValue: "МДФ ламинированный", optimumValue: "МДФ эмаль" },
      { name: "Розетки", baseValue: "Donel A07", optimumValue: "Donel R98" },
      { name: "Радиаторы", baseValue: "Биметаллический", optimumValue: "Трубчатый" },
      { name: "Потолок", baseValue: "Натяжной ПВХ с настенным карнизом", optimumValue: "Натяжной ПВХ с нишей и подсветкой" },
      { name: "Зеркало в санузле", baseValue: "Без подсветки", optimumValue: "С подсветкой" },
      { name: "Сантехника", baseValue: "Полный комплект оптимальный по стоимости", optimumValue: "Аналоги премиум брендов" },
    ],
  },
  {
    title: "Меблировка",
    items: [
      { name: "Кухня", baseValue: "Готовые модули", optimumValue: "Под размер" },
      { name: "Шкафы", baseValue: "Готовые позиции", optimumValue: "Под размер" },
      { name: "Мягкая мебель", baseValue: "Базовая", optimumValue: "Дизайнерская" },
      { name: "Бытовая техника", baseValue: "Полный комплект оптимальный по стоимости", optimumValue: "Аналоги премиум брендов" },
      { name: "Декоративное освещение", baseValue: "Встраиваемые", optimumValue: "Дизайнерское" },
    ],
  },
  {
    title: "Только в Optimum",
    items: [
      { name: "Гигиенический душ", baseValue: false, optimumValue: true },
      { name: "Тёплый пол", baseValue: false, optimumValue: true },
      { name: "Проточный водонагреватель", baseValue: false, optimumValue: true },
      { name: "Декорирование", baseValue: false, optimumValue: true },
    ],
  },
];
