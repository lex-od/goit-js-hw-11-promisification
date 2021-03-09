import './styles.css';

// ==================== 📌 TASK 1 ====================

const delay = ms => new Promise(res => setTimeout(() => res(ms), ms));

const logger = time => console.log(`Resolved after ${time}ms`);

// ✅ Console checks
document.querySelector('.js-task1').addEventListener('click', () => {
  delay(2000).then(logger);
  delay(1000).then(logger);
  delay(1500).then(logger);
});

// ==================== 📌 TASK 2 ====================

import users from './data/users.json';

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  return Promise.resolve(updatedUsers);
};

const logger2 = updatedUsers => console.table(updatedUsers);

// ✅ Console checks
document.querySelector('.js-task2').addEventListener('click', () => {
  toggleUserState(users, 'Mango').then(logger2);
  toggleUserState(users, 'Lux').then(logger2);
});

// ==================== 📌 TASK 3 ====================

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  return new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      }
      reject(transaction.id);
    }, delay);
  });
};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

// ✅ Console checks
document.querySelector('.js-task3').addEventListener('click', () => {
  makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
  makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
  makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
  makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
});
