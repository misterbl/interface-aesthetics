import React from "react";
import formattedDate from "../utils/formattedDate";

const BookCourseCard = ({ title, dates, onClick }) => (
  <div className="book-course">
    <div>{title}</div>
    <div>
      <form>
        <div className="select-container">
          <select className="mb-3">
            <option selected>Select course date</option>
            {dates.map(date => (
              <option key={date.date}>{formattedDate(date.date)}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
    <button onClick={onClick}>BOOK COURSE</button>
  </div>
);

export default BookCourseCard;
