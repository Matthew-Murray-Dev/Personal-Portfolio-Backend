const router = require("express").Router({ mergeParams: true });

const FurtherCandidateAssessmentTwoRouter = require("./FurtherCandidateAssessmentTwo/FurtherCandidateAssessmentTwo.router")


router.use("/CA2",FurtherCandidateAssessmentTwoRouter)



module.exports = router;