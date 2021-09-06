import faker from 'faker';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const comments = [];
    const amountOfComments = Math.ceil(Math.random() * 30);

    for (let i = 0; i < amountOfComments; i++) {
      const amountOfImages = Math.ceil(Math.random() * 5);
      const images = [];

      for (let j = 0; j < amountOfImages; j++) {
        images.push(faker.image.image());
      }

      const person = {
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
        rating: Math.ceil(Math.random() * 5),
        content: faker.lorem.paragraph(),
        images,
      };

      comments.push(person);
    }

    res.status(200).json(comments);
  }
}
