import { ValidationError } from "yup";
import createHttpError from "http-errors";

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (err) {
    if (err instanceof ValidationError) {
      const error = createHttpError(400, err.message);
      return next(error);
    }

    const error = createHttpError(500, "Internal server error");
    next(error);
  }
};
