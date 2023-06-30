const service = require("./FurtherCandidateAssessmentTwo.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");



async function list(req, res) {
    const queryOne = await service.listAuthorsAndBooks();
    const queryTwo = await service.listAuthorsByCountryCode()
    const queryThree = await service.listAuthorsByNumberOfBooks()
    const queryFour = await service.countBooksFromUSAAuthors()
    const queryFive = await service.listBooks20Discount30()
    const querySix = await service.listCheapestBookPerAuthor()
    
    res.json({
      data:{queryOne,queryTwo,queryThree,queryFour,queryFive,querySix}
    });
  }

module.exports = { list: asyncErrorBoundary(list) };
