import React from "react";

const BookCourseCard = ({ title, dates }) => (
  <div className="book-course">
    <div>{title}</div>
    <div>
      <select class="form-control form-control-sm">
        <option selected>Select course date</option>
        {dates.map(date => (
          <option>{date}</option>
        ))}
      </select>
    </div>
    <button>BOOK COURSE</button>
  </div>
);

export default BookCourseCard;
