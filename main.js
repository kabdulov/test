'use strict' //ES6

let money = prompt("Ваш бюджет на месяц?", "150000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-01-02"),
    appData = {
        budget : [money],
        timeData : [time],
    },
    expenses = {},
    optionalExpenses = {},
    income = {},
    savings = false,
    a = prompt("Введите обязательную статью расходов в этом месяце", "Кредит"),
    b = prompt("Во сколько обойдется?", "47990");
    expenses[a]=b;

    alert(money / 30);