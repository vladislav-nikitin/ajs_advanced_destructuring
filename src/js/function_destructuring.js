export default function destructuring(obj) {
  const { special } = obj;
  //console.log(special)
  const resultArr = special.map(
    ({ id, name, icon, description = "Описание недоступно" }) => ({
      id,
      name,
      icon,
      description,
    })
  );
  console.log(resultArr);
  return resultArr;
}

//destructuring(character)

// const character = {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 3,
//   attack: 40,
//   defence: 10,
//   special: [
//     {
//       id: 8,
//       name: 'Двойной выстрел',
//       icon: 'http://...',
//       description: 'Двойной выстрел наносит двойной урон'
//     },
//     {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...'
//       // <- обратите внимание, описание "засекречено"
//     }
//   ]
// }
