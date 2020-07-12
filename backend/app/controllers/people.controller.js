const autheticatedRoute = require("../modules/authenticatedRoute.module");
const router = autheticatedRoute;

const MAX_PERCETUAL = 100;

const PeopleSchema = require("../models/people.model");

/**
 * List all people
 */
router.get("", async (req, res) => {
  try {
    const people = await PeopleSchema.find({});

    return res.send(people);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

/**
 * Create a new people instance
 */
router.post("", async (req, res) => {
  try {
    const { participation } = req.body;

    /**
     * Fetching the all documents from People Schema
     */
    const allPeople = await PeopleSchema.find({});

    /**
     * Setting a variable to save the total value of participations already
     * created.
     */
    participationsPercetual = 0;

    allPeople.map(
      ({ participation }) => (participationsPercetual += participation)
    );

    /**
     * Projecting the total value of participations after creating a new
     * document
     */
    const totalParticipation = participation + participationsPercetual;

    /**
     * Checking if the projected value of the participations is greater than the
     * allowed total
     */
    if (totalParticipation > MAX_PERCETUAL) {
      return res.status(400).send({
        message: `People's participation have reached the maximum allowed value. 
        The participation available is ${
          MAX_PERCETUAL - participationsPercetual
        }`,
      });
    }

    /**
     * Creating a new people document
     */
    const people = await PeopleSchema.create(req.body);

    return res.send(people);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

/**
 * Update a people instance
 */
router.put("/:people_id", async (req, res) => {
  const { people_id } = req.params;

  try {
    const { participation } = req.body;

    /**
     * Fetching the all documents from People Schema
     */
    const people = await PeopleSchema.find({});

    /**
     * Setting a variable to save the total value of participations without the
     * current instance participation.
     */
    let allPercentualWithoutCurrentPeople = 0;

    /**
     * Adding the values ​​of the participations with the value of the current
     * instance.
     */
    people.map((item) => {
      allPercentualWithoutCurrentPeople += item.participation;
    });

    /**
     * Fetching the People document (current instance)
     */
    const peopleIntance = await PeopleSchema.findById(people_id);

    /**
     * Removing the value of the participations of the current instance
     */
    allPercentualWithoutCurrentPeople -= peopleIntance.participation;

    /**
     * Projecting the total value of participations after updating the current
     * instance
     */
    const allPercentual = allPercentualWithoutCurrentPeople + participation;

    /**
     * Checking if the projected value of the participations is greater than the
     * allowed total
     */
    if (allPercentual > MAX_PERCETUAL) {
      return res.status(400).send({
        message: `The final value of the participations will be greater than the maximum allowed. Maximum expected value: ${
          MAX_PERCETUAL - allPercentualWithoutCurrentPeople
        }`,
      });
    }

    /**
     * assign the request body to people document
     */
    Object.assign(peopleIntance, req.body);

    /**
     * save
     */
    await peopleIntance.save();

    return res.send(peopleIntance);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

/**
 * Delete a people instance
 */
router.delete("/:people_id", async (req, res) => {
  const { people_id } = req.params;

  try {
    const people = await PeopleSchema.findById(people_id);

    await people.remove();

    return res.status(204).send();
  } catch (error) {
    return res.status(400).json({
      message: `The people's reference from id [${people_id}] was not found.`,
    });
  }
});

module.exports = (app) => app.use("/people", router);
