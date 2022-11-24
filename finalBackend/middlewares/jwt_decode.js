const async = require("hbs/lib/async");
const BaseRepo = require("../app/Repository/BaseRepository");
const { alumniTable, collegeRegisteration } = require("../models");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
const CONFIG = require("../config/config");

async function Middleware(req, res, next) {
  const authHeader = req.header("Authorization");
  const userToken = authHeader.split(" ")[1];
  console.log(userToken);
  if (!userToken) {
    return res.status(401).json({ message: "Unauthorised Access" });
  }
  console.log("secret", CONFIG.jwtsecret);
  jwt.verify(userToken, CONFIG.jwtsecret, async (err, data) => {
    console.log("dT", data);
    if (err) {
      return res.status(403).json({ message: "Invalid token", err });
    }
    console.log("jwt payload --> ", data);
    if (data.Role === "alumni") {
      const params = {
        searchParams: { EnrollmentNo: data.EnrollmentNo },
      };

      const userData = await BaseRepo.baseDetail(alumniTable, params);
      console.log("in alumini", userData);
      //   return res.json(200, { user: userData.dataValues });
      return res.json({ User: userData });
    } else if (data.Role === "college") {
      const params = {
        searchParams: { CollegeId: data.CollegeId },
      };

      const userData = await BaseRepo.baseDetail(collegeRegisteration, params);
      return next({ userData });
    } else {
      return next({ invalid: "Invalid user" });
    }

    // req.user = userData
    // res.send(userData)
    // req.user(userData)
  });
}

module.exports = Middleware;

// async function middleware(req,res,next){

// }
