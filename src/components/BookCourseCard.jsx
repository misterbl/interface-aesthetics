import React from "react";

const BookCourseCard = ({ title, dates }) => (
  <div className="book-course">
    <div>{title}</div>
    <div>
      <select className="form-control form-control-sm">
        <option selected>Select course date</option>
        {dates.map(date => (
          <option key={date}>{date}</option>
        ))}
      </select>
    </div>
    <button>BOOK COURSE</button>
  </div>
);

export default BookCourseCard;
