import React from "react";
import formattedDate from "../utils/formattedDate";

const BookCourseCard = ({ title, dates, onClick }) => (
  <div className="book-course">
    <div className="border-bottom">{title}</div>
    <div>
      <form className="overflow-hidden">
        <div className="select-container">
          <select className="mb-3">
            <option selected>Select course date</option>
            {dates.map((date, index) => (
              <option key={`${date.date}${index}`}>
                {formattedDate(date.date)}
                {date.type && ` - ${date.type}`}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
    <button onClick={onClick}>BOOK COURSE</button>
  </div>
);

export default BookCourseCard;
