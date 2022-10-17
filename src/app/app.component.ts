import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-angular';

  translationUAobject = {
    headerCommon: {
      dashboard: 'Дашборд',
      api: 'API',
      contacts: 'Контакти',
      option1: 'Укр',
      option2: 'Eng',
    },
    headerAdditional: {
      cards: 'Картки',
      fop: 'ФОП',
      deposits: 'Депозити',
      obligations: 'Облігації',
      buyPart: 'Покупка частинами',
      foreighTransactions: 'Міжнародні перекази',
    },
    banner: {
      title: 'Ми знову прибрали все зайве, щоб ви отримали кращий досвід.',
      description:
        'Залиште номер телефону, і ми надішлемо посилання на додаток, де можна відкрити рахунок ФОП',
      button: 'Хочу рахунок ФОП',
    },
    accountant: {
      title: 'Бухгалтерський кабінет',
      firstDescription:
        'Окремий бухгалтерський кабінет для керування рахунком ФОП.',
      secondDescription:
        'Можна додати до двох додаткових номерiв телефону для роботи у веб-кабінеті.',
      button: 'Увійти в кабінет',
      advantagesTitle: 'Ви так довго цього чекали',
      item0:
        'Повністю дистанційне обслуговування: не потрібно відвідувати точку видачі або звертатися до відділення',
      item1: 'Керування всіма рахунками monobank в одному додатку',
      itemDesc1: 'Один додаток для ФОП і особистого рахунку',
      item2:
        'Платежі з валютних рахунків 24/7/365, а не тільки з 10:00 до 15:00',
      itemDesc2:
        'Не потрібно чекати поки відкриється міжбанк, щоб продати валюту. Валютообмін 24/7',
      item3:
        'Окремий бухгалтерський веб-кабінет . Можна додати до двох додаткових номерiв телефону для роботи у веб-кабінеті з рахунком ФОП',
      item4: 'Вигідний курс обміну валют',
      item5: 'Дружній фінансовий моніторинг і валютний контроль',
    },

    steps: {
      step1: 'Пройти швидку реєстрацію в додатку monobank та отримати картку',
      step2: 'Бути зареєстрованим як фізична особа-підприємець',
      step3: 'Відкрити рахунок ФОП у додатку monobank в 1 торкання',
    },

    tariffs: {
      title: 'Тарифи',
      th1: 'monobank Universal Bank',
      th2: 'Банк 1',
      th3: 'Банк 2',
      th4: 'Банк 3',
      thth1: 'Вартість відкриття рахунку',
      td11: '0 грн',
      td12: '0 грн онлайн 100 грн у відділенні',
      td13: '1 грн',
      td14: '50 грн',
      thth2: 'Вартість обслуговування рахунку на місяць',
      td21: '0 грн',
      td22: '125 грн',
      td23: '100 грн',
      td24: '129 грн',
      thth3: 'Комісія за переказ на рахунки інших банків',
      td31: '0 грн',
      td32: '3 грн',
      td33: '3 грн',
      td34: '2 грн',
      description: 'Станом на 26 червня 2020 р.',
      details: 'Детальні тарифи',
    },

    getCard: {
      title: 'Немає картки monobank?',
      description: 'Не страшно, її можна отримати просто зараз',
      button: 'Отримати картку',
      secondDescription:
        "Відкриття картки ні до чого не зобов'язує. Крім рахунка ФОП у нас дуже багато крутих пропозицій",
    },

    footer: {
      description:
        'Щоб стати клієнтом, потрібно мати смартфон на Android або iOS',
      ulTitle: 'Банк',
      liItem11: 'Про банк',
      liItem12: "Кар'єра",
      liItem13: 'Контакти',
      liItem14: 'Умови, правила та тарифи',
      liItem15: 'Безпека',
      liItem16: 'API',
      ulTitle2: 'Картки',
      liItem21: 'Чорна картка',
      liItem22: 'Біла картка',
      liItem23: 'Platinum картка',
      liItem24: 'IRON картка',
      liItem25: 'Дитяча картка',
      liItem26: 'єПідтримка',
      ulTitle3: 'Продукти',
      liItem31: 'Покупка частинами',
      liItem32: 'Розстрочка',
      liItem33: 'Міжнародні перекази',
      liItem34: 'ФОП',
      liItem35: 'Депозити',
      liItem36: 'Оплата у ресторанах',
      liItem37: 'Реєстрові виплати',
      liItem38: 'Облігації',
      liItem39: 'Інвестиції',
      liItem310: 'QR-еквайринг',
      liItem311: 'Інтернет-еквайринг',
      address:
        'АТ «УНІВЕРСАЛ БАНК» Ліцензія НБУ №92 від 20.01.1994, Номер у держреєстрі банків № 226',
      descriptionSecond: 'Банк є учасником',
      link: 'Фонду гарантування вкладів фізичних осіб',
    },
  };

  translationENobject = {
    headerCommon: {
      dashboard: 'Dashboard',
      api: 'API',
      contacts: 'Contacts',
      option1: 'Eng',
      option2: 'Укр',
    },
    headerAdditional: {
      cards: 'Cards',
      fop: 'Business account',
      deposits: 'Deposits',
      obligations: 'Bonds',
      buyPart: 'Hire purchase',
      foreighTransactions: 'International transfers',
    },
    banner: {
      title:
        'We burned out everything excess so you can get the better experience.',
      description:
        'Leave your phone number and we will send a link to the application where you can open a business account',
      button: 'Get business account',
    },
    accountant: {
      title: 'Accounting office',
      firstDescription:
        'Separate account for bookkeeper which allows to manage business account.',
      secondDescription:
        'You can add up to two additional phone numbers to work in the web office.',
      button: 'Login to account',
      advantagesTitle: 'You have been waiting for this for so long',
      item0:
        'Completely remote service: no need visiting card issuing point or contacting with departments',
      item1: 'All monobank accounts management in one application ',
      itemDesc1:
        'We have one application for individuals and business, money transferring between individual and business accounts is simple',
      item2:
        'Payments from foreign currency accounts 24/7/365, not only 10:00 to 15:00',
      itemDesc2:
        'It is not necessary, as in other banks, to wait until the interbank is opened to sell currency - there you can only do this from 10 to 15',
      item3:
        'Separate Web-account for your bookkeeper . It is possible to add up to two numbers to work in WEB-account with business account',
      item4: 'Favorable exchange rate',
      item5: 'Friendly financial monitoring and currency control ',
    },

    steps: {
      step1: 'Get registered quickly in monobank application and get the card',
      step2: 'Be registered as an individual entrepreneur',
      step3: 'Open business account in monobank application in one touch',
    },

    tariffs: {
      title: 'Rates',
      th1: 'monobank Universal Bank',
      th2: 'Bank  1',
      th3: 'Bank  2',
      th4: 'Bank  3',
      thth1: 'Account opening white card cost',
      td11: '0 uah',
      td12: '0 uah online 100 uah in department',
      td13: '1 uah',
      td14: '50 uah',
      thth2: 'Account service cost per month',
      td21: '0 uah',
      td22: '125 uah',
      td23: '100 uah',
      td24: '129 uah',
      thth3: 'Commission for transferring to accounts of other banks',
      td31: '0 uah',
      td32: '3 uah',
      td33: '3 uah',
      td34: '2 uah',
      description: 'As of 26 of June, 2020.',
      details: 'Detailed rates',
    },

    getCard: {
      title: 'Don`t have monobank card?',
      description: "That's ok, you can get it right away",
      button: 'Get card',
      secondDescription:
        'Opening a card does not oblige. In addition to charity cashback, we have a lot of cool offers',
    },

    footer: {
      description:
        'To become our customer, you need an Android or iOS smartphone',
      ulTitle: 'Bank',
      liItem11: 'About the bank',
      liItem12: 'Career',
      liItem13: 'Contacts',
      liItem14: 'Terms, conditions and rates',
      liItem15: 'Security',
      liItem16: 'API',
      ulTitle2: 'Cards',
      liItem21: 'Black Card',
      liItem22: 'White Card',
      liItem23: 'Platinum card',
      liItem24: 'IRON card',
      liItem25: "Children's Card",
      liItem26: 'єПідтримка',
      ulTitle3: 'Products',
      liItem31: 'Hire Purchase',
      liItem32: 'Installment',
      liItem33: 'International transfers',
      liItem34: 'Private Entrepreneur',
      liItem35: 'Deposits',
      liItem36: 'Pay in restaurants',
      liItem37: 'Register payments',
      liItem38: 'Bonds',
      liItem39: 'Investments',
      liItem310: 'QR acquiring',
      liItem311: 'Internet-acquiring',
      address:
        'Universal Bank JSC License No. № 92 issued by NBU as of 20.01.1994',
      descriptionSecond: 'The bank is a member of the',
      link: 'Deposit Guarantee Fund',
    },
  };

  language: 'EN' | 'UA' = 'UA';

  changeLanguage(language: 'EN' | 'UA') {
    this.language = language;
  }
}
