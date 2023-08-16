import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [countDays, setCountDays] = useState();
  const [countArms, setCountArms] = useState();

  ///Черепашке нужно забраться на вершину холма. Расстояние от подножия холма до его вершины - 100м.
  // Черепашка за день залезает вверх по холму на 50м. Ночью она спит и скатывается на 30м вниз.
  //На какие сутки черепашка залезет на столб? Требуется написать код на JS для решения задачи и дать ответ
  function task_1() {
    const maxHeight = 100;
    const day = 50;
    const night = 30;
    let current = 0;
    let countDays = 0;
    while (current < maxHeight) {
      current += day;
      if (current >= maxHeight) {
        countDays++;
        break;
      }
      current -= night;
      countDays++;
    }
    setCountDays(countDays);
    return countDays;
  }
  // В комнате находится человек. Через какое-то время в комнату заходит еще один человек и здоровается с первым.
  // Людей в комнате становится 2, а счетчик рукопожатий становится равен 1.
  // Через какое-то время заходит еще один человек и здоровается с другими людьми в комнате.
  // Людей в комнате - 3 и счетчик рукопожатий - 3. И т.д.
  //Требуется написать код на JS для подсчета кол-ва рукопожатий для 10 человек и дать ответ.
  function task_2() {
    const maxPeople = 10; //максимальное количество людей
    let currentArm = 0; //  текущее количетсво рукопожатий
    let currentPeople = 1; //текущее количетсво людей
    while (currentPeople != maxPeople) {
      currentArm = currentArm + currentPeople;
      console.log(currentPeople);
      if (currentPeople === maxPeople) {
        console.log(currentPeople, "=", maxPeople);
        //currentPeople++;
        break;
      }
      currentPeople++;
    }
    console.log(currentArm);
    setCountArms(currentArm);
    return currentArm;
  }

  // Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка...").
  // Известно, что в строке встречаются повторяющиеся слова. Нужно написать функцию на JS.
  // На вход передаются строка с дублями, а на выходе мы получаем строку без дублей. 
  // Помимо кода на 1и 2задачу нужно предоставить числовой ответ

  function task_3(){
      const string = "кошка, собака, плов, селедка, рыба, кошка, плов, попугай, слова, еда, плов, кошка, кошка, кошка"
      const wordsArray = string.split(', ');
      for(let i = 0; i < wordsArray.length; i++){
        for (let j = 0; j < wordsArray.length; j++) {
          if (i !== j) {
            if (wordsArray[i] === wordsArray[j]) {
              wordsArray.splice(j, 1);
            } 
          }
      }
    }
      return wordsArray.join(", ");
  }
  useEffect(() => {
    task_1();
    task_2();
    console.log(task_3())
  }, []);
  return (
    <div className="App">
      <div>{`Ответ на задачу 1, на холм черепашк залезет на ${countDays} сутки, а вот на столб к сожалению не залезет, так как и не пыталась :)`}</div>
      <div>{`Ответ на задачу 2 =  ${countArms}`}</div>
    </div>
  );
}

export default App;
