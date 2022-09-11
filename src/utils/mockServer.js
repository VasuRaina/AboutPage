const kiranBio =
  'My name is Kiran Shrestha. I am Computer Science major in SFSU. I am a senior. I am one of the members of Team02. I am handling Front-End part of this project. I love working in a group and meeting new people. I like hiking, biking and cooking in my leisure . I like to play guitar once in a while and I love playing Fifa.';

const seanBio =
  'My name is Sean Locklar. I am the Scrum Master for my CSC648-04 course software development team. I am confident in my communication skills and I try to be flexible while maintaining a regular schedule. I enjoy meeting with and talking to new people, playing video games in my free time and going hiking and to the gym to get some exercise. I would say one of my weaknesses is my tendency to become distracted when trying to focus on a single task for especially extended periods of time and so with this in mind I prefer to complete tasks in short sprints with minor breaks in between.';

const akashBio =
  'Hi, My name is Akash Thiagarajan. I am a 4th year at San Francisco State University majoring in computer science. I am one of the members of team 2 in CSC 648-04. My role is back-end lead . I play video games in my free time. I enjoy learning new things and working on group projects.';

const kartikeyBio =
  "Hi. My name is Kartikey Sarode and I'm a graduate freshman at SF State. I'm the Github Master for Team 2 in CSC-848-04 course. I have prior work experience as a DevOps engineer. In my free time, I like to listen to music, watch anime/F1 and play badminton.";

const vasuBio =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

export const retrieveUserData = (profileName) => {
  let bio;
  if (profileName === 'kiran') {
    bio = kiranBio;
  }
  if (profileName === 'sean') {
    bio = seanBio;
  }
  if (profileName === 'akash') {
    bio = akashBio;
  }
  if (profileName === 'kartikey') {
    bio = kartikeyBio;
  }
  if (profileName === 'vasu') {
    bio = vasuBio;
  }

  const payload = {
    profileBio: bio,
  };

  return payload;
};
