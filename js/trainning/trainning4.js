// Есть массив друзей: var friends = ["Алексей", "Вячеслав", "Григорий", "Настя", "Павел"];

// Нужно написать условие, которое проверяет следующее: если количество элементов в массиве больше или равно 3, то выводится сообщение о том, что это большой массив, в котором как минимум 3 элемента. Иначе, следует вывести на экран сообщение о том, что это маленький массив, в котором менее 3-х элементов.

const friends = ['Алексей', 'Вячеслав', 'Григорий', 'Настя', 'Павел'];

const countFriends = friends.length;
let message;

if (countFriends >= 3) {
  message = 'Это большой массив, в котором как минимум 3 элемента';
} else {
  message = 'Это маленький массив, в котором менее 3-х элементов';
}
console.log(message);