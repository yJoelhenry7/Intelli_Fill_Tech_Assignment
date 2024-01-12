import { Link } from "react-router-dom";
import { DetailedDescription } from "../Data";

const ExamCardDesc = () => {
  return (
    <div
      className="border-2 p-4 rounded-xl shadow-lg mt-4"
      style={{ width: "35rem" }}
    >
      <div className="mx-2 p-2">
        <div>
          {DetailedDescription.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold my-3">{section.descType}</h3>
              {section.ExamDescription && (
                <ul className="list-disc ml-8">
                  {section.ExamDescription.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.Eligibility && (
                <ul className="list-disc ml-8">
                  {section.Eligibility.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.ImportantDetails && (
                <ul className="list-disc ml-8">
                  {section.ImportantDetails.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center mt-8">
        <div className="flex gap-2">
          <Link>
            <img
              className="w-10"
              src="data:image/png;base64,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"
              alt=""
            />
          </Link>
          <Link>
            <img
              className="w-11"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxcZnWojUniS3M-HhVeLG8jXF1rnHt-_sDw&usqp=CAU"
              alt=""
            />
          </Link>
          <Link>
            <img
              className="w-10"
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
              alt=""
            />
          </Link>
        </div>
        <Link to="#" className="text-blue-500">
          Report this Job
        </Link>
      </div>
    </div>
  );
};

export default ExamCardDesc;
