import { TAG_MAP, STATUS_MAP } from "./const";


const {VIOLET, GREEN, RED, ORANGE, BLUE, LIGHT_GREEN, DARK_BLUE, YELLOW} = TAG_MAP;
const {TODO, IN_PROGRESS, DONE} = STATUS_MAP;

export const data = [
  {
    id: 1,
    status: TODO,
    title: "Нарисовать иллюстрации",
    description: "Полное описание",
    tags: [VIOLET, GREEN, RED, ORANGE, BLUE, LIGHT_GREEN, DARK_BLUE, YELLOW,],
    comments: [
      {
        id: 1,
        author: "Иван Иванов",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
      {
        id: 2,
        author: "Иван Петров",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
    ],
  },
  {
    id: 2,
    status: TODO,
    title: "Сверстать лендинг по готовому шаблону",
    description: "Полное описание",
    tags: [VIOLET, GREEN, RED, ORANGE,],
    comments: [
      {
        id: 3,
        author: "Иван Иванов",
        text: "Тестовый комментарий",
      },
    ],
  },
  {
    id: 3,
    status: TODO,
    description: "Полное описание",
    title: "Выполнить домашнее задание",
    tags: [BLUE, LIGHT_GREEN, DARK_BLUE, YELLOW,],
  },
  {
    id: 4,
    status: TODO,
    description: "Полное описание",
    title: "Прочитать статью про архитектуру frontend приложений",
    tags: [BLUE, LIGHT_GREEN, DARK_BLUE,],
    comments: [
      {
        id: 4,
        author: "Иван Иванов",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
    ],
  },
  // {
  //   id: 5,
  //   type: TaskTypes.IN_PROGRESS,
  //   title: "Изучить реакт",
  //   tags: [ta.LIGHT_GREEN, ta.RED, ta.VIOLET, ta.BLUE, ta.DARK_BLUE],
  //   description: "Тестовое описание",
  // },
  // {
  //   id: 6,
  //   type: TaskTypes.IN_PROGRESS,
  //   title: "Прочитать книгу по JS",
  //   tags: [ta.ORANGE, ta.GREEN, ta.DARK_BLUE],
  // },
  // {
  //   id: 7,
  //   type: TaskTypes.DONE,
  //   title: "Прибраться дома",
  //   tags: [ta.VIOLET, ta.GREEN, ta.RED, ta.BLUE],
  // },
  // {
  //   id: 8,
  //   type: TaskTypes.DONE,
  //   title: "Послушать лекцию по реакту",
  //   tags: [ta.LIGHT_GREEN, ta.DARK_BLUE],
  // },
  // {
  //   id: 9,
  //   type: TaskTypes.DONE,
  //   title: "Сварить и выпить кофий",
  //   tags: [ta.RED, ta.DARK_BLUE, ta.BLUE],
  // },
];
