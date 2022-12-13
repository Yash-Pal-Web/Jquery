
let express = require("express");
let router = express();

const {
  renderIndexFile,
  renderLoginPage,
  renderRegisterPage,
  renderDriversPage,
  renderOtherUsersPage,
  routesPage,
  reportsPage,
  // renderNewUserPage,
  renderJobPage,
  renderretailersPage,
  renderStaffPage,
  renderManifestsPage,
  renderaddDriverPage,
  rendermyProfilePage,
  renderaddRoutesPage,
  renderneedHelpPage,
  rendermodifyRoutePage,
  renderSingleRoutesPage,
  renderaddStaffPage,
  renderAddRetailers,
  renderViewStaff,
  renderViewRetailers,
  renderDriversDashboard,
  renderStaffDashboard,
  renderRetailersDashboard,
  renderAccountSettingPage,
  renderConformationPage
} = require("../../controllers/adminPanel/view");

router.get("/", renderIndexFile);
router.get("/login", renderLoginPage);
router.get("/register", renderRegisterPage);
router.get("/drivers", renderDriversPage);
router.get("/otherusers", renderOtherUsersPage);
router.get("/staff", renderStaffPage);
router.get("/retailersshippers", renderretailersPage);
router.get("/routes", routesPage);
router.get("/reports", reportsPage);
// router.get("/newUsers", renderNewUserPage);
router.get("/jobs", renderJobPage);

router.get("/manifests", renderManifestsPage);
router.get("/adddriver", renderaddDriverPage);
router.get("/myprofile", rendermyProfilePage);
router.get("/addroutes", renderaddRoutesPage);
router.get("/needhelp", renderneedHelpPage);
router.get("/modifyroute", rendermodifyRoutePage);
router.get("/modifysingleroutes", renderSingleRoutesPage);
router.get("/addstaff", renderaddStaffPage);
router.get("/addretailers", renderAddRetailers);
router.get("/viewstaff", renderViewStaff);
router.get("/viewretailers", renderViewRetailers);
router.get("/driverdashboard", renderDriversDashboard);
router.get("/staffdashboard", renderStaffDashboard);
router.get("/retailersdashboard", renderRetailersDashboard);
router.get("/accountsetting", renderAccountSettingPage);
router.get("/conform", renderConformationPage);

module.exports = router;
