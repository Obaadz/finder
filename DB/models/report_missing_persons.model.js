import { Schema, Types, model } from "mongoose";
const report_missing_personsSchema = new Schema(
  {
    // image: {
    //   secure_url: {type: String, required: true},
    //   public_id: {type: String, required: true},
    // },
    images: [
      {
        secure_url: { type: String, required: true },
        public_id: { type: String, required: true },
      },
    ],
    labelFaceModel: {
      type: String,
      required: true,
      min: 3,
      max: 100,
    },
    fullName: {
      type: String,
    },
    motherName: {
      type: String,
    },
    fatherName: {
      type: String,
    },
    class: {
      type: String,
    },
    address: {
      type: String,
    },
    missingGender: {
      type: String,
      enum: ["Male", "Female"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    healthStatus: {
      type: String,
      enum: ["healthy", "sick", "SpecialNeeds"],
    },
    age: { type: Number, min: 1, max: 100 },
    dateOfLoss: {
      type: Date,
    },
    missingPersonClassification: {
      type: String,
      enum: ["Lost", "Kidnapped", "Runaway", "others"],
    },
    wherePersonLost: { type: String },
    absenceReport: {
      type: String,
      enum: ["Yes", "No", "No clue"],
      default: "No clue",
    },
    city: { type: String },
    country: { type: String },
    birthMark: String,
    // Data of the reporting person
    phone: { type: String, min: 0, max: 11 },
    relationMissingPerson: {
      type: String,
      enum: ["first degree relative", "second degree relative", "third degree relative", "others"],
    },
  },
  { timestamps: true, strictQuery: true }
);

report_missing_personsSchema.query.paginate = function (page) {
  // this >>>>> query
  // return query
  page = !page || page < 1 || isNaN(page) ? 1 : page;
  const limit = 20;
  const skip = limit * (page - 1);
  return this.skip(skip).limit(limit);
};
export const reportMissingPersonsrModel = model("Finder", report_missing_personsSchema);
