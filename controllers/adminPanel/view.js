
const universalFunctions = require("../../utils/universalFunctions");
const responseMessages = require("../../resources/response.json");
const Boom = require("boom");
const config = require("config");
const appConstants = require("../../appConstants");
const bcryptFunctions = require("../../utils/bcrypt");
let User = require("../../models").User;

// const createAdminUser = async () => {
//   try {
//     const alreadyExist = await User.findOne({
//       where: {
//         email: config.get("adminAuth.adminEmail"),
//         role: "admin",
//       },
//     });

//     if (alreadyExist) {
//       throw Boom.badRequest(responseMessages.ALREADY_EXIST_ADMIN);
//     } else {
//       let password = bcryptFunctions.createHash(
//         config.get("adminAuth.adminPassword")
//       );
//       console.log("password", password);
//       const user = await User.create({
//         email: config.get("adminAuth.adminEmail"),
//         password: password,
//         role: "admin",
//       });

//       if (user) {
//         console.log("Admin User Created");
//       }
//     }
//   } catch (err) {
//     if (err.message === "Admin User already exists") {
//       console.log("Admin User Created");
//     } else {
//       console.log("error", err);
//     }
//   }
// };

// createAdminUser();

const renderIndexFile = async (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};
const rendermodifyRoutePage = async (req, res) => {
  try {
    res.render("modifyroute");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};
const renderneedHelpPage = async (req, res) => {
  try {
    res.render("needhelp");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};
const renderaddRoutesPage = async (req, res) => {
  try {
    res.render("addroutes");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};
const renderaddDriverPage = async (req, res) => {
  try {
    res.render("adddriver");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};
const renderManifestsPage = async (req, res) => {
  try {
    res.render("manifests");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};
const rendermyProfilePage = async (req, res) => {
  try {
    res.render("myprofile");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderLoginPage = async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderRegisterPage = async (req, res) => {
  console.log("body-------",req.body);
  console.log("cookies-------",req.cookie);
  console.log("session-------",req.session);
  const user=req?.session?.passport?.user || {id:"31242"}
  try {
    res.render("register",user);
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderDriversPage = async (req, res) => {
  try {
    res.render("drivers");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderOtherUsersPage = async (req, res) => {
  try {
    res.render("otherusers");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};
const renderStaffPage = async (req, res) => {
  try {
    res.render("staff");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};
const renderretailersPage = async (req, res) => {
  try {
    res.render("retailersshippers");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const reportsPage = async (req, res) => {
  try {
    res.render("reports");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};
const renderSingleRoutesPage = async (req, res) => {
  try {
    res.render("modifysingleroutes");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const routesPage = async (req, res) => {
  try {
    res.render("routes");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderNewUserPage = async (req, res) => {
  try {
    res.render("newUser");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderJobPage = async (req, res) => {
  try {
    res.render("jobs");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};



const renderaddStaffPage = async (req, res) => {
  try {
    res.render("addstaff");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderLogutPage = async (req, res) => {
  try {
    res.render("Logout");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderAddRetailers = async (req, res) => {
  try {
    res.render("addretailers");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};


const renderViewStaff = async (req, res) => {
  try {
    res.render("viewstaff");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderViewRetailers = async (req, res) => {
  try {
    res.render("viewretailers");

  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderDriversDashboard = async (req, res) => {
  try {
    res.render("driverdashboard");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderStaffDashboard = async (req, res) => {
  try {
    res.render("staffdashboard");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderRetailersDashboard = async (req, res) => {
  try {
    res.render("retailersdashboard");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderAccountSettingPage = async (req, res) => {
  try {
    res.render("accountsetting");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};

const renderConformationPage = async (req, res) => {
  try {
    res.render("conform");
  } catch (err) {
    return universalFunctions.sendError(err, res);
  }
};


module.exports = {
  renderIndexFile,
  renderLoginPage,
  renderRegisterPage,
  renderDriversPage,
  renderOtherUsersPage,
  renderNewUserPage,
  renderJobPage,
  
  routesPage,
  reportsPage,
  renderretailersPage,
  renderStaffPage,
  renderManifestsPage,
  renderaddDriverPage,
  rendermyProfilePage,
  renderaddRoutesPage,
  renderneedHelpPage,
  rendermodifyRoutePage,
  renderSingleRoutesPage,
  renderLogutPage,
  renderStaffPage,
  renderaddStaffPage,
  renderAddRetailers,
  renderViewStaff,
  renderViewRetailers,
  renderDriversDashboard,
  renderStaffDashboard,
  renderRetailersDashboard,
  renderAccountSettingPage,
  renderConformationPage
};


