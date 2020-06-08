const router = require("express").Router();

const employees = [
  {
    name: "Paul Blart",
    position: "Mall Cop",
    id: "3"
  }
]

// Matches with "/api/employee"
router.route("/")
  .get(function(req, res){
    res.json(employees)

  })
  
module.exports = router;
