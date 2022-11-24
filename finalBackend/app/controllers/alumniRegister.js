"use strict";
const { alumniTable } = require("../../models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const baseRepo = require("../Repository/BaseRepository");

module.exports = {
  RegisterAlumni,
  UpdateDetails,
};

async function RegisterAlumni(req, res, next) {
  try {
    const salt = await bcrypt.genSalt(10);

    const Secpassword = await bcrypt.hash(req.body.Password, salt);
    const data = {
      Name: req.body.Name,
      EnrollmentNo: req.body.EnrollmentNO,
      CollegeId: req.body.CollegeId,
      EmailId: req.body.EmailId,
      Password: Secpassword,
      YearOfPassing: req.body.YearOfPassing,
    };

    const FormedData = await baseRepo.baseCreate(alumniTable, data);

    console.log("data entered :", FormedData);
    res.status(200).json("data sent successfully");
    return next();
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

async function UpdateDetails(req, res, next) {
  try {
    const update = await db.alumniregistration.update(
      {
        QualificationDetails: req.body.QualificationDetails,
        YearOfPassing: req.body.YearOfPassing,
        CurrentlyDoing: req.body.CurrentlyDoing,
        FurtherPlanes: req.body.FurtherPlans,
        ContactNo: req.body.ContactNo,
        Bio: req.body.bio,
        LinkedinId: req.body.LinkedinId,
      },
      {
        where: {
          id: 1,
        },
      }
    );
    res.status(200).json({ update });
    return next();
  } catch (error) {
    console.log("error found", error);
    return next(error);
  }
}
