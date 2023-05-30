import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
});

const getPosts = async () => {
  const res = await instance.get("/post");
  return res.data;
};

const createUser = async (name, email, user, pass) => {
  const res = await instance.post('/user', {
    name, email, user, pass
  });
  return res.data;
}


const getProfileId = async (_id) => {
  console.log(_id);
  const res = await instance.post("/user/profile", {
    _id,
  });
  return res.data;
};

const loginUsuario = async (user, pass) => {
  const res = await instance.post("/user/login", {
    user,
    pass,
  });
  return res.data;
};

const editUser = async (_id, name, descript, user, photo) => {
  const res = await instance.post("/user/edit", {
    _id,
    name,
    descript,
    user,
    photo,
  });
  return res.data;
};

const getCommetns = async (_id) => {
  const res = await instance.get("/comment/comment", {
    _id,
  });
  return res.data;
};

const createComments = async (comment, user, post) => {
  const res = await instance.post("/comment/create", {
    comment,
    user,
    post,
  });
  return res.data;
};

export {getPosts, createUser, loginUsuario, getCommetns,
  createComments, editUser, getProfileId
};

