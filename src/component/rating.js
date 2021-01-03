import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rate = () => {
  const [rate, setRate] = useState(null);
  const [hover, setHover] = useState(null);
  const [tr1, setTr1] = useState(2);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const valueRating = i + 1;

        return (
          <label>
            <input
              style={{ display: "none" }}
              type="radio"
              value={valueRating}
              onClick={() => setRate(valueRating)}
            />
            <FaStar
              size={50}
              color={
                valueRating === 0
                  ? (valueRating = 4) && valueRating <= (hover || rate)
                    ? "#F9CD56"
                    : "#848481"
                  : valueRating <= (hover || rate)
                  ? "#F9CD56"
                  : "#848481"
              }
              onMouseEnter={() => setHover(valueRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};
export default Rate;
