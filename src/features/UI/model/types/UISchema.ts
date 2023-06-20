// Ключ- адрес страницы, значение - позиция скролла
export type ScrollSchema = Record<string, number>;

export interface UISchema {
  scroll: Record<string, number>;
}
