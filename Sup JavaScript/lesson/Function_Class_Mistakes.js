// class bankAccount {#
//     balance = 0;
//     constructor(balance) {
//         if (balance < 0) {
//             throw new Error('Отрицательный баланс для инициализации счета');
//         }
//         this.#balance = balance;
//     }

//     get balance() {
//             return this.#balance;
//         }
//         // set balance(balance){
//         //     return this.#balance = balance;
//         // }

//     deposit(cash) {
//         if (cash <= 0) {
//             throw new Error('Сумма депозита должна быть больше 0');
//         }
//         this.#balance += cash;
//         return this.#balance;
//     }
//     withdraw(cash) {
//         if (cash <= 0) {
//             throw new Error('Сумма для снятия должна быть больше 0');
//         }
//         if (this.#balance - cash < 0) {
//             throw new Error('Сумма для снятия больше суммы на счете');
//         }
//         this.#balance -= cash;
//         return this.#balance;
//     }
// }

// let account = new bankAccount(500);
// console.log(account(balance));

// account.deposit(200);
// console.log(account.deposit);

// account.withdraw(200);
// console.log(account.withdraw);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// class User {#
//     name;#
//     family;
//     constructor(name, family) {
//         this.#name = name;
//         this.#family = family;
//     }
//     get name() {
//         return this.#name;
//     }
//     get family() {
//         return this.#family;
//     }

//     class RegularUser extends User {
//         constructor(name, family) {
//             super(name, family);
//         }
//     }
//     class PremiumUser extends User {
//         constructor(name, family) {
//             super(name, family);
//         }
//         premiumAccount = null;
//         setPremiumAccount() {
//             this.premiumAccount = new Date().setFullYear(new Date().getFullYear()) + 1);

//     }
// }

// function getAccountInfo(user) {
//     if (user instanceof PremiumUser) {
//         console.log('Премиум аккаунт действителен до ${new Date(user.premiumAccount).getFullYear()}' ? ? 'Информация отсутствует', user.name, user.family);
//     } else if (user instanceof RegularUser) {
//         console.log('Пользователь без премиум аккаунта', user.name, user.family);
//     } else {
//         console.log('Тип пользователя не определен')
//     }
// }
// }
// const regular = newRegularUser('Вася', 'Иванов');
// const premium = new PremiumUser('Оля', 'Олина');
// premium.setPremiumAccount();
// const premiumLim = new PremiumUser('Поля', 'Гагарина');
// getAccountInfo(regular);
// getAccountInfo(premium);
// getAccountInfo(premiumLim);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
// class User {#
//     name;#
//     family;

//     constructor(name, family) {
//         this.#name = name;
//         this.#family = family;
//     }

//     get name() {
//         return this.#name;
//     }

//     get family() {
//         return this.#family;
//     }
// }

// class RegularUser extends User {
//     constructor(name, family) {
//         super(name, family);
//     }
// }

// class PremiumUser extends User {
//     constructor(name, family) {
//         super(name, family);
//         this.premiumAccount = null;
//     }

//     setPremiumAccount() {
//         const currentDate = new Date();
//         currentDate.setFullYear(currentDate.getFullYear() + 1);
//         this.premiumAccount = currentDate;
//     }
// }

// function getAccountInfo(user) {
//     if (user instanceof PremiumUser) {
//         console.log(`Премиум аккаунт действителен до ${user.premiumAccount ? new Date(user.premiumAccount).getFullYear() : 'Информация отсутствует'}`, user.name, user.family);
//     } else if (user instanceof RegularUser) {
//         console.log('Пользователь без премиум аккаунта', user.name, user.family);
//     } else {
//         console.log('Тип пользователя не определен');
//     }
// }

// const regular = new RegularUser('Вася', 'Иванов');
// const premium = new PremiumUser('Оля', 'Олина');
// premium.setPremiumAccount();
// const premiumLim = new PremiumUser('Поля', 'Гагарина');

// getAccountInfo(regular);
// getAccountInfo(premium);
// getAccountInfo(premiumLim);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
const comment = document.querySelector('.comment');
const btn = document.querySelector('.btn');
const num = document.querySelector('.num');
btn.addEventListener('click', function(e) {
    try {
        const inputElement = num.value;
        if (isNaN(inputElement)) {
            throw new Error('Это не число');
        }
        comment.textContent = "Молодец";
    } catch (error) {
        comment.textContent = error.message;

    }
})