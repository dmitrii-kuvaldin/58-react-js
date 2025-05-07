import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";
import './Lesson03.css'

function Lesson03() {
  const friends = [
    { name: 'Peter', age: 40, hobby: 'coding' },
    { name: 'Rosa', age: 35, hobby: 'hiking' },
    { name: "Anton", age: "20", hobby: "painting" }
  ];

  // функция для передачи в компонент кнопки
  const go = () => console.log('go!');

  return (
    <div>
      <h1 className="heading">Lesson 3: react props 👨‍👩‍👧‍👦</h1>
      {/* передача данный в компонент происходит в момент вызова - данные передаются по ключам, которые похожи на аттрибуты html тегов. и по этим же ключам мы встречаем данные внутри компонента */}
      <UserCard name="Anton" age={20} hobby="painting" />
      <UserCard name="Rosa" age={35} />
      {/* теперь получается что один и тот же компонент с разными переданными данными будет выглядеть и работать иначе */}
      <UserCard name={friends[0].name} age={friends[0].age} hobby={friends[0].hobby} />
      {/* когда мы ничего не передаем в компонент сработают его значения по умолчанию */}
      <UserCard />
      {/* передаем анонимную стрелочную функцию как пропс func */}
      <MyButton func={() => console.log('push!')} text="Нажми меня" />
      {/* передаем функцию именную функцию go  */}
      <MyButton text="Go!" func={go} />
      <MyButton />
    </div>
  );
}

export default Lesson03;
