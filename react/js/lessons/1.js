let money = prompt('Ваш бюджет за месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        item: '',
        size: 0
    },
    optionalExpenses: '',
    income: '',
    savings:false
};
appData.expenses.item = prompt('Введите обязательную статью расходов в этом месяце');
appData.expenses.size = prompt('Во сколько обойдется?');
alert('Ваш бюджет на 1 день - ' + ( appData.budget-appData.expenses.size )/30);