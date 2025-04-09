export const RegisterInput = [
  {
    icon: 'person',
    p: 'First Name',
    name: 'f_name',
  },
  {
    icon: 'person',
    p: 'Last Name',
    name: 'l_name',
  },
  {
    icon: 'email',
    p: 'Email',
    name: 'email',
  },
  /*
  {
    icon: 'phone',
    p: 'Phone Number',
    name: 'number',
    title: 'UK and USA Phone Number',
  },
  {
    icon: 'pin-drop',
    p: 'Address',
    name: 'address',
  },
  */
  {
    icon: 'lock',
    p: 'Password',
    name: 'password',
    pw: true,
  },
  {
    icon: 'lock',
    p: 'confirm Password',
    name: 'c_pass',
    pw: true,
  },
];

export const start = {x: 0, y: 0};
export const end = {x: 1, y: 0};

export const defaultData = [
  {
    course_name: 'Bible Study',
    game_title: 'Interact!',
    image_guest:
      'https://images.unsplash.com/photo-1558690295-5dc6a19d8327?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    game_status: 'INCOMPLETE',
  },
  {
    course_name: 'Learn Bible',
    game_title: 'Interact!',
    image_guest:
      'https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    game_status: 'INCOMPLETE',
  },
  {
    course_name: 'Study of Bible',
    game_title: 'Interact!',
    image_guest:
      'https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    game_status: 'INCOMPLETE',
  },
];

export const genderData = [
  {key: 'male', value: 'male'},
  {key: 'female', value: 'female'},
];

export const chatInboxData = [
  {
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww',
    title: 'Lana Ann',
    id: 10,
    lastMsg: 'he is a good developer',
    createdAt: '2025-02-27T17:17:52+05:00',
  },
  {
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww',
    title: 'Emma Affan',
    id: 10,
    lastMsg: 'he is a good developer',
    createdAt: '2025-02-27T17:17:52+05:00',
  },
  {
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww',
    title: 'Mr Anderson',
    id: 10,
    lastMsg: 'he is a good developer',
    createdAt: '2025-02-27T17:17:52+05:00',
  },
];
