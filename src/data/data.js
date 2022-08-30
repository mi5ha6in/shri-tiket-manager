import { TAG_MAP, STATUS_MAP } from "./const";
import { nanoid } from "nanoid";


const {VIOLET, GREEN, RED, ORANGE, BLUE, LIGHT_GREEN, DARK_BLUE, YELLOW} = TAG_MAP;
const {TODO, IN_PROGRESS, DONE} = STATUS_MAP;

export const data = [
  {
    id: nanoid(),
    status: TODO,
    title: "Нарисовать иллюстрации",
    description: "Полное описание",
    tags: [VIOLET, GREEN, RED, ORANGE, BLUE, LIGHT_GREEN, DARK_BLUE, YELLOW,],
    comments: [
      {
        id: nanoid(),
        author: "Иван Иванов",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
      {
        id: nanoid(),
        author: "Иван Петров",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
    ],
  },
  {
    id: nanoid(),
    status: TODO,
    title: "Сверстать лендинг по готовому шаблону",
    description: "Полное описание",
    tags: [VIOLET, GREEN, RED, ORANGE,],
    comments: [
      {
        id: nanoid(),
        author: "Иван Иванов",
        text: "Тестовый комментарий",
      },
    ],
  },
  {
    id: nanoid(),
    status: TODO,
    description: "Полное описание",
    title: "Нарисовать иллюстрации",
    tags: [BLUE, LIGHT_GREEN, DARK_BLUE, YELLOW,],
  },
  {
    id: nanoid(),
    status: TODO,
    description: "Полное описание",
    title: "Прочитать статью про архитектуру frontend приложений",
    tags: [BLUE, LIGHT_GREEN, DARK_BLUE,],
    comments: [
      {
        id: nanoid(),
        author: "Иван Иванов",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
    ],
  },
  {
    id: nanoid(),
    status: IN_PROGRESS,
    title: "Нарисовать иллюстрации",
    description: "Полное описание",
    tags: [VIOLET, GREEN, RED, ORANGE, BLUE, LIGHT_GREEN, DARK_BLUE, YELLOW,],
    comments: [
      {
        id: nanoid(),
        author: "Иван Иванов",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
      {
        id: nanoid(),
        author: "Иван Петров",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
    ],
  },
  {
    id: nanoid(),
    status: IN_PROGRESS,
    title: "Сверстать лендинг по готовому шаблону",
    description: "Полное описание",
    tags: [VIOLET, GREEN, RED,],
    comments: [
      {
        id: nanoid(),
        author: "Иван Иванов",
        text: "Тестовый комментарий",
      },
    ],
  },
  {
    id: nanoid(),
    status: IN_PROGRESS,
    description: "Полное описание",
    title: "Нарисовать иллюстрации",
    tags: [BLUE, LIGHT_GREEN],
  },
  {
    id: nanoid(),
    status: DONE,
    title: "Сверстать лендинг по готовому шаблону",
    description: "Полное описание",
    tags: [VIOLET, GREEN, RED, ORANGE,],
    comments: [
      {
        id: nanoid(),
        author: "Иван Иванов",
        text: "Тестовый комментарий",
      },
    ],
  },
  {
    id: nanoid(),
    status: DONE,
    title: "Нарисовать иллюстрации",
    description: "Полное описание",
    tags: [VIOLET, GREEN, RED, ORANGE, BLUE, LIGHT_GREEN, DARK_BLUE, YELLOW,],
    comments: [
      {
        id: nanoid(),
        author: "Иван Иванов",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
      {
        id: nanoid(),
        author: "Иван Петров",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
    ],
  },
  {
    id: nanoid(),
    status: DONE,
    title: "Сверстать лендинг по готовому шаблону",
    description: "Полное описание",
    tags: [VIOLET, GREEN],
    comments: [
      {
        id: nanoid(),
        author: "Иван Иванов",
        text: "Тестовый комментарий",
      },
    ],
  },
  {
    id: nanoid(),
    status: DONE,
    title: "Нарисовать иллюстрации",
    description: "Полное описание",
    tags: [VIOLET, GREEN, RED, ORANGE, BLUE, LIGHT_GREEN, DARK_BLUE, YELLOW,],
    comments: [
      {
        id: nanoid(),
        author: "Иван Иванов",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
      {
        id: nanoid(),
        author: "Иван Петров",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
    ],
  },
  {
    id: nanoid(),
    status: DONE,
    title: "Нарисовать иллюстрации",
    description: "Полное описание",
    tags: [VIOLET, GREEN, RED, ORANGE, BLUE, LIGHT_GREEN, DARK_BLUE, YELLOW,],
    comments: [
      {
        id: nanoid(),
        author: "Иван Иванов",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
      {
        id: nanoid(),
        author: "Иван Петров",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam eaque minima mollitia nihil. Aperiam corporis cupiditate delectus dicta esse et quibusdam, reiciendis. Aliquid, illum laborum minus nesciunt quas tempore.",
      },
    ],
  },
];
