const service = require("./titanDef.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const titanListObject = {
  sigurd: 151473,
  angus: 149815,
  moloch: 141229,
  araji: 123685,
  eden: 128392,
  hyperion: 129339,
  nova: 123726,
  mairi: 127650,
  avalon: 129339,
  ignis: 126330,
  vulcan: 125628,
  sylva: 124290,
  keros: 133856,
  amon: 131925,
};

function checkForDuplicates(array) {
  return new Set(array).size !== array.length;
}

async function titanDefExists(req, res, next) {
  const { titanDef_id } = req.params;
  const titanDef = await service.listTitanDef(titanDef_id);
  if (titanDef && titanDef.length !== 0) {
    res.locals.titanDef = titanDef[0];
    
    return next();
  }
  return next({ status: 404, message: "TitanDefense cannot be found." });
}

function hasData(req, res, next) {
  if (req.body.data) {
       return next();
  }
  next({ status: 400, message: "body must have data property" });
}

function hasDefLine(req, res, next) {
  const defLine = req.body.data.defLine;
  const adjustedDefLine = defLine.toLowerCase().split(" ");

  if (
    adjustedDefLine.length === 5 &&
    adjustedDefLine.every((titan) => titanListObject[titan] > 1) &&
    !checkForDuplicates(adjustedDefLine)
  ) {
    let titanLinePower = 0;

    adjustedDefLine.forEach(
      (titan) => (titanLinePower += titanListObject[titan])
    );

    req.body.data.maxPower = titanLinePower;
    return next();
  }
  next({ status: 400, message: "Must list 5 valid titans with no duplicates" });
}

function hasOffLine(req, res, next) {
  const offLine = req.body.data.offLine;
  const adjustedOffLine = offLine.toLowerCase().split(" ");

  if (
    adjustedOffLine.length === 5 &&
    adjustedOffLine.every((titan) => titanListObject[titan] > 1) &&
    !checkForDuplicates(adjustedOffLine)
  ) {
    return next();
  }
  next({ status: 400, message: "Must list 5 valid titans with no duplicates" });
}

/*function hasSkyCondition(req, res, next) {
  const skyCondition = Number(req.body.data.sky_condition)

  if (validSkyConditions.includes(skyCondition)) {
    return next()
  }
  next({status: 400, message: `sky_condition must be one of: ${validSkyConditions}`})
}*/

async function create(req, res) {
  const newTitanLine = await service.create(req.body.data);

  res.status(201).json({
    data: newTitanLine,
  });
}

async function list(req, res) {
  const data = await service.list();
  res.json({
    data,
  });
}

function listTitanDef(req, res, next) {
  const {titanDef} = res.locals;
   res.json({ data: titanDef });
}

async function updateTitanDef(req, res, next) {
  const updatedTitanDef = {
    ...res.locals.titanDef,
    ...req.body.data,
  };
  await service.updateTitanDef(updatedTitanDef);
  const reReadData = await service.listTitanDef(
    res.locals.TitanDef.titanDef_id
  );
  const output = await service.listTitanDef(reReadData.titanDef_id);

  res.json({ data: output });
}

async function deleteTitanDef(req, res, next) {
  
  service
    .deleteTitanDef(res.locals.titanDef.titanDef_id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  create: [hasData, hasDefLine, hasOffLine, asyncErrorBoundary(create)],
  list: asyncErrorBoundary(list),
  listTitanDef: [
    asyncErrorBoundary(titanDefExists),
    listTitanDef,
  ],
  updateTitanDef: [
    asyncErrorBoundary(titanDefExists),
    asyncErrorBoundary(updateTitanDef),
  ],
  deleteTitanDef: [
    asyncErrorBoundary(titanDefExists),
    asyncErrorBoundary(deleteTitanDef),
  ],
};
