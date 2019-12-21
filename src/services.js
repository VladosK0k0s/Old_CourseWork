import axios from "axios";

export const GenerateJWT = (header, claims, key, cb) => {
  // Send POST request to /api/GenerateJWT
  axios
    .post("/api/GenerateJWT", {
      header,
      claims,
      key
    })
    .then(function(res) {
      cb(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};
export const DecodeJWT = (sJWS, cb) => {
  // Send POST request to /api/DecodeJWT
  axios
    .post("/api/DecodeJWT", {
      sJWS
    })
    .then(function(res) {
      cb(res);
    })
    .catch(function(err) {
    });
};
export const ValidateJWT = (header, token, key, cb) => {
  // Send POST request to /api/ValidateJWT
  axios
    .post("/api/ValidateJWT", {
      header,
      token,
      key
    })
    .then(function(res) {
      cb(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};
export const GenUser = (user, cb) => {
  axios
    .post("/api/Users/SignIn", user)
    .then(function(res) {
      cb(res);
    })
    .catch(function(err) {
      cb(err.response, true);
    });
};

export const GenTruck = (truck, cb) => {
  axios
    .post("/api/trucks/add", truck)
    .then(function(res) {
      cb(res);
    })
    .catch(function(err) {
      cb(err.response, true);
    });
};
export const DelTruck = (id, cb) => {
  axios
    .post("/api/trucks/del",{id: id})
    .then(function(res) {
      cb(res);
    })
    .catch(function(err) {
      cb(err.response, true);
    });
};


export const CheckInput = (data, cb) =>{
  axios
    .post("/api/Users/Check", data)
    .then(function(res) {
      cb(res);
    })
    .catch(function(err) {
      cb(err.response, true);
    });
}