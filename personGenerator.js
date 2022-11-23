const personGenerator = {
  surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
  firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Владимир",
            "id_6": "Петр",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Олег"
        }
    }`,
  firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Евгения",
            "id_2": "Анна",
            "id_3": "Елизавета",
            "id_4": "Анастасия",
            "id_5": "Ольга",
            "id_6": "Светлана",
            "id_7": "Ксения",
            "id_8": "Дарья",
            "id_9": "Наталья",
            "id_10": "Полина"
        }
    }`,
  profMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "охранник",
            "id_2": "механик",
            "id_3": "электрик",
            "id_4": "слесарь",
            "id_5": "сварщик",
            "id_6": "водитель",
            "id_7": "строитель",
            "id_8": "каменщик",
            "id_9": "физик",
            "id_10": "фермер"
        }
    }`,
  profFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "учительница",
            "id_2": "воспитательница",
            "id_3": "швея",
            "id_4": "лаборантка",
            "id_5": "ткачиха",
            "id_6": "стюардесса",
            "id_7": "актриса",
            "id_8": "продавщица",
            "id_9": "балерина",
            "id_10": "спортсменка"
        }
    }`,
  months: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

  GENDER_MALE: "мужчина",
  GENDER_FEMALE: "женщина",

  randomIntNumber: (max = 1, min = 0) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
    const obj = JSON.parse(json);
    const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
    return obj.list[prop];
  },

  randomGender: function () {
    let gender = this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
    return gender;
  },

  randomFirstName: function (gender) {
    if (gender === "мужчина") {
      return this.randomValue(this.firstNameMaleJson);
    } else {
      return this.randomValue(this.firstNameFemaleJson);
    }
  },

  randomSurname: function (gender) {
    if (gender === "мужчина") {
      return this.randomValue(this.surnameJson);
    } else {
      return `${this.randomValue(this.surnameJson)}а`;
    }
  },

  randomPatronymic: function (gender) {
    if (gender === "мужчина") {
      return `${this.randomValue(this.firstNameMaleJson)}ович`;
    } else {
      return `${this.randomValue(this.firstNameMaleJson)}овна`;
    }
  },

  randomBirthDate: function () {
    let year = function () {
      return personGenerator.randomIntNumber(2000, 1922);
    };
    let month = function () {
      return personGenerator.randomValue(personGenerator.months);
    };
    let day = function () {
      if (
        month() === "апреля" ||
        month() === "июня" ||
        month() === "сентября" ||
        month() === "ноября"
      ) {
        return personGenerator.randomIntNumber(30, 1);
      } else if (month() === "февраля") {
        return personGenerator.randomIntNumber(28, 1);
      } else {
        return personGenerator.randomIntNumber(31, 1);
      }
    };
    return `${day()} ${month()} ${year()}`;
  },

  randomProf: function (gender) {
    if (gender === "мужчина") {
      return this.randomValue(this.profMaleJson);
    } else {
      return this.randomValue(this.profFemaleJson);
    }
  },

  getPerson: function () {
    this.person = {};
    // this.person.gender = this.randomGender();
    this.person.gender = this.randomGender();
    this.person.surname = this.randomSurname(this.person.gender);
    this.person.firstName = this.randomFirstName(this.person.gender);
    this.person.patronymic = this.randomPatronymic(this.person.gender);
    this.person.birthDate = this.randomBirthDate();
    this.person.prof = this.randomProf(this.person.gender);
    return this.person;
  },
};

