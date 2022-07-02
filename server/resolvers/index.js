const { User } = require('../db/models/User');
const { Cards } = require('../db/models/Cards');
const { Projects } = require('../db/models/Projects');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const GraphQLUpload = require('graphql-upload/GraphQLUpload.js');
//using this to generate a random string to replace the text of the file.
// this is purely for myself if and when i upload images, any sensitive content
//labelng the image will be replaced with a random string.
// the same logic here will be implemented when uploading videos etc.
const generateRandomString = (length) => {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      const { id } = jwt.verify(args.token, process.env.REACT_APP_JWT_SECRET);

      const user = await User.findByPk(id);
      return user;
    },
    cards: async (parent, args) => {
      const allCards = await Cards.findAll();
      return allCards;
    },
    card: async (parent, args) => {
      const id = args.id;
      const card = await Cards.findByPk(id);
      return card;
    },
    project: async (parent, args) => {
      const id = args.id;
      const project = await Projects.findByPk(id);
      return project;
    },
    projects: async (parent, args) => {
      const allProjects = await Projects.findAll();
      return allProjects;
    },
  },
  Upload: GraphQLUpload,
  Mutation: {
    login: async (parent, args, context) => {
      try {
        const user = await User.findOne({ where: { username: args.username } });

        if (!user) {
          throw new Error('User does not exist!');
        }

        const isValid = await bcrypt.compare(args.password, user.password);
        if (!isValid) {
          throw new Error('Incorrect password');
        }

        const token = jwt.sign(
          { id: user.id, username: user.username },
          process.env.REACT_APP_JWT_SECRET,
          {
            expiresIn: '6h',
          }
        );

        return {
          token,
          user,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    createCard: async (parent, args) => {
      try {
        const newCards = await Cards.create({ ...args.input });
        return newCards;
      } catch (error) {
        console.error('did not create in server', error);
      }
    },
    updateCard: async (parent, args) => {
      try {
        const { id, title, description, field } = args.input;
        const card = await Cards.findByPk(id);

        card.set({
          title: title || card.title,
          description: description || card.description,
          field: field || card.field,
        });

        await card.save();
        return card;
      } catch (error) {
        console.error('did not update in server', error);
      }
    },
    deleteCard: async (parent, args) => {
      const id = args.id;
      const card = await Cards.findByPk(id);
      await card.destroy();
    },
    createproject: async (parent, args) => {
      try {
        const newProject = await Projects.create({ ...args.input });
        return newProject;
      } catch (error) {
        console.error('did not create project', error);
      }
    },
    updateproject: async (parent, args) => {
      try {
        const { id, title, description, githublink, applink, image, hidden } =
          args.input;
        const project = await Projects.findByPk(id);
        project.set({
          title: title || project.title,
          description: description || project.description,
          githublink: githublink || project.githublink,
          applink: applink || project.applink,
          image: image || project.image,
          hidden: hidden || project.hidden,
        });

        project.save();
        return project;
      } catch (error) {
        console.error('did not update in server', error);
      }
    },
    deleteProject: async (parent, args) => {
      try {
        const id = args.id;
        const project = await Projects.findByPk(id);
        await project.destroy();
      } catch (error) {
        console.error(error);
      }
    },
    uploadFile: async (parent, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;

      const { ext } = path.parse(filename);
      const randomName = generateRandomString(12) + ext;
      const stream = createReadStream();
      const pathName = path.join(
        __dirname,
        `../../public/projectimages/${randomName}`
      );
      //   ../../../build/blogimages
      await stream.pipe(fs.createWriteStream(pathName));

      return {
        url: `http://localhost:4000/projectimages/${randomName}`,
      };
      //https://brennanskinner.herokuapp.com/blogimages/${randomName}
    },
  },
};

module.exports = { resolvers };
